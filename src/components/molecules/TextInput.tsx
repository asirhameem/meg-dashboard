import { Input, Label, Small } from "../atoms";
import { InputWrapper } from "../utils";

type Props = {
  errors: any;
  register: (name: any) => object;
  name: string;
  title: string;
  type?: 'text' | 'number';
  isHidden?: boolean;
};

const TextInput = ({ errors, register, name, title, type = 'text', isHidden = false }: Props) => {
  return (
    <>
      <InputWrapper hidden={isHidden}>
        <Label htmlFor={name} error={!!errors[name]?.message} hidden={isHidden}>
          {title}:
        </Label>
        <Input {...register(name)} type={type} error={!!errors[name]?.message} hidden={isHidden} />
        {errors?.[name]?.message && (
          <Small hidden={isHidden} error>{errors[name]?.message}</Small>
        )}
      </InputWrapper>
    </>
  )
}
export default TextInput;