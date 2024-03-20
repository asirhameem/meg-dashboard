import {Table} from "../components/molecules";
import {categoryColumn} from "../data/tableColumn/categories/categories.column";
import {useGetCategoriesQuery} from "../store/features/categories/categoriesApi";

const Categories = () => {

  const {data, isLoading} = useGetCategoriesQuery({});

  const action = {
    onClick: ({data, type}) => {
      console.log({data, type});
    }
  }
  return (
    <>
      <Table
        column={categoryColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />
    </>
  )
}
export default Categories;