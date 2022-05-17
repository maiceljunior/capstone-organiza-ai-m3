import { toast } from "react-toastify";

import {
  Main,
  MainRenderListCreateEvent,
  ContentRenderListCreateEvent,
  SearchPeople,
  Guests,
  FakeButton,
  PessoasAdicionadas,
  GuestCard,
  GuestButton,
  EventCategory,
  CategoryContainer,
  NoInvitesForNow,
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
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";
import { useGuest } from "../../providers/guests";
import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
  });

  const toastId = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
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

  const history = useHistory();

  const handleClick = () => {};

  const { guest, setGuest } = useGuest();

  function onSubmitFunction(data) {
    data.guests = guest;
    data.idEvento = parseInt(UserID);
    data.userId = parseInt(UserID);
    data.eventToken = Token;
    data.requests = [];
    data.denied = [];

    newEvent(data);
    reset();
    setGuest([]);
    history.push("/dashboard")
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

  function searchPeople() {
    setModalOpen(true);
  }

  const removeGuest = (guesst) => {
    const newGuestList = guest.filter((gst) => gst.id !== guesst.id);
    setGuest(newGuestList);
  };

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

              <SearchPeople>
                <h3>Buscar pessoas</h3>
                <FakeButton onClick={searchPeople}>+</FakeButton>
              </SearchPeople>
              <Guests>
                <PessoasAdicionadas>Lista de Convidados</PessoasAdicionadas>

                <ul>
                  {guest.length > 0 ? (
                    guest.map((convidados) => {
                      return (
                        <GuestCard key={convidados.id}>
                          {convidados.name}
                          <GuestButton onClick={() => removeGuest(convidados)}>
                            X
                          </GuestButton>
                        </GuestCard>
                      );
                    })
                  ) : (
                    <NoInvitesForNow>
                      A lista de convidados está vazia.
                    </NoInvitesForNow>
                  )}
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
