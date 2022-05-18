import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 10px auto;
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
`;

export const ImgEventWrapper = styled.div`
  min-width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  figure {
    width: 90%;
    height: 90%;
  }

  img {
    object-fit: cover;
    width: 220px;
    height: 90px;
    border-radius: 60px;
  }

  .Outros {
    background-color: var(--black);
  }
`;

export const InfoEventWrapper = styled.div`
  min-width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 16px;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
  }
  h2,
  p {
    text-align: center;
  }
  h3 {
    font-weight: bold;
    color: var(--grey);
  }
  h4 {
    color: var(--red);
    background-color: aliceblue;
  }
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const ButtonEventWrapper = styled.div`
  min-width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  button {
    max-width: 90%;
    max-width: 185px;
    margin: 0 auto;
  }
`;

export const NewInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
