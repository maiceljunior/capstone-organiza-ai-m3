import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Route from "./route";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
export default Routes;
