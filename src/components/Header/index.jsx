import { StyledHeaderOrange, StyledHeaderWhite, DivHeader } from "./style";
import logoOrange from "../../assets/images/logoOrange.png";
import logoWhite from "../../assets/imgs/OrganizaAi.png";

const Header = ({ children, onClick }) => {
  return (
    <>
      {children ? (
        <StyledHeaderOrange onClick={onClick}>
          <DivHeader>
            <img src={logoWhite} alt="ORGANIZA AI" />
            {children}
          </DivHeader>
        </StyledHeaderOrange>
      ) : (
        <StyledHeaderWhite onClick={onClick}>
          <img src={logoOrange} alt="ORGANIZA AI" />
        </StyledHeaderWhite>
      )}
    </>
  );
};

export default Header;
