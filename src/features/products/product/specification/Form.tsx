import { Flex } from "@mantine/core";
import {
  IFormComponentProps,
  IProductSpecificationForm,
} from "../../../../interfaces";
import { Button, Select, TextInput } from "../../../../components";

interface IFormProps extends IFormComponentProps<IProductSpecificationForm> {
  specificationCategories: {
    value: string;
    label: string;
    specifications: {
      value: string;
      label: string;
    }[];
  }[];
  currentSpecificationCategory: string;
}

const Form = ({
  form,
  handleSubmit,
  specificationCategories,
  currentSpecificationCategory,
}: IFormProps) => {
  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex direction="column" gap="sm">
          <Select<IProductSpecificationForm>
            withAsterisk
            label="Specification Category"
            name="specification_category_id"
            form={form}
            data={specificationCategories}
          />
          <Select<IProductSpecificationForm>
            withAsterisk
            label="Specification"
            name="specification_id"
            form={form}
            data={
              specificationCategories.find(
                (category) =>
                  String(category.value) ===
                  String(currentSpecificationCategory)
              )?.specifications || []
            }
          />
          <TextInput<IProductSpecificationForm>
            withAsterisk
            label="Value"
            placeholder="enter specification value"
            name="value"
            form={form}
          />
          <Button type="submit" style={{ width: "fit-content" }}>
            Create
          </Button>
        </Flex>
      </form>
    </>
  );
};
export default Form;
