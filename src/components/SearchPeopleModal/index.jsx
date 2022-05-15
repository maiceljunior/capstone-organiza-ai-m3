import Button from "../Button";
import {
  Container,
  MainStyled,
  ModalContainer,
  PeopleCard,
  Cards,
} from "./style";
import { FiX } from "react-icons/fi";

const SearchPeopleModal = ({ setModalOpen, arrayPessoas }) => {
  return (
    <ModalContainer>
      <Container>
        <header>
          <h3>Pessoas Encontradas</h3>
          <button onClick={() => setModalOpen(false)}>
            <FiX size={16} />
          </button>
        </header>
        <MainStyled>
          <Cards>
            {!!arrayPessoas &&
              arrayPessoas.map((pessoa) => (
                <PeopleCard key={pessoa.name}>
                  <p>{pessoa.name}</p>
                  <button>V</button>
                </PeopleCard>
              ))}
          </Cards>

          <Button onClick={() => setModalOpen(false)}>Adicionar</Button>
        </MainStyled>
      </Container>
    </ModalContainer>
  );
};
export default SearchPeopleModal;
