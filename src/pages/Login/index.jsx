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
import { useHistory } from "react-router-dom";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { useUser } from "../../providers/user";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email Invalido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório")
  });

  const { setUser } = useUser()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmitFunction(data) {



    Api.post("/login", data)
      .then((res) => {
        localStorage.setItem("TokenOrganizaAi", res.data.accessToken)
        localStorage.setItem("UserID", res.data.user.id)

        setUser(res.data)
        history.push("/dashboard")

        toast.success(`Olá, ${res.data.user.name}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

      .catch(() => toast.error('Dados Incorretos!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }))
  }

  return (
    <>
      <MainWrapper>
        <section>
          <Header onClick={() => history.push("/")} />
          <main>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Input
                label={"Email"}
                placeholder={"Digite seu email"}
                name="email"
                register={register}
              />
              {errors.email && (<span className="error">{errors.email.message}</span>)}
              <Input
                label={"Senha"}
                placeholder={"Digite sua senha"}
                name="password"
                type="password"
                register={register}
              />
              {errors.password && (<span className="error">{errors.password.message}</span>)}
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
