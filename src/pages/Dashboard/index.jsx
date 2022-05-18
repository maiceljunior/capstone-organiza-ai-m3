import { Main } from "./style";
import AvatarComponent from "../../components/Avatar";
import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import RenderList from "../../components/RenderList";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";
import { Api } from "../../services/api";
import { Loading } from "./loading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
  const { user, setUser } = useUser();
  const UserID = localStorage.getItem("UserID");
  const [removeLoading, setRemoveLoading] = useState(false);
  const [removePrefs, setRemovePrefs] = useState(true);
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState("");
  const { register } = useForm();

  function Search() {
    requisitionSearch(input);
    setInput("");
  }

  function requisitionSearch(Data) {
    setRemovePrefs(false);
    setTimeout(() => {
      Api.get(`/eventsPublics?q=${Data}`).then((res) => {
        setRemovePrefs(true);
        setEvents(res.data);
      });
    }, 2000);
  }

  const history = useHistory()

  useEffect(() => {
    Api.get(`/eventsPublics`).then((res) => {
      setEvents(res.data);
     
    });
  }, []);


  useEffect(() => {
    setTimeout(() => {
      Api.get(`users/${UserID}`).then((res) => {
        setUser(res.data);
        setRemoveLoading(true);
      });
    }, 2000);
  }, []);

  function getPreferences() {
    setRemovePrefs(false);
    setTimeout(() => {
      const futebol = !!user.Preferencias.futebol && "Futebol";
      const RPG = !!user.Preferencias.RPG && "RPG";
      const Tabuleiro = !!user.Preferencias.Tabuleiro && "Tabuleiro";
      const Xadrez = !!user.Preferencias.Xadrez && "Xadrez";
      const Online = !!user.Preferencias.Online && "Online";
      const Outros = !!user.Preferencias.Outros && "Outros";
      const Data = `/eventsPublics?type=${futebol}&type=${RPG}&type=${Xadrez}&type=${Online}&type=${Tabuleiro}&type=${Outros}`;

      FilterPref(Data);
    }, 2000);
  }

  function FilterPref(Data) {
    Api.get(Data).then((res) => {
      setRemovePrefs(true);
      setEvents(res.data);
    });
  }

  function AllEvents() {
    setRemovePrefs(false);
    setTimeout(() => {
      Api.get("eventsPublics").then((res) => {
        setRemovePrefs(true);
        setEvents(res.data);
      });
    }, 2000);
  }

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
        <RenderList
          type="Dashboard"
          array={events}
          getPreferences={getPreferences}
          AllEvents={AllEvents}
          removePrefs={removePrefs}
          input={input}
          setInput={setInput}
          register={register}
          Search={Search}
        />
      </Main>
    </>
  );
};

export default Dashboard;
