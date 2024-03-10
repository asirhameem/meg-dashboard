import { Input, Label, Small } from "../atoms";
import { InputWrapper } from "../utils";

type Props = {
  errors: any;
  register: (name: any) => object;
  name: string;
  title: string;
  type?: 'text' | 'number';
};

const TextInput = ({ errors, register, name, title, type = 'text' }: Props) => {
  return (
    <>
      <InputWrapper>
        <Label htmlFor={name} error={!!errors[name]?.message}>
          {title}:
        </Label>
        <Input {...register(name)} type={type} error={!!errors[name]?.message} />
        {errors?.[name]?.message && (
          <Small error>{errors[name]?.message}</Small>
        )}
      </InputWrapper>
    </>
  )
}
export default TextInput;