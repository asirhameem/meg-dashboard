import {
  Breadcrumbs,
  Divider,
  Drawer,
  Flex,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { useGetPaints } from "../../../hooks";
import { Button, DataTable, FileInput, TextInput } from "../../../components";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useMutation, useQuery } from "react-query";
import { DeleteData, GetData, PostData } from "../../../services";
import { API_END_POINTS } from "../../../constants";
import { useEffect, useState } from "react";
import { apiError, apiSuccess, replaceUrlParams } from "../../../helpers";
import { AxiosError } from "axios";
import { IConfigurationPaints } from "../../../interfaces";

interface PaintForm {
  id?: number;
  name: string;
  hex: string;
  rgb: string;
  paint_image?: File;
}

const DEFAULT_FORM_VALUES: PaintForm = {
  name: "",
  hex: "",
  rgb: "",
  paint_image: undefined,
};

const PaintPage = () => {
  const { data, refetch } = useGetPaints();

  const [opened, { open, close }] = useDisclosure(false);
  const [
    deleteConfirmationOpened,
    { open: deleteConfirmationOpen, close: deleteConfirmationClose },
  ] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: DEFAULT_FORM_VALUES,
  });

  const [selectedRow, setSelectedRow] = useState<PaintForm | null>(null);
  const [selectedDeleteRow, setSelectedDeleteRow] = useState<PaintForm | null>(
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
        ? GetData<IConfigurationPaints[]>(
            replaceUrlParams(API_END_POINTS.PAINT_DETAILS, {
              "paint-id": selectedRow.id.toString(),
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
    PostData<FormData>(API_END_POINTS.PAINT_CREATE, formData)
  );

  const {
    mutate: updateMutate,
    isLoading: isUpdating,
    isError: hasUpdateError,
    data: updateData,
    isSuccess: isUpdateSuccess,
    error: updateError,
  } = useMutation((formData: FormData) =>
    PostData<FormData>(
      replaceUrlParams(API_END_POINTS.PAINT_UPDATE, {
        "paint-id":
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
      replaceUrlParams(API_END_POINTS.PAINT_UPDATE, {
        "paint-id":
          selectedDeleteRow && selectedDeleteRow.id
            ? selectedDeleteRow.id.toString()
            : "",
      })
    )
  );

  const tableActions = {
    edit: (row: unknown) => {
      setSelectedRow(row as PaintForm);
    },
    delete: (row: unknown) => {
      setSelectedDeleteRow(row as PaintForm);
      deleteConfirmationOpen();
    },
  };

  const handleSubmit = async (values: PaintForm) => {
    const payload = {
      name: values.name,
      hex: values.hex,
      rgb: values.rgb,
      paint_image: values.paint_image,
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
        const { name, hex, rgb } = detailsData.data[0];
        form.initialize({
          name: name ?? "",
          hex: hex ?? "",
          rgb: rgb ?? "",
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
        title="Delete Paint"
      >
        {/* Modal content */}
        <Text>Are you sure you want to delete this paint?</Text>
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
        title="Add Product Interior"
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction="column" gap="sm">
            <TextInput<PaintForm>
              withAsterisk
              label="Name"
              placeholder="enter paint name"
              name="name"
              form={form}
            />
            <TextInput<PaintForm>
              withAsterisk
              label="HEX"
              placeholder="enter paint HEX code"
              name="hex"
              form={form}
            />
            <TextInput<PaintForm>
              withAsterisk
              label="RGB"
              placeholder="enter paint RGB code"
              name="rgb"
              form={form}
            />
            <FileInput<PaintForm>
              label="Interior Image"
              placeholder="add interior image"
              name="paint_image"
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
        <Link to="/configurations/paints" className="link-blue">
          Paint Configurations
        </Link>
      </Breadcrumbs>
      <Flex align="center" justify="space-between">
        <Title order={1} c="gray.7">
          Paint
        </Title>
        <Button onClick={open}>Add Paint</Button>
      </Flex>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} actions={tableActions} />
    </>
  );
};

export default PaintPage;
