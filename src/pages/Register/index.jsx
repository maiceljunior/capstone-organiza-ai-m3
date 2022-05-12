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
    preferencias: yup.array().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = () => {
    console.log("oi");
    // api
    //   .post()
    //   .then((response) => {
    // toast.success("Conta criada com sucesso!");
    //     return history.push("/login");
    //   })
    //   .catch((err) => toast.error("Ops!Algo deu errado."));
  };

  return (
    <Container>
      <img className="register" src={imgRegister} alt="Cadastro" />
      <Content>
        <img className="logo" src={logo} alt="Logo da Organizaai" />
        <h1>Crie sua conta</h1>

        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              type="text"
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
            />
            <span>{errors.name?.message}</span>
            <Input
              register={register}
              type="email"
              name="email"
              label={"Email"}
              placeholder={"Digite aqui seu email"}
              error={errors.email?.message}
            />
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
              error={errors.password?.message}
            />
            <Input
              register={register}
              type="password"
              name="passwordConfirm"
              label="Confirmar senha"
              placeholder="Confirme a senha"
              error={errors.passwordConfirm?.message}
            />

            <Button type="submit">Cadastrar</Button>
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
