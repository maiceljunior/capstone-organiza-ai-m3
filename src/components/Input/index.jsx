import { ContainerInput } from "./style";

const Input = ({ label, register, errors, name, ...rest }) => {
  return (
    <ContainerInput>
      <p>{label}:</p>
      <input {...register(name)} {...rest} />
    </ContainerInput>
  );
};
export default Input;
