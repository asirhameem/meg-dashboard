import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { DataTable } from "../../../components";
import { useGetProductsCategories } from "../../../hooks";
import { Link } from "react-router-dom";

const ProductsCategoriesPage = () => {
  const { data } = useGetProductsCategories();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/products" className="link-blue">
          Products
        </Link>
        <Link to="/products/categories" className="link-blue">
          Products Category
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Products Categories
      </Title>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};
export default ProductsCategoriesPage;
