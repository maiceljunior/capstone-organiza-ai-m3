import { toast } from "react-toastify";
import {
  Main,
  MainRenderListCreateEvent,
  ContentRenderListCreateEvent,
  SearchPeople,
  Guests,
  FakeButton,
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
import { useGuest } from "../../providers/guests";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const CreateEvents = () => {
  const { user, setUser } = useUser();
  const UserID = localStorage.getItem("UserID");
  const Token = localStorage.getItem("TokenOrganizaAi");
  const [removeLoading, setRemoveLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const schema = yup.object().shape({
    nameEvent: yup.string().required("Campo Obrigatório!"),
    description: yup.string().required("Campo Obrigatório!"),
    type: yup.string(),
    dateEvent: yup.string(),
  });

  const {
    register,
    handleSubmit,
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

  const handleClick = () => {};

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

    data.guests = guest;
    data.idEvento = parseInt(UserID);
    data.userId = parseInt(UserID);
    data.eventToken = Token;
    data.requests = [];
    data.denied = [];
    data.dateEvent = dateEventArray;
    newEvent(data);
  }

  function newEvent(data) {
    Api.post("eventsPublics", data, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((res) => {
        toast.success("Evento criado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
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

  function searchPeople() {
    setModalOpen(true);
  }

  const { guest } = useGuest();

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

      <Main>
        <Navbar />
        <MainRenderListCreateEvent>
          <h2>Criar evento</h2>
          <ContentRenderListCreateEvent>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Input
                label={"Nome do evento"}
                register={register}
                name="nameEvent"
                placeholder="Nome do evento"
              />
              <Input
                label={"Descrição do evento"}
                name="description"
                placeholder={"Descrição do evento"}
                register={register}
              />

              <Controller
                control={control}
                name="dateEvent"
                render={({ field: { onChange, value } }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Horario"
                      value={value}
                      onChange={onChange}
                    />
                  </LocalizationProvider>
                )}
              />

              <div>
                <select name="type" {...register("type")}>
                  <option value="Futebol">Futebol</option>
                  <option value="Tabuleiro">Tabuleiro</option>
                  <option value="Xadrez">Xadrez</option>
                  <option value="RPG">RPG</option>
                  <option value="Online">Online</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <SearchPeople>
                <h3>Buscar pessoas</h3>
                <FakeButton onClick={searchPeople}>+</FakeButton>
              </SearchPeople>
              <Guests>
                <h4>Pessoas adicionadas</h4>
                <ul>
                  {guest.length > 0 &&
                    guest.map((convidados) => {
                      return <li key={convidados.id}>{convidados.name}</li>;
                    })}
                </ul>
              </Guests>
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
