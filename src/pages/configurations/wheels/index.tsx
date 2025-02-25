import {
  Breadcrumbs,
  Divider,
  Drawer,
  Flex,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { useGetWheels } from "../../../hooks";
import { Button, DataTable, FileInput, TextInput } from "../../../components";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { DeleteData, GetData, PostData, PutData } from "../../../services";
import { IConfigurationWheels } from "../../../interfaces";
import { apiError, apiSuccess, replaceUrlParams } from "../../../helpers";
import { API_END_POINTS } from "../../../constants";
import { AxiosError } from "axios";

interface FormState {
  id?: number;
  name: string;
  wheel_image?: File;
  uuid?: string;
}

const DEFAULT_FORM_VALUES: FormState = {
  name: "",
  wheel_image: undefined,
};

const WheelsPage = () => {
  const { data, refetch } = useGetWheels();

  const [opened, { open, close }] = useDisclosure(false);
  const [
    deleteConfirmationOpened,
    { open: deleteConfirmationOpen, close: deleteConfirmationClose },
  ] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: DEFAULT_FORM_VALUES,
  });

  const [selectedRow, setSelectedRow] = useState<FormState | null>(null);
  const [selectedDeleteRow, setSelectedDeleteRow] = useState<FormState | null>(
    null
  );

  const {
    isLoading: isDetailsLoading,
    error: detailsError,
    data: detailsData,
  } = useQuery(
    "configuration-paint",
    () =>
      selectedRow?.id
        ? GetData<IConfigurationWheels>(
            replaceUrlParams(API_END_POINTS.WHEEL_DETAILS, {
              "wheel-id": selectedRow.id.toString(),
            })
          )
        : Promise.reject("No ID provided"),
    {
      enabled: !!selectedRow?.id,
    }
  );

  const {
    mutate: createMutate,
    isLoading: isCreating,
    isError: hasCreateError,
    data: createData,
    isSuccess: isCreateSuccess,
    error: createError,
  } = useMutation((formData: FormData) =>
    PostData<FormData>(API_END_POINTS.WHEEL_CREATE, formData)
  );

  const {
    mutate: updateMutate,
    isLoading: isUpdating,
    isError: hasUpdateError,
    data: updateData,
    isSuccess: isUpdateSuccess,
    error: updateError,
  } = useMutation((formData: FormData) =>
    PutData<FormData>(
      replaceUrlParams(API_END_POINTS.WHEEL_UPDATE, {
        "wheel-id":
          selectedRow && selectedRow.id ? selectedRow.id.toString() : "",
      }),
      formData
    )
  );

  const {
    mutate: deleteMutate,
    isLoading: isDeleting,
    isError: hasDeleteError,
    data: DeleteInfo,
    isSuccess: isDeleteSuccess,
    error: DeleteError,
  } = useMutation(() =>
    DeleteData(
      replaceUrlParams(API_END_POINTS.WHEEL_DELETE, {
        "wheel-id":
          selectedDeleteRow && selectedDeleteRow.id
            ? selectedDeleteRow?.id?.toString()
            : "",
      })
    )
  );

  const tableActions = {
    edit: (row: unknown) => {
      setSelectedRow(row as FormState);
    },
    delete: (row: unknown) => {
      setSelectedDeleteRow(row as FormState);
      deleteConfirmationOpen();
    },
  };

  const handleSubmit = async (values: FormState) => {
    const payload = {
      name: values.name,
      wheel_image: values.wheel_image,
    };
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    if (selectedRow?.id) {
      updateMutate(formData);
      return;
    } else {
      createMutate(formData);
    }
  };

  useEffect(() => {
    if (detailsData?.success) {
      if (detailsData?.data) {
        const { name } = detailsData.data;
        form.initialize({
          name: name ?? "",
        });
      }
      open();
    }
  }, [isDetailsLoading, detailsError, detailsData]);

  useEffect(() => {
    if (hasCreateError) {
      apiError(createError as AxiosError);
    }
    if (isCreateSuccess) {
      apiSuccess(createData);
      close();
      refetch();
    }
  }, [isCreating, hasCreateError, isCreateSuccess, createError]);

  useEffect(() => {
    if (hasUpdateError) {
      apiError(updateError as AxiosError);
    }
    if (isUpdateSuccess) {
      apiSuccess(updateData);
      close();
      setSelectedRow(null);
      refetch();
    }
  }, [isUpdating, hasUpdateError, isUpdateSuccess, updateError]);

  useEffect(() => {
    if (hasDeleteError) {
      apiError(DeleteError as AxiosError);
    }
    if (isDeleteSuccess) {
      apiSuccess(DeleteInfo);
      refetch();
    }
  }, [isDeleting, hasDeleteError, isDeleteSuccess, DeleteError]);
  return (
    <>
      <Modal
        opened={deleteConfirmationOpened}
        onClose={deleteConfirmationClose}
        title="Delete Wheel"
      >
        {/* Modal content */}
        <Text>Are you sure you want to delete this wheel?</Text>
        <Flex justify="flex-end" gap="sm">
          <Button onClick={deleteConfirmationClose}>Cancel</Button>
          <Button
            color="red"
            onClick={() => {
              deleteMutate();
              deleteConfirmationClose();
            }}
          >
            {isDeleting ? "Loading..." : "Delete"}
          </Button>
        </Flex>
      </Modal>
      <Drawer
        opened={opened}
        onClose={close}
        title="Add Wheel"
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction="column" gap="sm">
            <TextInput<FormState>
              withAsterisk
              label="Name"
              placeholder="enter wheel name"
              name="name"
              form={form}
            />
            <FileInput<FormState>
              label="Wheel Image"
              placeholder="add wheel wheel image"
              name="wheel_image"
              form={form}
            />
            <Button type="submit" style={{ width: "fit-content" }}>
              {isCreating || isUpdating ? "Loading..." : "Submit"}
            </Button>
          </Flex>
        </form>
      </Drawer>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/configurations/wheels" className="link-blue">
          Wheels Configurations
        </Link>
      </Breadcrumbs>
      <Flex align="center" justify="space-between">
        <Title order={1} c="gray.7">
          Wheels
        </Title>
        <Button onClick={open}>Add Wheel</Button>
      </Flex>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} actions={tableActions} />
    </>
  );
};

export default WheelsPage;
