import {
  MainRenderList,
  MainRenderListCreateEvent,
  MainRenderListFriends,
  ContentRenderList,
  ContentRenderListCreateEvent,
  DivSearch,
  Guests,
  SearchPeople,
  FiltButtons,
  ContentRenderFriends,
  DivInputNFriends,
  PositionContent,
  DivPref,
  DivNotEvents,
} from "./style";
import Button from "../Button";
import Input from "../Input";
import { ListPref } from "../../pages/Dashboard/loading";
import { useUser } from "../../providers/user";
import CardEvent from "../CardEvent";

const RenderList = ({
  type,
  array,
  getPreferences,
  removePrefs,
  AllEvents,
  input,
  setInput,
  register,
  Search,
  filteredRender,
}) => {
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    Search();
  };

  return (
    <>
      {type === "Dashboard" && (
        <PositionContent>
          <MainRenderList>
            <h2>Eventos</h2>
            <DivSearch onSubmit={handleSubmit}>
              <Input
                id="Search"
                register={register}
                value={input}
                name={"Search"}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Buscar evento"
              />
              <Button type="submit" redSchema>
                Buscar
              </Button>
            </DivSearch>
            {user.name && (
              <DivPref>
                <Button id="All" redSchema onClick={() => AllEvents()}>
                  Listar Todos
                </Button>
                {!removePrefs && <ListPref />}
                <Button id="Pref" redSchema onClick={() => getPreferences()}>
                  Categorias Favoritas
                </Button>
              </DivPref>
            )}

            <ContentRenderList>
              <ul>
                {filteredRender.length > 0 ? (
                  filteredRender.map((event, index) => {
                    return <CardEvent event={event} key={index} />;
                  })
                ) : array.length > 0 ? (
                  array.map((event, index) => {
                    return <CardEvent event={event} key={index} />;
                  })
                ) : (
                  <DivNotEvents>0 eventos encontrados.</DivNotEvents>
                )}
              </ul>
            </ContentRenderList>
          </MainRenderList>
        </PositionContent>
      )}
      {type === "Criar Eventos" && (
        <MainRenderListCreateEvent>
          <h2>Criar evento</h2>
          <ContentRenderListCreateEvent>
            <form>
              <Input
                label={"Nome do evento"}
                register={register}
                name="name"
                placeholder="Nome do evento"
              />
              <Input
                label={"Descrição do evento"}
                register={register}
                name="name"
                placeholder={"Descrição do evento"}
              />
              <SearchPeople>
                <h3>Buscar pessoas</h3>
                <Button>+</Button>
              </SearchPeople>
              <Guests>
                <h4>Pessoas adicionadas</h4>
                <ul>{/* convidados.map(convidado => <li>convidado</li>)*/}</ul>
              </Guests>
              <Button>Enviar</Button>
            </form>
          </ContentRenderListCreateEvent>
        </MainRenderListCreateEvent>
      )}
      {type === "Amigos" && (
        <>
          <MainRenderListFriends>
            <h2>Eventos</h2>
            <FiltButtons>
              <Button redSchema>Amigos</Button>
              <Button redSchema>Todos</Button>
            </FiltButtons>
            <ContentRenderFriends>
              <DivInputNFriends>
                <input type="text" placeholder="Pesquisar" />
                <ul>{/* amigos.map(amigo => <li>amigo</li>)*/}</ul>
              </DivInputNFriends>
            </ContentRenderFriends>
          </MainRenderListFriends>
        </>
      )}
    </>
  );
};

export default RenderList;
