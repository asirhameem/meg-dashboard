import { Table } from "../components/molecules";
import { productColumn } from "../data/tableColumn";

import { useGetProductsQuery } from "../store/features/products/productsApi";
import {useGetInteriorTypesQuery} from "../store/features/interior/types/interiorTypesApi";

const InteriorTypes = () => {

  const { data, isLoading } = useGetInteriorTypesQuery({});

  const action = {
    onClick: ({ data, type }) => {
      console.log({ data, type });
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
export default InteriorTypes;