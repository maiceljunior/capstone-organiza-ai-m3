import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("TokenOrganizaAi");
  const id = localStorage.getItem("UserID");

  function infosUser() {
    const infos = [!!token, !!id]; // FAZENDO BOLEANO DO TOKEN E ID PARA VERIFICAR SE EXISTEM.

    const result = infos.filter((tokenAndId) => tokenAndId === false); // FILTRANDO O ARRAY DE INFOS PARA VER SE ALGUM DOS DADOS ESTÁ FALSO. (SE ESTIVER FALTANDO)

    // SE ESTIVER FALTANDO UM DADO, O RESULT RETORNARA UM FALSE E TERA UM TAMANHO, SENÃO RETORNA UM ARRAY VAZIO E SIGNIFICA TRUE.
    if (result.length > 0) {
      localStorage.clear();
      return false;
    } else {
      return true;
    }
  }

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === infosUser() ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
};
export default Route;
