import { ButtonComponent } from "../Button/style";
import {
  MainWrapper,
  ImgEventWrapper,
  InfoEventWrapper,
  ButtonEventWrapper,
  NewInfoWrapper
} from "./style";
import EventoIcon from "../../assets/imgs/EventoIcon.png";
import FutebolIcon from "../../assets/imgs/Futebol.jpg";
import XadrezIcon from "../../assets/imgs/Xadrez.jpg";
import RpgIcon from "../../assets/imgs/Rpg.png";
import TabuleiroIcon from "../../assets/imgs/Tabuleiro.png";
import OnlineIcon from "../../assets/imgs/Online.png";
import { useState } from "react";
import AboutEventModal from "../AboutEventModal";

const CardEvent = ({ event }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const userLogged = localStorage.getItem("UserID");

  function aboutEvent() {
    setModalOpen(true)
  }

  function ownerEvent() {

  }

  const { nameEvent, description, type, userId } = event;



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

      <NewInfoWrapper>
        <InfoEventWrapper>
          <h2>{nameEvent}</h2>
          <h3>{type}</h3>
          <h4>{description}</h4>
        </InfoEventWrapper>
      </NewInfoWrapper>

      <ButtonEventWrapper>
        {parseInt(userLogged) === userId ? (
          <ButtonComponent onClick={() => console.log("editar")} redSchema>
            Edite seu evento
          </ButtonComponent>
        ) : (
          <ButtonComponent onClick={aboutEvent}>
            Saiba mais
          </ButtonComponent>
        )}
      </ButtonEventWrapper>

      {modalOpen && (
        <AboutEventModal event={event} setModalOpen={setModalOpen} />
      )}


    </MainWrapper>
  );
};
export default CardEvent;
