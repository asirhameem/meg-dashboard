import { useEffect, useState } from "react";
import { Button } from "../../components/atoms/button.styled.ts";
import { Table, ModalBox } from "../../components/molecules";
import { specificationCategoryColumn } from "../../data/tableColumn";

import { useCreateSpecificationCategoriesMutation, useGetSpecificationCategoriesQuery, useUpdateSpecificationCategoriesMutation } from "../../store/features/specifications/categories/specificationCategoriesApi.ts";
import { TSpecificationCategory } from "../../validation/index.ts";
import { SpecificationCategoryForm } from "../../components/templates/forms/index.ts";


const Categories = () => {
  const { data, isLoading } = useGetSpecificationCategoriesQuery({});

  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState<TSpecificationCategory | null>(null);

  const [
    createApi,
    { isLoading: createLoading }
  ] = useCreateSpecificationCategoriesMutation();
  const [
    updateApi,
    { isLoading: updateLoading }
  ] = useUpdateSpecificationCategoriesMutation();

  const action = {
    onClick: ({ data, type }) => {
      if (type === 'details') {
        setUpdateData(data);
        setUpdateModal(true);
      }
    }
  }

  useEffect(() => {
    if (!updateModal) {
      setUpdateData(null);
    }
  }, [updateModal])

  const handleCreate = async (data: TSpecificationCategory) => {
    const response = await createApi({ data });
    if (response?.data?.success) {
      setCreateModal(false);
    }
  }

  const handleUpdate = async (data: TSpecificationCategory) => {
    const id = data.id;
    delete data.id;
    const response = await updateApi({ id, data });
    if (response?.data?.success) {
      setUpdateModal(false);
    }
  }

  const handleClickOnAddBtn = () => {
    setCreateModal(true);
  }

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={handleClickOnAddBtn}>
          Add Spec Category
        </Button>
      </div>

      <Table
        column={specificationCategoryColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />

      {
        createModal ? (
          <ModalBox
            title="Create Spec Category"
            onClose={() => setCreateModal(false)}
            children={<SpecificationCategoryForm submit={handleCreate} isLoading={createLoading} />}
            wrapperClassName="min-w-[90vw] md:min-w-[500px]"
          />
        ) : ""
      }

      {
        updateModal ? (
          <ModalBox
            title="Update Spec Category"
            onClose={() => setUpdateModal(false)}
            children={<SpecificationCategoryForm submit={handleUpdate} isLoading={updateLoading} data={updateData} />}
            wrapperClassName="min-w-[90vw] md:min-w-[500px]"
          />
        ) : ""
      }
    </>
  )
}
export default Categories;