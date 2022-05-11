import { useHistory } from "react-router-dom";
import Button from "../Button";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <Container>
      {currentLocation === "/register" && (
        <Button
          onClick={() => history.push("/login")}
        >
          Login
        </Button>
      )}
    </Container>
  );
};

export default NavBar;