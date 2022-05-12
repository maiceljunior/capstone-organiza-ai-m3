import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("TokenOrganizaAi");
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
};
export default Route;
