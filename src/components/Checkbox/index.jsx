import { InputCheckbox, DivCheckbox } from "./style";

const Checkbox = ({ label, valueCheckbox, register, name }) => {
  return (
    <DivCheckbox>
      <InputCheckbox type="checkbox" value={valueCheckbox} {...register(name)} />
      <span>{label}</span>
    </DivCheckbox>
  );
};
export default Checkbox;
