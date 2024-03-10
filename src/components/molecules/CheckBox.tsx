import { CheckboxLabel, CheckboxInput } from "../atoms";

type Props = {
  errors: any;
  register: (name: any) => object;
  name: string;
  title: string;
};

const CheckBox = ({ errors, register, name, title }: Props) => {
  return (
    <>
      <CheckboxLabel htmlFor={name} error={!!errors[name]?.message}>
        <CheckboxInput {...register(name)} error={!!errors[name]?.message} />
        {title}
      </CheckboxLabel>
    </>
  )
}
export default CheckBox;