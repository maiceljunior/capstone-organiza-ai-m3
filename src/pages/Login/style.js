import styled from "styled-components";
import { appearFromRight } from "../Register/styles";

export const MainWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;

  .error {
    color: var(--red);
    max-width: 80%;
    text-align: justify;
  }

  header > img {
    cursor: pointer;
    width: 95%;
    height: 90px;
  }

  max-width: 420px;
  width: 90%;
  margin: 0 auto;
  h1 {
    display: none;
  }

  @media (min-width: 768px) {
    width: 100%;

    h1 {
      display: flex;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 1024px;
    animation: ${appearFromRight} 1s;

    main {
      width: 100%;
      height: 77%;
      justify-content: space-evenly;
    }
    figure {
      width: 40%;
    }
    section {
      width: 40%;
    }
  }
  main {
    background-color: var(--white-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 90%;
      margin-top: 30px;
    }
  }
`;

export const DivRegister = styled.div`
  margin: 20px auto;
  p {
    line-height: 25px;
  }
  a {
    color: var(--orange);
    font-weight: bold;
  }
`;

export const DivImgs = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    figure {
      width: 100%;
    }
  }
`;

export const FigureLogin = styled.figure`
  img {
    width: 100%;
  }
  img + img {
    display: none;
  }
  @media (min-width: 768px) {
    img {
      display: none;
    }
    margin-left: 25px;
    img + img {
      display: flex;
    }
  }
`;
