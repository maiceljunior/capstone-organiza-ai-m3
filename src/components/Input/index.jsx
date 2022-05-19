import { ContainerInput } from "./style";

const Input = ({inputType, label, register, errors, name, ...rest }) => {
  return (
    <ContainerInput>
      <p>{label}:</p>
      <input {...register(name)} {...rest} type={inputType} />
    </ContainerInput>
  );
};
export default Input;
