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
import Checkbox from "../../components/Checkbox";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo Obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitRegister({ name, email, password }) {
    const user = { name, email, password };
    console.log(user);
  }

  return (
    <Container>
      <img src={logo} alt="Logo da Organizaai" />
      <Content>
        <h1>Crie sua conta</h1>

        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitRegister)}>
            <Input
              //   register={register}
              type="text"
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
              error={errors.name?.message}
            />
            <Input
              //   register={register}
              type="email"
              name="email"
              label="Email"
              placeholder="DIgite aqui seu email"
              error={errors.email?.message}
            />
            <label>Preferências:</label>

            <CheckBoxContainer>
              <Checkbox label="Futebol" value="Futebol" />
              <Checkbox label="Volei" value="Futebol" />
              <Checkbox label="Basquete" value="Futebol" />
              <Checkbox label="Tabuleiro" value="Futebol" />
              <Checkbox label="RPG" value="Futebol" />
              <Checkbox label="Online" value="Futebol" />
              <Checkbox label="Xadrez" value="Futebol" />
              <Checkbox label="Outros" value="Futebol" />
            </CheckBoxContainer>
            <Input
              //   register={register}
              name="password"
              type="password"
              label="Senha"
              placeholder="Crie uma senha forte"
              error={errors.password?.message}
            />
            <Input
              //   register={register}
              type="password"
              name="passwordConfirm"
              label="Confirmar senha"
              placeholder="Confirme a senha"
              error={errors.passwordConfirm?.message}
            />

            <Button type="submit">Cadastrar</Button>
            <DivLogin>
              <p>Não possui uma conta?</p>
              <p>Faça seu</p>
            </DivLogin>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Register;
