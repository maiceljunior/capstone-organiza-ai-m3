import { ButtonComponent } from "../Button/style";
import {
  MainWrapper,
  ImgEventWrapper,
  InfoEventWrapper,
  ButtonEventWrapper,
} from "./style";
import EventoIcon from "../../assets/imgs/EventoIcon.png";
import FutebolIcon from "../../assets/imgs/Futebol.jpg";
import XadrezIcon from "../../assets/imgs/Xadrez.jpg";
import RpgIcon from "../../assets/imgs/Rpg.png";
import TabuleiroIcon from "../../assets/imgs/Tabuleiro.png";
import OnlineIcon from "../../assets/imgs/Online.png";
import { Api } from "../../services/api";
import { useUser } from "../../providers/user";

const CardEvent = ({ event }) => {
  const { user } = useUser();
  const { nameEvent, description, type, id, userId, guests, eventToken } =
    event;
  const userLogged = localStorage.getItem("UserID");

  function joinEvent(usuario) {
    if (guests.includes(usuario)) {
      alert("ja existe esse usuario");
    } else {
      const newGuest = [...guests, usuario];

      console.log(event);
      joinEventApi(newGuest);
    }
  }

  function joinEventApi(data) {
    Api.patch(
      `eventsPublics/${id}`,
      { guests: data },
      {
        headers: {
          Authorization: `Bearer ${eventToken}`,
        },
      }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <MainWrapper>
      <ImgEventWrapper>
        {type === "Futebol" ? (
          <figure>
            <img src={FutebolIcon} alt="Img Evento" />
          </figure>
        ) : type === "Xadrez" ? (
          <figure>
            <img src={XadrezIcon} alt="Img Evento" />
          </figure>
        ) : type === "RPG" ? (
          <figure>
            <img src={RpgIcon} alt="Img Evento" />
          </figure>
        ) : type === "Tabuleiro" ? (
          <figure>
            <img src={TabuleiroIcon} alt="Img Evento" />
          </figure>
        ) : type === "Online" ? (
          <figure>
            <img src={OnlineIcon} alt="Img Evento" />
          </figure>
        ) : type === "Outros" ? (
          <figure>
            <img className="Outros" src={EventoIcon} alt="Img Evento" />
          </figure>
        ) : (
          <figure>
            <img className="Outros" src={EventoIcon} alt="Img Evento" />
          </figure>
        )}
      </ImgEventWrapper>
      <InfoEventWrapper>
        <h2>{nameEvent}</h2>
        <h3>{type}</h3>
        <p>{description}</p>
      </InfoEventWrapper>
      <ButtonEventWrapper>
        {parseInt(userLogged) === userId ? (
          <ButtonComponent onClick={() => console.log("editar")} redSchema>
            Editar
          </ButtonComponent>
        ) : (
          <ButtonComponent onClick={() => joinEvent(user)}>
            Participar
          </ButtonComponent>
        )}
      </ButtonEventWrapper>
    </MainWrapper>
  );
};
export default CardEvent;
