import styled from "styled-components";

export const MainRenderList = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  min-height: 490px;
  align-items: flex-start;
  margin-top: 4vw;
`;

export const MainRenderListCreateEvent = styled(MainRenderList)`
  justify-content: flex-start;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin: 30px auto;
    max-width: 630px;
  }
  @media (min-width: 1024px) {
    margin: 30px auto;
    max-width: 800px;
  }
`;

export const MainRenderListFriends = styled(MainRenderList)`
  justify-content: flex-start;
  margin-top: 30px;
`;

export const ContentRenderList = styled.div`
  width: 100%;
  padding: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
  box-shadow: 0px 4px 4px rgba(0.25, 0.25, 0.25, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ul {
    overflow-y: auto;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;

  }

  ul::-webkit-scrollbar {
    width: 8px;
  }

  ul::-webkit-scrollbar-track {
    background: #c4c4c4;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: #6a040f;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  }

  #CardsTeste {
    border: 1px solid black;
    padding: 5px;
    width: 97%;
    margin-bottom: 15px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
    border-radius: 10px;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  }

  #CardsTeste:hover {
    background-color: white;
  }

  #CardsTeste > img {
    width: 190px;
    height: 100px;
    border-radius: 100px;
    border: 2px solid var(--grey);
  }
`;

export const ContentRenderListCreateEvent = styled(ContentRenderList)`
  flex-direction: column;
  align-items: center;

  form {
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    ul {
      justify-content: center;
      min-height: 10%;
    }
  }
  button {
    width: 90%;
    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-width: 1024px) {
      width: 33%;
    }
  }
`;

export const ContentRenderFriends = styled(ContentRenderList)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul {
    justify-content: center;
    min-height: 10%;
  }
`;

export const DivInputNFriends = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SearchPeople = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background-color: var(--grey-light);
  border-radius: 5px;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid var(--black);
    border-radius: 50%;
  }
`;

export const Guests = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey);
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 0;
  ul {
    height: 100%;
  }
`;

export const DivSearch = styled.form`
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
  margin-top: 10px;

  input {
    width: 85%;
    height: 20px;
    border-radius: 5px;
    padding: 20px;
    font-size: 21px;
    font-family: "Nunito", sans-serif;
    box-shadow: 0px 1px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
  }

  button {
    width: 15%;
    font-weight: bold;
  }

  button:hover {
    background-color: var(--yellow);
  }

  @media (min-width: 425px) {
    justify-content: flex-start;

    button {
      margin-left: 30px;
    }
  }
`;
export const FiltButtons = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    width: 25%;
    height: 75%;
  }
`;

export const PositionContent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivPref = styled.div`
  display: flex;
  width: 100%;
  margin-right: 30px;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 18px;
    width: 30%;
    color: grey;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  button:focus,
  button:hover {
    color: black;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #000;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

export const DivNotEvents = styled.div`
  display: flex;
  color: black;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 20px;
  height: 100%;
  align-items: center;
`;
