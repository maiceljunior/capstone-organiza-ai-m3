import styled, { keyframes } from "styled-components";

export const Home = styled.div`
  header {
    margin-bottom: 16px;
    height: 77px;
  }

  header > div > img {
    width: 60%;
  }

  img {
    width: 20%;
  }

  #btnLogin {
    width: 20vw;
    height: 43px;
  }

  @media (min-width: 760px) {
    #btnLogin {
      position: relative;
      display: flex;
      width: auto;
      justify-content: center;
      align-items: center;
      background-color: var(--red);
      border-radius: 5px;
      font-family: "Nunito", sans-serif;
      box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      border: none;
    }

    #btnLogin:hover {
      border: none;
    }

    #btnLogin:after {
      content: " ";
      width: 0%;
      height: 100%;
      background: var(--yellow);
      position: absolute;
      transition: all 0.4s ease-in-out;
      right: 0;
    }

    #btnLogin:hover::after {
      right: auto;
      left: 0;
      width: 100%;
    }

    #btnLogin span {
      text-align: center;
      text-decoration: none;
      padding: 18px 25px;
      color: var(--white);
      font-size: 1.125em;
      font-weight: 700;
      letter-spacing: 0.1em;
      z-index: 20;
      transition: all 0.3s ease-in-out;
    }

    #btnLogin:hover span {
      color: var(--white);
      animation: scaleUp 0.3s ease-in-out;
    }

    @keyframes scaleUp {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(0.95);
      }

      100% {
        transform: scale(1);
      }
    }

    header {
      margin-bottom: 390px;
      height: 107px;
    }

    header > div > img {
      width: auto;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    width: 80%;
    cursor: pointer;
  }
  .register {
    display: none;
  }
  @media (min-width: 900px) {
    height: 100%;
    .logo {
      width: 600px;
    }
    .register {
      display: inline;
      width: 500px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -349px;
  h1 {
    margin-bottom: 8px;
    text-align: center;
    font-size: 20px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 900px) {
    h1 {
      font-size: 35px;
    }
  }
`;

const appearFromRight = keyframes`
from{
    opacity:0;
    transform: translateX(50px);
}
to{
    opacity:1;
    transform: translateX(0px)
    
}
`;

export const AnimationContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;
    form {
      width: 290px;
      background-color: var(--white-dark);
      border-radius: 5px;
      align-items: left;
      font-family: "Nunito";
      margin-top: 335px;

      > div {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: right;
        
      }
      label {
        margin: 10px;
        margin-bottom: 0;
        margin-left: 5%;
        font-family: "Nunito", sans-serif;
      }
      button {
        margin-left: 10%;
        margin-bottom: 5%;
        width: 35%;
    }
    .cancel{
        background: var(--grey)
    }
      }
      .error {
        color: var(--red);
        max-width: 80%;
        text-align: justify;
        margin-left: 125px;
      }
      h3{
          margin-left: 55px;
          padding-bottom: 110px;
      }
     
    


@media (min-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;
    form {
        width: 600px;
        background-color: var(--white-dark);
        border-radius: 5px;
        align-items: left;
        font-family: "Nunito";
        margin-top: -10px;
      > div {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: right;
      }
      label {
        margin: 10px;
        margin-bottom: 0;
        margin-left: 5%;
        font-family: "Nunito", sans-serif;
      }
      button {
        margin-left: 10%;
        margin-bottom: 5%;
        width: 35%;
    }
    .cancel{
        background: var(--grey)
    }
      }
      .error {
        color: var(--red);
        max-width: 80%;
        text-align: justify;
        margin-left: 125px;
      }
      h3{
          margin-left: 55px;
          padding-bottom: 110px;
      }
     
    
`;
export const CheckBoxContainer = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px;
  margin-left: 8%;
  > div {
    width: 100px;
    height: 30px;
  }
  @media (min-width: 900px) {
  }
`;

export const DivLogin = styled.div`
  margin: 20px auto;
  align-items: center;
  p {
    line-height: 25px;
  }
`;