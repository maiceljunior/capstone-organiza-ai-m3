import styled from "styled-components";

export const Home = styled.div`
  header {
    margin-bottom: 16px;
    height: 77px;
  }

  header > div > img {
    width: 50vw;
  }

  img {
    width: 20%;
  }

  #btnLogin {
    width: 20vw;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #btnLogin > span {
    margin-left: 0;
  }

  @media (min-width: 760px) {
    #btnLogin {
      position: relative;
      display: flex;
      width: auto;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
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
      margin-bottom: 16px;
      height: 107px;
    }

    header > div > img {
      width: 30%;
    }
  }
`;

export const SectionOne = styled.section`
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white-dark);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div > h2 {
    width: 300px;
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  div > button {
    background-color: var(--red);
    width: 50vw;
    height: 35px;
    align-items: center;
    margin-bottom: 10px;
  }

  img {
    position: absolute;
    margin-top: 160px;
    width: 40%;
    margin-left: 27vw;
  }

  @media (min-width: 760px) {
    border-radius: 4px;
    background-color: var(--white-dark);
    height: 300px;
    width: 92vw;
    padding: 10px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div > h2 {
      text-align: center;
      width: 422px;
      align-items: center;
      font-style: normal;
      font-weight: 500, Medium;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
    }

    img {
      height: 88%;
      position: relative;
      margin-top: 0;
      width: auto;
      margin-left: 0;
    }

    div > button {
      width: 300px;
      height: 30px;
    }

    button {
      display: flex;
      animation: shake3856 1.2s linear infinite both;
      align-items: center;
      justify-content: center;
      height: 50px;
      position: relative;
      padding: 0 20px;
      font-size: 18px;
      text-transform: uppercase;
      border: 0;
      box-shadow: var(--red) 0px 7px 0px 0px;
      background-color: var(--red);
      border-radius: 12px;
      overflow: hidden;
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
      line-height: 37px;
      transition: 31ms cubic-bezier(0.5, 0.7, 0.4, 1);
    }

    button:before {
      content: attr(alt);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      inset: 0;
      font-size: 15px;
      font-weight: bold;
      color: white;
      letter-spacing: 4px;
      opacity: 1;
    }

    button:active {
      box-shadow: none;
      transform: translateY(7px);
      transition: 35ms cubic-bezier(0.5, 0.7, 0.4, 1);
    }

    button:hover:before {
      transition: all 0s;
      transform: translateY(100%);
      opacity: 0;
    }

    button:hover {
      border: none;
    }

    button i {
      color: white;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 4px;
      font-style: normal;
      transition: all 2s ease;
      transform: translateY(-20px);
      opacity: 0;
    }

    button:hover i {
      transition: all 0.2s ease;
      transform: translateY(0px);
      opacity: 1;
    }

    button:hover i:nth-child(1) {
      transition-delay: 0.045s;
    }

    button:hover i:nth-child(2) {
      transition-delay: calc(0.045s * 3);
    }

    button:hover i:nth-child(3) {
      transition-delay: calc(0.045s * 4);
    }

    button:hover i:nth-child(4) {
      transition-delay: calc(0.045s * 5);
    }

    button:hover i:nth-child(6) {
      transition-delay: calc(0.045s * 6);
    }

    button:hover i:nth-child(7) {
      transition-delay: calc(0.045s * 7);
    }

    button:hover i:nth-child(8) {
      transition-delay: calc(0.045s * 8);
    }

    button:hover i:nth-child(9) {
      transition-delay: calc(0.045s * 9);
    }

    button:hover i:nth-child(10) {
      transition-delay: calc(0.045s * 10);
    }

    @keyframes shake3856 {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }

      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }

      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }

      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }

      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }

      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
  }
`;

export const SectionTwo = styled.section`
  margin-top: 47vw;
  background-color: var(--white-dark);
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    width: 300px;
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  img {
    position: absolute;
    margin-top: 32.5vw;
    width: 40%;
  }

  @media (min-width: 760px) {
    border-radius: 4px;
    background-color: var(--white-dark);
    height: 300px;
    width: 92vw;
    padding: 10px;
    margin: auto;
    margin-top: 27px;
    margin-bottom: 17px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      text-align: center;
      width: 422px;
      align-items: center;
      font-style: normal;
      font-weight: 500, Medium;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
    }

    img {
      height: 88%;
      position: relative;
      margin-top: 0;
      width: auto;
    }
  }
`;

export const SectionThree = styled.section`
  margin-top: 47vw;
  margin-bottom: 25vw;
  height: 130px;
  background-color: var(--white-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 300px;
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  img {
    position: absolute;
    margin-top: 25vw;
    margin-left: 20vw;
    height: 130px;
    width: 150px;
  }

  @media (min-width: 760px) {
    border-radius: 4px;
    background-color: var(--white-dark);
    height: 239px;
    width: 92vw;
    padding: 10px;
    margin: auto;
    margin-top: 27px;
    margin-bottom: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      text-align: center;
      width: 422px;
      align-items: center;
      font-style: normal;
      font-weight: 500, Medium;
      font-size: 20px;
      line-height: 37px;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
    }

    img {
      height: 88%;
      position: relative;
      margin-top: 0;
      width: auto;
    }
  }
`;

export const Footer = styled.footer`
  background-color: var(--orange);
  height: 87px;
  display: flex;
  justify-content: center;
  align-items: center;

  .team {
    text-decoration: none;
    font-weight: bold;
  }
`;
