import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
export default Routes;
