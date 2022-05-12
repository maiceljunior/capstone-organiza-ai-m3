import { InputCheckbox, DivCheckbox } from "./style";

const Checkbox = ({ label, valueCheckbox }) => {
  return (
    <DivCheckbox>
      <InputCheckbox type="checkbox" value={valueCheckbox} />
      <span>{label}</span>
    </DivCheckbox>
  );
};
export default Checkbox;
