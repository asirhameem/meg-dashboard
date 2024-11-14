import { Textarea } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

type TextInputProps<T> = {
  label?: string;
  description?: string;
  placeholder?: string;
  withAsterisk?: boolean;
  name: keyof T;
  form: UseFormReturnType<T>;
  rows?: number;
};

export const TextArea = <T,>({
  label,
  description,
  placeholder,
  withAsterisk = false,
  name,
  form,
  rows = 4,
}: TextInputProps<T>) => {
  return (
    <Textarea
      label={label}
      description={description}
      placeholder={placeholder}
      withAsterisk={withAsterisk}
      key={form.key(name)}
      {...form.getInputProps(name)}
      rows={rows}
    />
  );
};
