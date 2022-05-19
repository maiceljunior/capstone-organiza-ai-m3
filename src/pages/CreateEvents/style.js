import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content:center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;

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
  margin-top: 20px;

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
  background-color: var(--grey-light);
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 0;
`;

export const FakeButton = styled.div`
  width: 40px;
  background-color: var(--yellow);
  cursor: pointer;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  font-size: 1.3rem;
`;

export const PessoasAdicionadas = styled.h4`
  border-radius: 10px;
  background-color: #f8f9fa;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  min-height: 53px;
  border: 2px solid var(--yellow);
  font-size: 1.1rem;
  font-weight: 500;
`;

export const GuestCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 1.1rem;
  border-radius: 10px;
`;

export const GuestButton = styled.button`
  border-style: none;
  color: var(--white);
  max-width: 20px;
  border-radius: 15%;
  background-color: var(--yellow);
`;

export const EventCategory = styled.select`
  width: 30%;
  min-width: 79px;
  border-style: none;
  background-color: var(--yellow);
  height: 25px;
  padding-left: 10px;
  border-radius: 20px;
  color: #fff;
  font-size: 1rem;
`;

export const CategoryContainer = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-top: 5px;
  height: 55px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`;

export const NoInvitesForNow = styled.h4`
  margin-top: 15px;
`;
export const HourAndDateContainer = styled.div`

  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-top: 5px;
  height: 55px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 500px) {
    flex-direction:column;
    width:205px;
    height: 100px;
    padding-bottom:10px;
  }
`;

export const GuestList = styled.ul`
  overflow-y: scroll;
  height: 200px;
`;

export const ContainerGuest = styled.div`
  width: 100%;
`;

