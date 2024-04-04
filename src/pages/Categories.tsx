import {Table} from "../components/molecules";
import {categoryColumn} from "../data/tableColumn/categories/categories.column";
import {useGetCategoriesQuery} from "../store/features/categories/categoriesApi";
import {Button} from "../components/atoms";

const Categories = () => {

  const {data, isLoading} = useGetCategoriesQuery({});

  const action = {
    /*onClick: ({data, type}) => {
      console.log({data, type});
    }*/
  }
  return (
    <>
      <div className="flex justify-end">
        <Button>
          Add Category
        </Button>

      </div>
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