import AvatarComponent from "../../components/Avatar";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import { useUser } from "../../providers/user";
import { Api } from "../../services/api";
import { Main } from "./style";
import { Loading } from "./loading";

const Dashboard = () => {
  const { user, setUser } = useUser();
  const UserID = localStorage.getItem("UserID");
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Api.get(`users/${UserID}`).then((res) => {
        setUser(res.data);
        setRemoveLoading(true);
      });
    }, 1000);
  }, []);

  const handleClick = () => {};

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

        {
          /*type === dashboard*/
          <>
            <h2>Eventos</h2>
            <div>
              <ul>{/* events.map(event => <li>event</li>)*/}</ul>
            </div>
          </>
        }
        {
          /*type === criar evento*/
          <>
            <h2>Criar evento</h2>
            <form>
              <input type="text" placeholder="Nome do evento" />
              <input type="text" placeholder="Descrição do evento" />
              <div>
                <h3>Buscar pessoas</h3>
                <button>+</button>
              </div>
              <ul>{/* convidados.map(convidado => <li>convidado</li>)*/}</ul>
              <button>Enviar</button>
            </form>
          </>
        }
        {
          /*type === amigos*/
          <>
            <h2>Eventos</h2>
            <div>
              <div>
                <button>Amigos</button>
                <button>Todos</button>
              </div>
              <div>
                <input type="text" placeholder="Pesquisar" />
                <ul>{/* amigos.map(amigo => <li>amigo</li>)*/}</ul>
              </div>
            </div>
          </>
        }
      </Main>
    </>
  );
};

export default Dashboard;
