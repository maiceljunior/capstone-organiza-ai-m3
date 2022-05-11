import ButtonComponent from "./style";

const Button = ({ children, className, onClick, id }) => {
  return (
    <ButtonComponent id={id} className={className} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
