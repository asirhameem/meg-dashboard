import { TextArea as TextAreaStyled, Label, Small } from "../atoms";
import { InputWrapper } from "../utils";

type Props = {
  errors: any;
  register: (name: any) => object;
  name: string;
  title: string;
};

const InfoInput = ({ errors, register, name, title }: Props) => {
  return (
    <>
      <InputWrapper>
        <Label htmlFor={name} error={!!errors[name]?.message}>
          {title}:
        </Label>
        <TextAreaStyled {...register(name)} error={!!errors[name]?.message} />
        {errors?.[name]?.message && (
          <Small error>{errors[name]?.message}</Small>
        )}
      </InputWrapper>
    </>
  )
}
export default InfoInput;