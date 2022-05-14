import { ButtonComponent } from "../Button/style";
import {
  MainWrapper,
  ImgEventWrapper,
  InfoEventWrapper,
  ButtonEventWrapper,
} from "./style";
import EventoIcon from "../../assets/imgs/EventoIcon.png";
import FutebolIcon from "../../assets/imgs/Futebol.jpg"
import XadrezIcon from "../../assets/imgs/Xadrez.jpg"
import RpgIcon from "../../assets/imgs/Rpg.png"
import TabuleiroIcon from "../../assets/imgs/Tabuleiro.png"
import OnlineIcon from "../../assets/imgs/Online.png"

const CardEvent = ({ event }) => {
  const { name, description, type, userId } = event;
  const userLogged = localStorage.getItem("UserID");

  return (
    <MainWrapper id={userId}>
      <ImgEventWrapper>
        {
          type === "Futebol" ?
            <figure>
              <img src={FutebolIcon} alt="Img Evento" />
            </figure>
            :
            type === "Xadrez" ?
              <figure>
                <img src={XadrezIcon} alt="Img Evento" />
              </figure>
              :
              type === "RPG" ?
                <figure>
                  <img src={RpgIcon} alt="Img Evento" />
                </figure>
                :
                type === "Tabuleiro" ?
                  <figure>
                    <img src={TabuleiroIcon} alt="Img Evento" />
                  </figure>
                  :
                  type === "Online" ?
                    <figure>
                      <img src={OnlineIcon} alt="Img Evento" />
                    </figure>
                    :
                    type === "Outros" ?
                      <figure>
                        <img className="Outros" src={EventoIcon} alt="Img Evento" />
                      </figure>
                      :
                      <figure>
                        <img className="Outros" src={EventoIcon} alt="Img Evento" />
                      </figure>
        }
      </ImgEventWrapper>
      <InfoEventWrapper>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>{description}</p>
      </InfoEventWrapper>
      <ButtonEventWrapper>
        {parseInt(userLogged) === userId ?
          <ButtonComponent redSchema>Editar</ButtonComponent>
          :
          <ButtonComponent>Participar</ButtonComponent>
        }
      </ButtonEventWrapper>
    </MainWrapper>
  );
};
export default CardEvent;
