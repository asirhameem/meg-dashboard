import { Flex } from "@mantine/core";
import {
  Button,
  FileInput,
  Select,
  TextArea,
  TextInput,
} from "../../../../components";
import {
  IFormComponentProps,
  IProductInteriorForm,
} from "../../../../interfaces";

interface IFormProps extends IFormComponentProps<IProductInteriorForm> {
  interiorTypes: {
    value: string;
    label: string;
  }[];
}

const Form = ({ form, handleSubmit, interiorTypes }: IFormProps) => {
  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex direction="column" gap="sm">
          <TextInput<IProductInteriorForm>
            withAsterisk
            label="Title"
            placeholder="enter product interior title"
            name="interior_title"
            form={form}
          />
          <TextArea<IProductInteriorForm>
            withAsterisk
            label="Description"
            placeholder="enter product interior description"
            name="interior_description"
            form={form}
          />
          <Select<IProductInteriorForm>
            withAsterisk
            label="Interior Type"
            name="interior_type_id"
            form={form}
            data={interiorTypes}
          />
          <FileInput<IProductInteriorForm>
            withAsterisk
            label="Interior Image"
            placeholder="add interior image"
            name="interior_file"
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
