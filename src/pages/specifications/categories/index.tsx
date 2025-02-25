import { useGetSpecificationsCategories } from "../../../hooks";

import {
  Breadcrumbs,
  Divider,
  Drawer,
  Flex,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { Button, DataTable, TextInput } from "../../../components";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { DeleteData, GetData, PostData, PutData } from "../../../services";
import { IConfigurationInteriorColor } from "../../../interfaces";
import { apiError, apiSuccess, replaceUrlParams } from "../../../helpers";
import { API_END_POINTS } from "../../../constants";
import { AxiosError } from "axios";

interface FormState {
  id?: number;
  uuid?: string;
  name: string;
  is_active?: boolean;
}

const DEFAULT_FORM_VALUES: FormState = {
  name: "",
  is_active: false,
};

const SpecificationsCategoriesPage = () => {
  const { data, refetch } = useGetSpecificationsCategories();

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
    ["specifications-category", selectedRow?.id?.toString()],
    () =>
      selectedRow?.id
        ? GetData<IConfigurationInteriorColor[]>(
            replaceUrlParams(API_END_POINTS.SPECIFICATION_CATEGORY_DETAILS, {
              "specification-category-id": selectedRow.id.toString(),
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
    PostData<FormData>(API_END_POINTS.SPECIFICATION_CATEGORY_CREATE, formData)
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
      replaceUrlParams(API_END_POINTS.SPECIFICATION_CATEGORY_UPDATE, {
        "specification-category-id":
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
      replaceUrlParams(API_END_POINTS.SPECIFICATION_CATEGORY_DELETE, {
        "specification-category-id":
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
        const { name } = detailsData.data[0];
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
        title="Delete Specification Category"
      >
        {/* Modal content */}
        <Text>
          Are you sure you want to delete this specification category?
        </Text>
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
        title="Specification Category"
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction="column" gap="sm">
            <TextInput<FormState>
              withAsterisk
              label="Name"
              placeholder="enter specification category name"
              name="name"
              form={form}
            />
            <Button type="submit" style={{ width: "fit-content" }}>
              {isCreating || isUpdating ? "Loading..." : "Submit"}
            </Button>
          </Flex>
        </form>
      </Drawer>

      <div>
        <Breadcrumbs>
          <Link to="/dashboard" className="link-blue">
            Home
          </Link>
          <Link to="/specifications" className="link-blue">
            Specification
          </Link>
          <Link to="/specifications/categories" className="link-blue">
            Specification Categories
          </Link>
        </Breadcrumbs>
        <Flex align="center" justify="space-between">
          <Title order={1} c="gray.7">
            Specifications Categories
          </Title>
          <Button onClick={open}>Add Specification Category</Button>
        </Flex>
        <Divider mt="xs" mb="xl" />
        <DataTable
          columns={data.head}
          rows={data.body}
          actions={tableActions}
        />
      </div>
    </>
  );
};

export default SpecificationsCategoriesPage;
