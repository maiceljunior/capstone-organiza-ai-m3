import { ButtonComponent } from "./style";

const Button = ({ children, className, onClick, id, ...rest }) => {
  return (
    <ButtonComponent id={id} className={className} onClick={onClick} {...rest}>
      {children}
    </ButtonComponent>
  );
};
export default Button;
