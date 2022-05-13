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
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "./Organizaaí (4).png";
import imgRegister from "./img-register.png";
import Checkbox from "../../components/Checkbox";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Api } from "../../services/api";

const Register = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
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
    <Container>
      <img className="register" src={imgRegister} alt="Cadastro" />
      <Content>
        <img
          className="logo"
          src={logo}
          alt="Logo da Organizaai"
          onClick={() => history.push("/")}
        />
        <h1>Crie sua conta</h1>

        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              type="text"
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}

            <Input
              register={register}
              type="email"
              name="email"
              label={"Email"}
              placeholder={"Digite aqui seu email"}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}

            <label>Preferências:</label>

            <CheckBoxContainer>
              <Checkbox name="preferencias" label="Futebol" value="Futebol" />
              <Checkbox
                name="preferencias"
                label="Tabuleiro"
                value="Tabuleiro"
              />
              <Checkbox name="preferencias" label="RPG" value="RPG" />
              <Checkbox name="preferencias" label="Online" value="Online" />
              <Checkbox name="preferencias" label="Xadrez" value="Xadrez" />
              <Checkbox name="preferencias" label="Outros" value="Outros" />
            </CheckBoxContainer>
            <Input
              register={register}
              name="password"
              type="password"
              label="Senha"
              placeholder="Crie uma senha forte"
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}

            <Input
              register={register}
              type="password"
              name="passwordConfirm"
              label="Confirmar senha"
              placeholder="Confirme a senha"
            />
            {errors.passwordConfirm && (
              <span className="error">{errors.passwordConfirm.message}</span>
            )}

            <Button type="submit" onClick={onSubmitFunction}>
              Cadastrar
            </Button>
            <DivLogin>
              <p>Já possui uma conta?</p>
              <p>
                Faça seu <Link to="/login">login</Link>{" "}
              </p>
            </DivLogin>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Register;
