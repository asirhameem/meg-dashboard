import { useNavigate } from "react-router-dom";
import { Table } from "../components/molecules";
import { productColumn } from "../data/tableColumn";

import { useGetProductsQuery } from "../store/features/products/productsApi";

const Products = () => {

  const navigate = useNavigate();

  const { data, isLoading } = useGetProductsQuery({});

  const action = {
    onClick: ({ data, type }) => {
      if (type === "details") {
        navigate(`/products/${data.slug}/details`);
      }
    }
  }
  return (
    <>
      <Table
        column={productColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />
    </>
  )
}
export default Products;