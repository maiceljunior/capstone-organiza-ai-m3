import Button from "../Button";
import {
  Container,
  MainStyled,
  ModalContainer,
  PeopleCard,
  Cards,
  PessoasEncontradas,
  ButtonCloseModal,
  ButtonInvite,
} from "./style";
import { FiX } from "react-icons/fi";
import { useGuest } from "../../providers/guests";
import { toast } from "react-toastify";
import {useRef} from "react"

const SearchPeopleModal = ({ setModalOpen, arrayPessoas }) => {

  const toastId = useRef(null);

  const { guest, setGuest } = useGuest()


  function addArray(pessoaApi) {
    const pessoaFiltrada = guest.find((pessoa) => pessoaApi.id === pessoa.id)

    if (pessoaFiltrada === undefined) {
      setGuest([...guest, pessoaApi])
    } else {
      if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error('Convidado já incluso no evento!', {
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
  }


  return (
    <ModalContainer>
      <Container>
        <header>
          
          <PessoasEncontradas>Pessoas Encontradas</PessoasEncontradas>
          <ButtonCloseModal onClick={() => setModalOpen(false)}>
            <FiX size={16} />
          </ButtonCloseModal>
        </header>
        <MainStyled>
          
          <Cards>
            
            {!!arrayPessoas &&
              arrayPessoas.map((pessoa) => (
                <PeopleCard key={pessoa.id}>
                  <p>{pessoa.name}</p>
                  
                  <ButtonInvite onClick={() => addArray(pessoa)}>+</ButtonInvite>
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
