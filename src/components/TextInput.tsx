import { TextInput as Input } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

type TextInputProps<T> = {
  label?: string;
  description?: string;
  placeholder?: string;
  withAsterisk?: boolean;
  name: keyof T;
  form: UseFormReturnType<T>;
};

export const TextInput = <T,>({
  label,
  description,
  placeholder,
  withAsterisk = false,
  name,
  form,
}: TextInputProps<T>) => {
  return (
    <Input
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
