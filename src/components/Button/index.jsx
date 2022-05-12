import { ButtonComponent } from "./style";

const Button = ({ children, redSchema, id, ...rest }) => {
  return (
    <ButtonComponent id={id} redSchema={redSchema} {...rest}>
      {children}
    </ButtonComponent>
  );
};
export default Button;
