import { AiOutlineHome } from "react-icons/ai";
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ContainerGeral, FakeButtonLink } from "./style";

const Navbar = () => {
  return (
    
    <ContainerGeral>
      <FakeButtonLink>
        
        <Link className="link" to="/dashboard">
          <AiOutlineHome />
          <h4 className="newH4">Dashboard</h4>
        </Link>
      </FakeButtonLink>
      <FakeButtonLink>
        <Link className="link" to="/createEvents">
          <BsFillCalendar2PlusFill />
          <h4 className="newH4">Criar Evento</h4>
        </Link>
      </FakeButtonLink>
    </ContainerGeral>
  );
};

export default Navbar;
