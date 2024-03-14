import { Table } from "../components/molecules";
import { productColumn } from "../data/tableColumn";

import {useGetCategoriesQuery} from "../store/features/categories/categoriesApi";

const Categories = () => {

  const { data, isLoading } = useGetCategoriesQuery({});

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
export default Categories;