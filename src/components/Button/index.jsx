import { ButtonComponent } from "./style";

const Button = ({ children, redSchema, id, ...rest }) => {
  return (
    <ButtonComponent id={id} {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
