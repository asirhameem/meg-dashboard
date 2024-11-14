import { UseFormReturnType } from "@mantine/form";

export interface IFormComponentProps<T> {
  form: UseFormReturnType<T, (values: T) => T>;
  handleSubmit: (values: T) => Promise<void>;
}

export interface IFormSelectOption {
  value: string
  label: string
}