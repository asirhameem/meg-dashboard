import {
  useCreateProductInterior,
  useGetProductsInteriors,
} from "../../../../hooks";
import { DataTable } from "../../../../components";
import Header from "./Header";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import Form from "./Form";
import { useEffect } from "react";

const ProductsInterior = () => {
  const { data, refetch } = useGetProductsInteriors();
  const { form, handleSubmit, interiorTypes, isCreateSuccess } =
    useCreateProductInterior();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (isCreateSuccess) {
      close();
      refetch();
    }
  }, [isCreateSuccess]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Add Product Interior"
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Form
          form={form}
          handleSubmit={handleSubmit}
          interiorTypes={interiorTypes}
        />
      </Drawer>
      <Header handleFormDrawerOpen={open} />
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};
export default ProductsInterior;
