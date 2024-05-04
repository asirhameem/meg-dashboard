import React from "react";
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

const ImageInput = ({ errors, register, name, title, isHidden = false }: Props) => {
  return (
    <>
      <InputWrapper hidden={isHidden}>
        <Label htmlFor={name} error={!!errors[name]?.message} hidden={isHidden}>
          {title}:
        </Label>
        <Input {...register(name)} type="file" error={!!errors[name]?.message} hidden={isHidden} />
        {errors?.[name]?.message && (
          <Small hidden={isHidden} error>{errors[name]?.message}</Small>
        )}
      </InputWrapper>
    </>
  )
}
export default ImageInput;