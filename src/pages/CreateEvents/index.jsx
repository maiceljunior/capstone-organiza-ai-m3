import { useEffect, useState } from "react";
import { useUser } from "../../providers/user";
import { Api } from "../../services/api";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Loading } from "./loading";
import AvatarComponent from "../../components/Avatar";
import {
  Main,
  MainRenderListCreateEvent,
  ContentRenderListCreateEvent,
  SearchPeople,
  Guests,
  FakeButton,
} from "./style";
import Navbar from "../../components/NavBar";
import { useForm } from "react-hook-form";
import SearchPeopleModal from "../../components/SearchPeopleModal";

const CreateEvents = () => {
  const { user, setUser } = useUser();
  const UserID = localStorage.getItem("UserID");
  const [removeLoading, setRemoveLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Api.get(`users/${UserID}`).then((res) => {
        setUser(res.data);
        setRemoveLoading(true);
      });
    }, 2000);
  }, []);

  const handleClick = () => {};
  function onSubmitFunction(data) {
    console.log(data);
  }
  function searchPeople() {
    setModalOpen(true);
  }

  const { register, handleSubmit } = useForm();

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
                register={register}
                name="description"
                placeholder={"Descrição do evento"}
              />
              <SearchPeople>
                <h3>Buscar pessoas</h3>
                <FakeButton onClick={searchPeople}>+</FakeButton>
              </SearchPeople>
              <Guests>
                <h4>Pessoas adicionadas</h4>
                <ul>{/* convidados.map(convidado => <li>convidado</li>)*/}</ul>
              </Guests>
              <Button type="submit">Enviar</Button>
            </form>
          </ContentRenderListCreateEvent>
        </MainRenderListCreateEvent>
      </Main>
      {modalOpen && <SearchPeopleModal setModalOpen={setModalOpen} />}
    </>
  );
};
export default CreateEvents;
