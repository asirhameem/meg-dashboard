import { NumberInput as Number } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

type NumberInputProps<T> = {
  label?: string;
  description?: string;
  placeholder?: string;
  withAsterisk?: boolean;
  name: keyof T;
  form: UseFormReturnType<T>;
};

export const NumberInput = <T,>({
  label,
  description,
  placeholder,
  withAsterisk = false,
  name,
  form,
}: NumberInputProps<T>) => {
  return (
    <Number
      label={label}
      description={description}
      placeholder={placeholder}
      withAsterisk={withAsterisk}
      key={form.key(name)}
      {...form.getInputProps(name)}
      w="100%"
    />
  );
};
