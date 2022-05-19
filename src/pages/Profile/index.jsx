import { toast } from "react-toastify";
import Checkbox from "../../components/Checkbox";

import {
  Container,
  Content,
  ContentRenderList,
  CheckBoxContainer,
  ContainerButton,
} from "./style";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AvatarComponent from "../../components/Avatar";
import Navbar from "../../components/NavBar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState, useRef } from "react";
import { Api } from "../../services/api";
import { Loading } from "./loading";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/user";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profile = () => {
  const { user, setUser } = useUser();
  const toastId = useRef(null);

  const UserID = localStorage.getItem("UserID");
  const Token = localStorage.getItem("TokenOrganizaAi");

  const [removeLoading, setRemoveLoading] = useState(false);

  const history = useHistory();
  const handleClick = () => {};

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^((\b[A-ZÀ-Ú][a-zà-ú]{1,15})\s*){2,15}$/,
        "Deve conter no mínimo seu nome e sobrenome, ambos sendo compostos apenas por letras e iniciando com letra maiúscula."
      ),
    email: yup.string().email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setTimeout(() => {
      Api.get(`users/${UserID}`).then((res) => {
        setUser(res.data);
        setRemoveLoading(true);
      });
    }, 2000);
  }, []);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  function editProfile(data) {
    const body = data;

    Api.patch(`users/${UserID}`, body, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((res) => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Perfil editado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao editar perfil, tente novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <>
      <Header>
        {!removeLoading && <Loading />}
        {user.name && (
          <AvatarComponent
            onClick={handleClick}
            userName={user.name}
            userAvatar
          />
        )}
      </Header>
      <Navbar />
      <Container>
        <Content>
          <h2>Editar Perfil</h2>

          <ContentRenderList>
            <form onSubmit={handleSubmit(editProfile)}>
              {errors.nameEvent && (
                <span className="error">{errors.name.message}</span>
              )}
              <Input
                label={"Nome"}
                register={register}
                name="name"
                value={user.name}
                onChange={onChange}
              />
              {errors.description && (
                <span className="error">{errors.email.message}</span>
              )}
              <Input
                label="Email"
                name="email"
                value={user.email}
                register={register}
                onChange={onChange}
              />
              <CheckBoxContainer>
                <Checkbox
                  register={register}
                  name="Futebol"
                  label="Futebol"
                  value={user.Preferencias.futebol}
                />
                <Checkbox
                  register={register}
                  name="Tabuleiro"
                  label="Tabuleiro"
                  value={user.Preferencias.Tabuleiro}
                />
                <Checkbox
                  register={register}
                  name="RPG"
                  label="RPG"
                  value={user.Preferencias.RPG}
                />
                <Checkbox
                  register={register}
                  name="Online"
                  label="Online"
                  value={user.Preferencias.Online}
                />
                <Checkbox
                  register={register}
                  name="Xadrez"
                  label="Xadrez"
                  value={user.Preferencias.Xadrez}
                />
                <Checkbox
                  register={register}
                  name="Outros"
                  label="Outros"
                  value={user.Preferencias.Outros}
                />
              </CheckBoxContainer>

              <ContainerButton>
                <Button type="submit">Enviar</Button>
                <Button
                  className="voltar"
                  redSchema
                  onClick={() => history.push("/dashboard")}
                >
                  {" "}
                  Voltar{" "}
                </Button>
              </ContainerButton>
            </form>
          </ContentRenderList>
        </Content>
      </Container>
    </>
  );
};
export default Profile;
