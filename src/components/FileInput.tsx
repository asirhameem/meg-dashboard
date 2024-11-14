import { FileInput as File } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

type FileInputProps<T> = {
  label?: string;
  description?: string;
  placeholder?: string;
  withAsterisk?: boolean;
  name: keyof T;
  form: UseFormReturnType<T>;
};

export const FileInput = <T,>({
  label,
  description,
  placeholder,
  withAsterisk = false,
  name,
  form,
}: FileInputProps<T>) => {
  return (
    <File
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
