import { Switch } from "react-router-dom";
import CreateEvents from "../pages/CreateEvents";
import Dashboard from "../pages/Dashboard";
import Developers from "../pages/Developers";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Route from "./route";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/developers" component={Developers} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/createEvents" component={CreateEvents} isPrivate />
      <Route path="/profile:id" component={Profile} isPrivate />
    </Switch>
  );
}
export default Routes;
