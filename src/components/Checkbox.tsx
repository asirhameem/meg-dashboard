import { Checkbox as CheckboxInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

type TextInputProps<T> = {
  label?: string;
  description?: string;
  name: keyof T;
  form: UseFormReturnType<T>;
  defaultChecked?: boolean;
};

export const Checkbox = <T,>({
  label,
  description,
  name,
  form,
  defaultChecked = true,
}: TextInputProps<T>) => {
  return (
    <CheckboxInput
      label={label}
      description={description}
      key={form.key(name)}
      {...form.getInputProps(name)}
      defaultChecked={defaultChecked}
    />
  );
};
