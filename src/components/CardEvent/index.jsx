import { ButtonComponent } from "../Button/style";
import {
  MainWrapper,
  ImgEventWrapper,
  InfoEventWrapper,
  NewInfoWrapper,
  GuestsInfoWrapper,
} from "./style";
import EventoIcon from "../../assets/imgs/EventoIcon.png";
import FutebolIcon from "../../assets/imgs/Futebol.jpg";
import XadrezIcon from "../../assets/imgs/Xadrez.jpg";
import RpgIcon from "../../assets/imgs/Rpg.png";
import TabuleiroIcon from "../../assets/imgs/Tabuleiro.png";
import OnlineIcon from "../../assets/imgs/Online.png";
import { useState } from "react";
import AboutEventModal from "../AboutEventModal";
import AdminEventModal from "../AdminEventModal";

const CardEvent = ({ event, setRefreshPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ownerOpen, setOwnerOpen] = useState(false);
  const userLogged = localStorage.getItem("UserID");

  function aboutEvent() {
    setModalOpen(true);
  }

  function ownerEvent() {
    setOwnerOpen(true);
  }

  const { dateEvent, nameEvent, type, userId } = event;


  function fullEvent() {
    if (event.guests.length === Number(event.guestsQtd)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <MainWrapper fullEvent={fullEvent()}>
      <ImgEventWrapper>
        {type === "Futebol" ? (
          <img src={FutebolIcon} alt="Img Evento" />
        ) : type === "Xadrez" ? (
          <img src={XadrezIcon} alt="Img Evento" />
        ) : type === "RPG" ? (
          <img src={RpgIcon} alt="Img Evento" />
        ) : type === "Tabuleiro" ? (
          <img src={TabuleiroIcon} alt="Img Evento" />
        ) : type === "Online" ? (
          <img src={OnlineIcon} alt="Img Evento" />
        ) : type === "Outros" ? (
          <img className="Outros" src={EventoIcon} alt="Img Evento" />
        ) : (
          <img className="Outros" src={EventoIcon} alt="Img Evento" />
        )}
      </ImgEventWrapper>

      <NewInfoWrapper>
        <InfoEventWrapper>
          <h2>{nameEvent}</h2>
          <h3>
            {dateEvent[2]}/{dateEvent[1]}/{dateEvent[3]}
          </h3>
          <h3>
            {dateEvent[0]} {dateEvent[4]}h
          </h3>

          <h3>Categoria: {type}</h3>
        </InfoEventWrapper>
      </NewInfoWrapper>
      <GuestsInfoWrapper>
        <h4>Participantes</h4>
        <span>{event.guests.length} / {event.guestsQtd}</span>

      </GuestsInfoWrapper>

      {parseInt(userLogged) === userId ? (
        <ButtonComponent onClick={ownerEvent} redSchema>
          Ver meu evento
        </ButtonComponent>
      ) : (
        <ButtonComponent onClick={aboutEvent}>Saiba mais</ButtonComponent>
      )}

      {modalOpen && (
        <AboutEventModal setRefreshPage={setRefreshPage} event={event} setModalOpen={setModalOpen} />
      )}

      {ownerOpen && (
        <AdminEventModal
          setRefreshPage={setRefreshPage}
          event={event}
          setOwnerOpen={setOwnerOpen}
          ownerOpen={ownerOpen}
        />
      )}
    </MainWrapper>
  );
};
export default CardEvent;
