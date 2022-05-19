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

const Dashboard = () => {
  const { user, setUser } = useUser();
  const UserID = localStorage.getItem("UserID");
  const [removeLoading, setRemoveLoading] = useState(false);
  const [removePrefs, setRemovePrefs] = useState(true);
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState("");
  const [filteredRender, setFilteredRender] = useState([]);
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
    setFilteredRender([]);
  }

  function FilterPref(Data) {
    Api.get(Data).then((res) => {
      setRemovePrefs(true);
      setEvents(res.data);
    });
    setFilteredRender([]);
  }

  function AllEvents() {
    setRemovePrefs(false);
    setTimeout(() => {
      Api.get("eventsPublics").then((res) => {
        setRemovePrefs(true);
        setEvents(res.data);
      });
    }, 2000);
    setFilteredRender([]);
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
          setFilteredRender={setFilteredRender}
          events={events}
          type="Dashboard"
          array={events}
          getPreferences={getPreferences}
          AllEvents={AllEvents}
          removePrefs={removePrefs}
          input={input}
          filteredRender={filteredRender}
          setInput={setInput}
          register={register}
          Search={Search}
        />
      </Main>
    </>
  );
};

export default Dashboard;
