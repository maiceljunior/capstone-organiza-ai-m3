import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
  left:0;
  display:flex;
  justify-content:center;
  align-items :center;
`;

export const Container = styled.div`
  position: absolute;
  background-color: var(--grey-light);
  margin: 0 auto;
  max-width: 60%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 0;
  right: 0;
  top: 25%;
  @media (min-width: 768px) {
    max-width: 500px;
  }
  header {
    background: var(--orange);
    display: flex;
    height: 40px;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px 4px 0 0;
    h3 {
      font-size: 12px;
    }
  }
  div {
    padding-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainStyled = styled.main`
  background: var(--grey-light);
  padding: 10px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Cards = styled.div`
  width: 90%;
`;

export const PeopleCard = styled.section`
  display: flex;
  align-items: center;
  background: var(--white-dark);
  margin: 8px 0;
  border-radius: 5px;
  padding: 0 10px;
  height:43px;
  p {
    width: 100%;
  }
  button {
    max-width: 25%;
  }
`;

export const PessoasEncontradas = styled.h4`
  color: #fff;
  font-size: 1.1rem;
  font-weight: bolder;
`;

export const ButtonCloseModal = styled.button`
  background-color: var(--yellow);
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 5px;
  width: 25px;
  color: #fff;
  height: 25px;
`;
export const ButtonInvite = styled.button`
  border-style: none;
  background-color: var(--yellow);
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
  width: 30px;
  border-radius:5px;
`;
