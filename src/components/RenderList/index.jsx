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
}) => {
  const { user } = useUser();

  return (
    <>
      {type === "Dashboard" && (
        <PositionContent>
          <MainRenderList>
            <h2>Eventos</h2>
            <DivSearch>
              <Input
                id="Search"
                register={register}
                value={input}
                name={"Search"}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Pesquise um evento"
              />
              <Button redSchema onClick={() => Search()}>
                Buscar
              </Button>
            </DivSearch>

            {user.name && (
              <DivPref>
                <Button id="All" redSchema onClick={() => AllEvents()}>
                  Todos
                </Button>
                {!removePrefs && <ListPref />}
                <Button id="Pref" redSchema onClick={() => getPreferences()}>
                  Preferências
                </Button>
              </DivPref>
            )}

            <ContentRenderList>
              <ul>
                {array.length > 0 ? (
                  array.map((event, index) => {

                    return (
                      <CardEvent event={event} key={index} />
                    );
                  })
                ) : (
                  <DivNotEvents>
                    Não existem eventos com este nome ou tipo!
                  </DivNotEvents>
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
