import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 420px;
  width: 90%;
  margin: 10px auto;
  h1 {
    display: none;
  }

  @media (min-width: 768px) {
    h1 {
      display: flex;
    }
    display: flex;
    max-width: 1024px;
    main {
      width: 50%;
    }
    figure {
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
  p {
    line-height: 25px;
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