import { Box, Breadcrumbs, Divider, Flex, Title } from "@mantine/core";
import { Button, DataTable } from "../../components";
import { useGetProducts } from "../../hooks";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { data, actions } = useGetProducts();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/products" className="link-blue">
          Products
        </Link>
      </Breadcrumbs>
      <Flex align="center" justify="space-between">
        <Title order={1} c="gray.7">
          Product
        </Title>
        <Box>
          <Link to="/products/create" className="link-clean">
            <Button>Create Product</Button>
          </Link>
        </Box>
      </Flex>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} actions={actions} />
    </>
  );
};
export default ProductsPage;
