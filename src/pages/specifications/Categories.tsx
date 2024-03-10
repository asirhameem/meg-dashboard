import { Table } from "../../components/molecules";
import { specificationCategoryColumn } from "../../data/tableColumn";

import { useGetSpecificationCategoriesQuery } from "../../store/features/specifications/categories/specificationCategoriesApi.ts";


const Categories = () => {
  const { data, isLoading } = useGetSpecificationCategoriesQuery({});
  return (
    <>
      <Table
        column={specificationCategoryColumn}
        data={data?.data || []}
        isLoading={isLoading}
      />
    </>
  )
}
export default Categories;