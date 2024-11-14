import { Drawer } from "@mantine/core";
import {
  useCreateProductSpecification,
  useGetProductsSpecification,
} from "../../../../hooks";
import { DataTable } from "../../../../components";
import { useDisclosure } from "@mantine/hooks";
import Header from "./Header";
import Form from "./Form";
import { useEffect } from "react";

const ProductsSpecification = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data, refetch } = useGetProductsSpecification();
  const {
    form,
    handleSubmit,
    specificationCategories,
    currentSpecificationCategory,
    isCreateSuccess,
  } = useCreateProductSpecification();

  useEffect(() => {
    if (isCreateSuccess) {
      close();
      refetch();
    }
  }, [isCreateSuccess]);
  return (
    <>
      <Header handleFormDrawerOpen={open} />
      <Drawer
        opened={opened}
        onClose={close}
        title="Add Product Specification"
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Form
          form={form}
          handleSubmit={handleSubmit}
          specificationCategories={specificationCategories}
          currentSpecificationCategory={currentSpecificationCategory}
        />
      </Drawer>
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};
export default ProductsSpecification;
