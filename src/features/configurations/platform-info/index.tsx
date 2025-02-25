import { useDisclosure } from "@mantine/hooks";
import Header from "./Header";
import { Drawer } from "@mantine/core";
import { useCreatePlatformInfo, useGetPlatformInfo } from "../../../hooks";
import { DataTable } from "../../../components";
import Form from "./Form";
import { useEffect } from "react";

const PlatformInfo = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data, allRefetch } = useGetPlatformInfo();
  const { form, handleSubmit, isCreateSuccess } = useCreatePlatformInfo();

  useEffect(() => {
    if (isCreateSuccess) {
      close();
      allRefetch();
    }
  }, [isCreateSuccess]);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Add Platform Info"
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Form form={form} handleSubmit={handleSubmit} />
      </Drawer>
      <Header open={open} />
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};

export default PlatformInfo;
