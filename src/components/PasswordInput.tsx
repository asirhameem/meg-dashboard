import { PasswordInput as Password } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

type PasswordInputProps<T> = {
  label?: string;
  description?: string;
  placeholder?: string;
  withAsterisk?: boolean;
  name: keyof T;
  form: UseFormReturnType<T>;
};

export const PasswordInput = <T,>({
  label,
  description,
  placeholder,
  withAsterisk = false,
  name,
  form,
}: PasswordInputProps<T>) => {
  return (
    <Password
      label={label}
      description={description}
      placeholder={placeholder}
      withAsterisk={withAsterisk}
      key={form.key(name)}
      {...form.getInputProps(name)}
    />
  );
};
