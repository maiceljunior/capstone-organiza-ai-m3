import styled from "styled-components";
import { appearFromRight } from "../Register/styles";

export const MainWrapper = styled.div`
  .error {
    color: var(--red);
    max-width: 80%;
    text-align: justify;
  }

  header > img {
    cursor: pointer;
  }

  max-width: 420px;
  width: 90%;
  margin: 0 auto;
  h1 {
    display: none;
  }

  @media (min-width: 768px) {
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
      width: 50%;
    }
    section {
      width: 50%;
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
  font-size: 15px;
  text-align: center;
  p {
    line-height: 25px;
  }
  .goregister {
    background-color: var(--yellow);
    border-radius: 5px;
    color: var(--white);
    box-shadow: 10px 5px 5px grey;

    :hover {
      cursor: pointer;
      box-shadow: 10px 5px 5px var(--red);
    }
    a {
      text-decoration: none;
      color: var(--red);
    }
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
