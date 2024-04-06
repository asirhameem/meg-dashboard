import {ModalBox, Table} from "../components/molecules";
import {categoryColumn} from "../data/tableColumn/categories/categories.column";
import {useCreateCategoryMutation, useGetCategoriesQuery} from "../store/features/categories/categoriesApi";
import {Button} from "../components/atoms";
import CategoryCreate from "../components/templates/forms/category/CategoryCreate";
import {useState} from "react";
import {TCategory} from "../validation";

const Categories = () => {

  const {data, isLoading} = useGetCategoriesQuery({});
  const [createModal, setCreateModal] = useState(false);
  const [create] = useCreateCategoryMutation();

  const action = {
    /*onClick: ({data, type}) => {
      console.log({data, type});
    }*/
  }

  const handleCreate = (data: TCategory) => {
    console.log('here');
    console.log(data);
    create({data});
  }

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={() => setCreateModal(true)}>
          Add Category
        </Button>

      </div>
      <Table
        column={categoryColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />`

      {
        createModal &&
          <ModalBox
              title="Create category"
              onClose={() => setCreateModal(false)}
              children={<CategoryCreate submit={handleCreate} isLoading={isLoading}/>}
          />
      }
    </>
  )
}
export default Categories;