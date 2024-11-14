import { useEffect, useState } from "react";
import { Button } from "../components/atoms";
import { ModalBox, Table } from "../components/molecules";

import ConfigurationCreate from "../components/templates/forms/configuration/Create";
import ConfigurationUpdate from "../components/templates/forms/configuration/Update";

import { useGetAllConfigurationsQuery } from "../store/features/configuration/configurationApi";
const Configuration = () => {
  const { data, isLoading } = useGetAllConfigurationsQuery({
    section: "platform",
  });

  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState<TSpecificationCategory | null>(
    null,
  );

  const [createApi, { isLoading: createLoading }] =
    useCreateSpecificationCategoriesMutation();
  const [updateApi, { isLoading: updateLoading }] =
    useUpdateSpecificationCategoriesMutation();

  const action = {
    onClick: ({ data, type }) => {
      if (type === "details") {
        setUpdateData(data);
        setUpdateModal(true);
      }
    },
  };

  useEffect(() => {
    if (!updateModal) {
      setUpdateData(null);
    }
  }, [updateModal]);

  const handleCreate = async (data: TSpecificationCategory) => {
    const response = await createApi({ data });
    if (response?.data?.success) {
      setCreateModal(false);
    }
  };

  const handleUpdate = async (data: TSpecificationCategory) => {
    const id = data.id;
    delete data.id;
    const response = await updateApi({ id, data });
    if (response?.data?.success) {
      setUpdateModal(false);
    }
  };

  const handleClickOnAddBtn = () => {
    setCreateModal(true);
  };
  return (
    <>
      <div className="flex justify-end">
        <Button onClick={handleClickOnAddBtn}>Add Configuration</Button>
      </div>

      <Table
        column={configurationColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />

      {createModal ? (
        <ModalBox
          title="Create Configuration"
          onClose={() => setCreateModal(false)}
          children={
            <ConfigurationCreate
              submit={handleCreate}
              isLoading={createLoading}
            />
          }
          wrapperClassName="min-w-[90vw] md:min-w-[500px]"
        />
      ) : (
        ""
      )}

      {updateModal ? (
        <ModalBox
          title="Update Spec Category"
          onClose={() => setUpdateModal(false)}
          children={
            <ConfigurationUpdate
              submit={handleUpdate}
              isLoading={updateLoading}
              data={updateData}
            />
          }
          wrapperClassName="min-w-[90vw] md:min-w-[500px]"
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Configuration;
