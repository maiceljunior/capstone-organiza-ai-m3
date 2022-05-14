import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 10px auto;
  width: 95%;
  height: 100px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
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
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
  h2,
  p {
    text-align: center;
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
