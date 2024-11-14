import { Container, Flex } from "@mantine/core";
import {
  Button,
  Checkbox,
  FileInput,
  NumberInput,
  Select,
  TextArea,
  TextInput,
} from "../../../components";
import { useCreateProduct } from "../../../hooks";
import { IProductForm } from "../../../interfaces";

const Form = () => {
  const { form, handleSubmit } = useCreateProduct();
  return (
    <>
      <Container ml={0}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction="column" gap="sm">
            <TextInput<IProductForm>
              withAsterisk
              label="Model"
              placeholder="enter product model"
              name="model"
              form={form}
            />
            <TextInput<IProductForm>
              withAsterisk
              label="Title"
              placeholder="enter product title"
              name="title"
              form={form}
            />
            <TextInput<IProductForm>
              withAsterisk
              label="Slug"
              placeholder="enter product slug"
              name="slug"
              form={form}
            />
            <Select<IProductForm>
              withAsterisk
              label="Category"
              name="category_id"
              form={form}
              data={[
                { value: "0", label: "Choose Category" },
                { value: "1", label: "Vehicle" },
                { value: "2", label: "Shop" },
              ]}
            />
            <TextArea<IProductForm>
              withAsterisk
              label="Description"
              placeholder="enter product description"
              name="description"
              form={form}
            />
            <Flex gap="sm">
              <NumberInput<IProductForm>
                withAsterisk
                label="Product Cost"
                placeholder="enter production cost"
                name="production_cost"
                form={form}
              />
              <NumberInput<IProductForm>
                withAsterisk
                label="Selling Cost"
                placeholder="enter selling cost"
                name="selling_cost"
                form={form}
              />
              <NumberInput<IProductForm>
                withAsterisk
                label="Booking Cost"
                placeholder="enter booking cost"
                name="booking_cost"
                form={form}
              />
            </Flex>
            <Flex gap="sm">
              <FileInput<IProductForm>
                withAsterisk
                label="Marketing Content File"
                placeholder="add marketing content"
                name="marketing_content_file"
                form={form}
              />
              <FileInput<IProductForm>
                withAsterisk
                label="Thumbnail File"
                placeholder="add thumbnail"
                name="thumbnail_file"
                form={form}
              />
              <FileInput<IProductForm>
                withAsterisk
                label="Video Content File"
                placeholder="add video content"
                name="video_content_file"
                form={form}
              />
            </Flex>
            <Flex gap="sm">
              <Checkbox<IProductForm>
                label="Show as marketed"
                name="is_marketed"
                form={form}
              />
              <Checkbox<IProductForm>
                label="Show on website"
                name="is_active"
                form={form}
              />
            </Flex>
            <Button type="submit" style={{ width: "fit-content" }}>
              Create
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
};
export default Form;
