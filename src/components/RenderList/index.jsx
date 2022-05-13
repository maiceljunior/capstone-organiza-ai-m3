import { MainRenderList, MainRenderListCreateEvent, MainRenderListFriends, ContentRenderList, ContentRenderListCreateEvent, DivSearch, Guests, SearchPeople, FiltButtons, ContentRenderFriends, DivInputNFriends } from "./style";
import Button from "../Button"

const RenderList = ({type}) => {
    return(
        <>
            {type === 'Dashboard' &&
        <MainRenderList>
        <h2>Eventos</h2>
        <DivSearch>
            <input /> 
            <Button redSchema>
                Buscar
            </Button>
        </DivSearch>
        <ContentRenderList>
            <ul>
            {/* events.map(event => <li>event</li>)*/}
            </ul>
        </ContentRenderList>
        </MainRenderList>
        }
        {type === 'Criar Eventos' &&
        <MainRenderListCreateEvent>
        <h2>Criar evento</h2>
        <ContentRenderListCreateEvent>
          <form>
            <input type="text" placeholder='Nome do evento'/>
            <input type="text" placeholder='Descrição do evento'/>
            <SearchPeople>
                <h3>Buscar pessoas</h3>
                <button>+</button>
            </SearchPeople>
            <Guests>
                <h4>Pessoas adicionadas</h4>
                <ul>
                {/* convidados.map(convidado => <li>convidado</li>)*/}
                </ul>
            </Guests>
            <Button>Enviar</Button>
          </form>
        </ContentRenderListCreateEvent>
        </MainRenderListCreateEvent>
        }
        {type === 'Amigos' &&
        <>
        <MainRenderListFriends>
        <h2>Eventos</h2>
            <FiltButtons>
                <Button redSchema>Amigos</Button>
                <Button redSchema>Todos</Button>
            </FiltButtons>
            <ContentRenderFriends>
                <DivInputNFriends>
              <input type="text" placeholder='Pesquisar'/>
              <ul>
                {/* amigos.map(amigo => <li>amigo</li>)*/}
              </ul>
              </DivInputNFriends>
            </ContentRenderFriends>
        </MainRenderListFriends>
        </>
        }
        </>
    )
};

export default RenderList;