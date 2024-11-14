import { NativeSelect } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

type SelectProps<T> = {
  label?: string;
  description?: string;
  withAsterisk?: boolean;
  name: keyof T;
  form: UseFormReturnType<T>;
  data: { value: string; label: string }[];
};

export const Select = <T,>({
  label,
  description,
  withAsterisk = false,
  name,
  form,
  data,
}: SelectProps<T>) => {
  return (
    <NativeSelect
      label={label}
      description={description}
      withAsterisk={withAsterisk}
      key={form.key(name)}
      {...form.getInputProps(name)}
      w="100%"
      data={data}
    />
  );
};
