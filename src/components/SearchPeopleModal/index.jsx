import Button from "../Button";
import {
  Container,
  MainStyled,
  ModalContainer,
  PeopleCard,
  Cards,
} from "./style";
import { FiX } from "react-icons/fi";
import { useGuest } from "../../providers/guests";
import { toast } from "react-toastify";

const SearchPeopleModal = ({ setModalOpen, arrayPessoas }) => {


  const { guest, setGuest } = useGuest()


  function addArray(pessoaApi) {
    const pessoaFiltrada = guest.find((pessoa) => pessoaApi.id === pessoa.id)

    if (pessoaFiltrada === undefined) {
      setGuest([...guest, pessoaApi])
    } else {
      toast.error('Convidado já incluso no evento!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


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
                  <button onClick={() => addArray(pessoa)}>V</button>
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
