import styled from "styled-components";

export const Main = styled.main`
  display: flex;

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

  p {
    display: none;
  }
`;

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

export const ContentRenderList = styled.div`
  width: 100%;
  padding: 5px;
  background: var(--white-dark);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    background-color: #f8f9fa;
    border-radius: 10px;
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

export const FakeButton = styled.div`
  width: 50px;
  background-color: var(--yellow);
  cursor: pointer;
  text-align: center;
`;
