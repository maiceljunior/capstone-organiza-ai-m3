import { StyledHeaderOrange, StyledHeaderWhite } from "./style";
import logoOrange from "../../assets/images/logoOrange.png";
import logoWhite from "../../assets/images/logoWhite.png";

const Header = ({ children, onClick }) => {
  return (
    <>
      {children ? (
        <StyledHeaderOrange onClick={onClick}>
          <div>
            <img src={logoWhite} alt="ORGANIZA AI" />
            {children}
          </div>
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
