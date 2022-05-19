import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;

  .logo {
    width: 80%;
    cursor: pointer;
  }
  .register {
    display: none;
  }

  @media (min-width: 900px) {
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
  max-width: 700px;

  h1 {
    margin-bottom: 8px;
    text-align: center;
    font-size: 20px;
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

export const appearFromRight = keyframes`
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
    }
    button {
      margin-left: 10%;
      margin-bottom: 5%;
      margin-top: 5%;
      width: 80%;
    }
    .error {
      color: var(--red);
      max-width: 90%;
      margin-bottom: 10px;
      text-align: justify;
      display: block;
    }
    @media (min-width: 900px) {
      form {
        width: 380px;
      }
      width: 400px;
    }
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

  a {
    color: var(--orange);
    font-weight: bold;
  }
`;
