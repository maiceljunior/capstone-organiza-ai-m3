import { Link } from "react-router-dom";
import ImageLoginMobile from "../../assets/img/ImageLoginMobile.png";
import ImageLoginDesktop from "../../assets/img/ImageLoginDesktop.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MainWrapper, DivRegister, FigureLogin, DivImgs } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitFunction(data) {
    return console.log(data);
  }

  return (
    <>
      <MainWrapper>
        <section>
          <Header />
          <main>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Input
                label={"Email"}
                placeholder={"Digite seu email"}
                name="email"
                register={register}
              />
              <Input
                label={"Senha"}
                placeholder={"Digite sua senha"}
                name="password"
                register={register}
              />
              <Button type="submit">ENTRAR</Button>
            </form>
            <DivRegister>
              <p>Não possui uma conta?</p>
              <p>
                Faça seu <Link to="/register">cadastro</Link>
              </p>
            </DivRegister>
          </main>
        </section>
        <DivImgs>
          <FigureLogin>
            <img src={ImageLoginMobile} alt="ImageLoginMobile" />
            <img src={ImageLoginDesktop} alt="ImageLoginDesktop" />
          </FigureLogin>
        </DivImgs>
      </MainWrapper>
    </>
  );
};
export default Login;
