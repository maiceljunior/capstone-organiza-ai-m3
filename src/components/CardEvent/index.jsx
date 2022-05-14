import { ButtonComponent } from "../Button/style";
import {
  MainWrapper,
  ImgEventWrapper,
  InfoEventWrapper,
  ButtonEventWrapper,
} from "./style";

const CardEvent = ({ event }) => {
  const { name, description } = event;

  return (
    <MainWrapper>
      <ImgEventWrapper>
        <figure>
          <img src="Img Evento" alt="Img Evento" />
        </figure>
      </ImgEventWrapper>
      <InfoEventWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
      </InfoEventWrapper>
      <ButtonEventWrapper>
        <ButtonComponent>Participar</ButtonComponent>
      </ButtonEventWrapper>
    </MainWrapper>
  );
};
export default CardEvent;
