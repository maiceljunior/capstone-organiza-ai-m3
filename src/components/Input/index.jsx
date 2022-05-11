import { ContainerInput } from "./style";

const Input = ({ label, ...rest }) => {
  return (
    <ContainerInput>
      <p>{label}:</p>
      <input {...rest} />
    </ContainerInput>
  );
};
export default Input;
