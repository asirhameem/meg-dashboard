import { ModalBox, Table } from "../components/molecules";
import { categoryColumn } from "../data/tableColumn/categories/categories.column";
import { useCreateCategoryMutation, useGetCategoriesQuery, useUpdateCategoryMutation } from "../store/features/categories/categoriesApi";
import { Button } from "../components/atoms";
import CategoryCreate from "../components/templates/forms/category/create";
import CategoryUpdate from "../components/templates/forms/category/update";
import { useState } from "react";
import { TCategory } from "../validation";

const Categories = () => {

  const { data, isLoading } = useGetCategoriesQuery({});
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState<TCategory | null>(null);
  const [create] = useCreateCategoryMutation();
  const [update] = useUpdateCategoryMutation();

  const action = {
    onClick: ({ data, type }) => {
      if (type === 'details') {
        setUpdateData(data);
        setUpdateModal(true);
      }
    }
  }

  const handleCreate = async (data: TCategory) => {
    const response = await create({ data });
    if (response?.data?.success) {
      setCreateModal(false);
    }
  }

  const handleUpdate = async (data: TCategory) => {
    const payload = data;
    const id = payload.id;
    delete payload.id;
    const response = await update({ data: payload, id });
    if (response?.data?.success) {
      setUpdateModal(false);
    }

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
          children={<CategoryCreate submit={handleCreate} isLoading={isLoading} />}
          wrapperClassName="min-w-[90vw] md:min-w-[500px]"
        />
      }

      {
        updateModal ? (
          <ModalBox
            title="Update category"
            onClose={() => setUpdateModal(false)}
            children={<CategoryUpdate submit={handleUpdate} data={updateData} isLoading={isLoading} />}
            wrapperClassName="min-w-[90vw] md:min-w-[500px]"
          />
        ) : ""
      }
    </>
  )
}
export default Categories;