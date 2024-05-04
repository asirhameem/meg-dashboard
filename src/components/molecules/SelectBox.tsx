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
  isHidden?: boolean;
  isLoading?: boolean;
  defaultLabel?: string;
};

const SelectBox = ({ errors, register, name, title, options, isHidden = false, isLoading = false, defaultLabel = "Please select one" }: Props) => {
  return (
    <>
      <InputWrapper hidden={isHidden}>
        <Label htmlFor={name} error={!!errors[name]?.message} hidden={isHidden}>
          {title}:
        </Label>
        <Select {...register(name)} error={!!errors[name]?.message} hidden={isHidden} disabled={isLoading}>
          {
            isLoading ? (
              <option value="">Loading...</option>
            ) : (
              <>
                <option value="">{defaultLabel}</option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </>
            )
          }
        </Select>
        {errors?.[name]?.message && (
          <Small error>{errors[name]?.message}</Small>
        )}
      </InputWrapper>
    </>
  )
}
export default SelectBox;