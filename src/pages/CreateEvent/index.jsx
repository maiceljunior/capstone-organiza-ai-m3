import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  AnimationContainer,
  CheckBoxContainer,
  Container,
  Content,
  DivLogin,
  Home
} from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Api } from "../../services/api";
import Header from "../../components/Header";

const CreateEventPage = () => {
    const history = useHistory();
    const schema = yup.object().shape({
      name: yup.string().required("Campo Obrigatório!"),
      description: yup.string().required("Campo Obrigatório!"),
      price: yup.string().required("Campo Obrigatório!"),
      password: yup
        .string()
        .min(6, "Mínimo de 6 digitos")
        .required("Campo Obrigatório!"),
      passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")], "Senhas diferentes.")
        .required("Campo Obrigatório!"),
      preferencias: yup.array().required("Campo Obrigatório"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
  
    function onSubmitFunction(data) {
      Api.post("/register", data)
        .then((res) => {
          localStorage.getItem("Token", data);
          history.push("/dashboard");
  
          toast.success(`Cadastro concluído com sucesso.`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch(() =>
          toast.error("Dados Incorretos!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        );
    }
    
    
  return (
        
      <Home>
      <Header>
        <Button id="btnLogin" onClick={() => history.push("")}>
        </Button>
      </Header>
      <Container>
    
        
        
      <Content>
       
        <h1>Criar Eventos</h1>
        

        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              type="text"
              name="name"
              label="Nome do Evento"
              placeholder="Digite aqui o nome do evento"
              />
            {errors.name && (
                <span className="error">{errors.name.message}</span>
                )}

            <Input
              register={register}
              type="text"
              name="description"
              label={"Descrição do Evento"}
              placeholder={"Digite aqui sua descrição"}
              />
            {errors.description && (
                <span className="error">{errors.description.message}</span>
                )}

            <label>Forma de pagamento:</label>

         
                <select>
                    <option value="valor1">Boleto Bancário</option>
                    <option value="valor2">Débito</option>
                    <option value="valor2">Crédito</option>
                    <option value="valor3">Pix</option>

                </select>
                
                <Input
              register={register}
              name="price"
              type="number"
              label="Valor"
              placeholder="Escolha um valor R$"
              />
            {errors.price && (
                <span className="error">{errors.price.message}</span>
                )}
            
            <Input
              register={register}
              name="addpeople"
              type="name"
              label="Adicionar Pessoas"
              placeholder="(FUNÇÃO N PRONTA)"
              />
            {errors.password && (
                <span className="error">{errors.password.message}</span>
                )}

            <h3>Pessoas Adicionadas:</h3>

            <Button className='cancel' type="submit" onClick={''}>
              Cancelar
            </Button>
            <Button type="submit" onClick={onSubmitFunction}>
              Criar
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
      </Home>            
    );
;

   
   
            }

export default CreateEventPage;





