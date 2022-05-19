import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;

  .nav-menu {
    height: 50vh;
    margin-left: 2vw;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: var(--orange);
    z-index: 3000;
  }

  .navbar-toggle {
    background-color: var(--orange);
  }

  .navbar {
    /* margin-right: 400px; */
    background-color: var(--black);
    margin-top: 30vh;
  }

  .nav-text > a:hover {
    background-color: #6a040f;
  }

  .nav-text > a > span {
    color: var(--white);
    font-weight: bold;
  }

  #Search {
    width: 100%;
    height: 45px;
    align-items: center;
    align-self: center;
    margin: 0;
  }

  .error {
    color: var(--red);
    max-width: 80%;
    text-align: justify;
  }

  p {
    display: none;
  }
`;

export const MainRender = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  min-height: 490px;
  align-items: flex-start;
  margin-top: 4vw;
`;
export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .voltar {
    width: 10%;
    margin-left: 30px;
  }
`;

export const Content = styled(MainRender)`
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

export const ContentRender = styled.div`
  width: 100%;
  padding: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ul {
    overflow-y: scroll;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

export const ContentRenderList = styled(ContentRender)`
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
