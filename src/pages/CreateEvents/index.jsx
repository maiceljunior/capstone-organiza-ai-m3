import { toast } from "react-toastify";

import {
  Main,
  MainRenderListCreateEvent,
  ContentRenderListCreateEvent,
  EventCategory,
  CategoryContainer,
  HourAndDateContainer,
} from "./style";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AvatarComponent from "../../components/Avatar";
import Navbar from "../../components/NavBar";
import SearchPeopleModal from "../../components/SearchPeopleModal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import { Loading } from "./loading";
import { useForm, Controller } from "react-hook-form";
import { useUser } from "../../providers/user";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const CreateEvents = () => {
  const { user, setUser } = useUser();
  const toastId = useRef(null);

  const UserID = localStorage.getItem("UserID");
  const Token = localStorage.getItem("TokenOrganizaAi");

  const [removeLoading, setRemoveLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const handleClick = () => { };

  const schema = yup.object().shape({
    nameEvent: yup
      .string()
      .required("Seu evento precisa de um nome!")
      .max(30, "Máximo de 30 caracteres!"),
    description: yup.string().required("Campo Obrigatório!"),
    type: yup.string(),
    dateEvent: yup.string().required("Informe a data e o horário!"),
    guestsQtd: yup
      .number("Campo obrigatório!")
      .required("Campo obrigatório!")
      .max(999, "Máximo de 3 caracteres!").min(2, "Minimo de 2 pessoas para criar o evento!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setTimeout(() => {
      Api.get(`users/${UserID}`).then((res) => {
        setUser(res.data);
        setRemoveLoading(true);
      });
    }, 2000);
  }, []);

  useEffect(() => {
    Api.get("users").then((res) => {
      setUsuarios(res.data);
    });
  });

  function treatDate(value) {
    const day = new Date(value).getDay();
    const month = new Date(value).getMonth();
    const hour = new Date(value).getHours();
    const minutes = new Date(value).getMinutes();

    const dataSplit = value.split(" ");

    const dayPortuguese = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];
    const monthPortuguese = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    return [
      dayPortuguese[day],
      monthPortuguese[month],
      dataSplit[2],
      dataSplit[3],
      `${hour}:${minutes}`,
    ];
  }

  function onSubmitFunction(data) {
    const dateEventArray = treatDate(data.dateEvent);
    data.idEvento = parseInt(UserID);
    data.userId = parseInt(UserID);
    data.eventToken = Token;
    data.requests = [];
    data.denied = [];
    data.dateEvent = dateEventArray;
    data.guests = [user];

    newEvent(data);

    reset();
  }

  function newEvent(data) {
    Api.post("eventsPublics", data, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((res) => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Evento criado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao criar o evento!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <>
      <Header>
        {!removeLoading && <Loading />}
        {user.name && (
          <AvatarComponent
            onClick={handleClick}
            userName={user.name}
            userAvatar
          />
        )}
      </Header>
      <Navbar />
      <Main>
        <MainRenderListCreateEvent>
          <h2>Criar evento</h2>
          <ContentRenderListCreateEvent>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              {errors.nameEvent && (
                <span className="error">{errors.nameEvent.message}</span>
              )}
              <Input
                label={"Nome do evento"}
                register={register}
                name="nameEvent"
                placeholder="Nome do evento"
              />
              {errors.description && (
                <span className="error">{errors.description.message}</span>
              )}
              <Input
                label={"Descrição do evento"}
                name="description"
                placeholder={"Descrição do evento"}
                register={register}
              />
              {errors.guestsQtd && (
                <span className="error">Quantidade minima de 2 participantes e maxima de 999 participantes!</span>
              )}
              <Input
                inputType="number"
                label={"Quantidade de participantes necessária"}
                name="guestsQtd"
                placeholder={"Quantidade de participantes"}
                register={register}
              />

              <CategoryContainer>
                <h4>Categoria do evento</h4>
                <EventCategory name="type" {...register("type")}>
                  <option value="Outros">Outros</option>
                  <option value="Futebol">Futebol</option>
                  <option value="Tabuleiro">Tabuleiro</option>
                  <option value="Xadrez">Xadrez</option>
                  <option value="RPG">RPG</option>
                  <option value="Online">Online</option>
                </EventCategory>
              </CategoryContainer>
              {errors.dateEvent && (
                <span className="error">{errors.dateEvent.message}</span>
              )}
              <HourAndDateContainer>
                <h4>Data e Hora</h4>
                <Controller
                  control={control}
                  name="dateEvent"
                  render={({ field: { onChange, value } }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        disablePast
                        renderInput={(props) => <TextField {...props} />}
                        value={value}
                        onChange={onChange}
                      />
                    </LocalizationProvider>
                  )}
                />
              </HourAndDateContainer>

              <Button type="submit">Enviar</Button>
            </form>
          </ContentRenderListCreateEvent>
        </MainRenderListCreateEvent>
      </Main>

      {modalOpen && (
        <SearchPeopleModal
          arrayPessoas={usuarios}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};
export default CreateEvents;
