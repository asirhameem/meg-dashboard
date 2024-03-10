import { Select, Label, Small } from "../atoms";
import { InputWrapper } from "../utils";

type Option = {
  value: string;
  label: string;
};

type Props = {
  errors: any;
  register: (name: any) => object;
  name: string;
  title: string;
  options: Option[];
};

const SelectBox = ({ errors, register, name, title, options }: Props) => {
  return (
    <>
      <InputWrapper>
        <Label htmlFor={name} error={!!errors[name]?.message}>
          {title}:
        </Label>
        <Select {...register(name)} error={!!errors[name]?.message}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Select>
        {errors?.[name]?.message && (
          <Small error>{errors[name]?.message}</Small>
        )}
      </InputWrapper>
    </>
  )
}
export default SelectBox;