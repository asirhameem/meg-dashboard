import { useMutation, useQuery } from "react-query";
import { GetData, PostData } from "../services";
import {
  API_END_POINTS,
  CONFIGURATION_INTERIOR_COLOR_TABLE_HEADER,
  CONFIGURATION_PAINT_TABLE_HEADER,
  CONFIGURATION_PLATFORM_TABLE_HEADER,
  CONFIGURATION_WHEEL_TABLE_HEADER,
  CONFIGURE_PLATFORM_FORM_INITIAL_STATE,
  DEFAULT_TABLE_STATE,
} from "../constants";
import {
  IDataTable,
  IConfigurationPaints,
  IConfigurationWheels,
  IConfigurationInteriorColor,
  IConfigurationPlatformInfo,
  IConfigurationPlatformForm,
  TChipStatus,
} from "../interfaces";
import { useEffect, useState } from "react";
import { apiError, apiSuccess, replaceUrlParams } from "../helpers";
import { useLocation } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import { configurationPlatformSchema } from "../validations";
import { AxiosError } from "axios";
import { Chip } from "../components";

export const useGetPaints = () => {
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);
  const { isLoading, error, data } = useQuery("configuration-paints", () =>
    GetData<IConfigurationPaints[]>(API_END_POINTS.CONFIGURATION_PAINTS)
  );

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = CONFIGURATION_PAINT_TABLE_HEADER;
      const body = data.data.map((product: IConfigurationPaints) => {
        return {
          id: product.id,
          name: product.name,
          hex: product.hex,
          image: product.image,
          is_active: (
            <Chip type="boolean" status={product.is_active as TChipStatus} />
          ),
          action: "action",
        };
      });
      setDataTableState({ head, body });
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState };
};

export const useGetWheels = () => {
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);
  const { isLoading, error, data } = useQuery("configuration-wheels", () =>
    GetData<IConfigurationWheels[]>(API_END_POINTS.CONFIGURATION_WHEELS)
  );

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = CONFIGURATION_WHEEL_TABLE_HEADER;
      const body = data.data.map((item: IConfigurationWheels) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          image: item.image,
          is_active: item.is_active ? "Active" : "Inactive",
          action: "action",
        };
      });
      setDataTableState({ head, body });
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState };
};

export const useGeInteriorColors = () => {
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);
  const { isLoading, error, data } = useQuery("configuration-wheels", () =>
    GetData<IConfigurationInteriorColor[]>(
      API_END_POINTS.CONFIGURATION_INTERIOR_COLOR
    )
  );

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = CONFIGURATION_INTERIOR_COLOR_TABLE_HEADER;
      const body = data.data.map((item: IConfigurationInteriorColor) => {
        return {
          id: item.id,
          name: item.name,
          hex: item.hex,
          image: item.image,
          is_active: item.is_active ? "active" : "inactive",
          action: "action",
        };
      });
      setDataTableState({ head, body });
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState };
};

export const useGetPlatformInfo = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);

  const {
    isLoading: allIsLoading,
    error: allError,
    data: allData,
    isFetching: allIsFetching,
    refetch: allRefetch,
  } = useQuery(
    "configuration-platform-info-all",
    () =>
      GetData<IConfigurationPlatformInfo[]>(
        API_END_POINTS.CONFIGURATION_PLATFORM_ALL
      ),
    { enabled: !searchParams.get("section") }
  );

  const {
    isLoading: isLoading,
    error: error,
    data: data,
    isFetching: isFetching,
  } = useQuery(
    ["configuration-platform-info-by-section", searchParams.get("section")],
    () =>
      GetData<IConfigurationPlatformInfo[]>(
        replaceUrlParams(API_END_POINTS.CONFIGURATION_PLATFORM_BY_SECTION, {
          section: searchParams.get("section") || "",
        })
      ),
    { enabled: !!searchParams.get("section") }
  );

  const settableState = (data: IConfigurationPlatformInfo[]) => {
    const head = CONFIGURATION_PLATFORM_TABLE_HEADER;
    const body = data.map((item: IConfigurationPlatformInfo) => {
      return {
        id: item.id,
        section_name: item.section_name,
        configuration_name: item.configuration_name,
        configuration_type: item.configuration_type,
        configuration_title: item.configuration_title,
        configuration_value: item.configuration_value,
        configuration_content_url: item.configuration_content_url,
        is_active: item.is_active ? "Active" : "Inactive",
      };
    });
    setDataTableState({ head, body });
  };

  useEffect(() => {
    if (!allIsLoading && !allError && allData?.data) {
      if (allData.data.length) {
        settableState(allData.data);
      } else {
        setDataTableState({
          head: CONFIGURATION_PLATFORM_TABLE_HEADER,
          body: [],
        });
      }
    }
  }, [allIsLoading, allError, allData, allIsFetching]);

  useEffect(() => {
    if (!isLoading && !error && data?.data) {
      if (data.data.length) {
        settableState(data.data);
      } else {
        setDataTableState({
          head: CONFIGURATION_PLATFORM_TABLE_HEADER,
          body: [],
        });
      }
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState, isFetching, allRefetch };
};

export const useCreatePlatformInfo = () => {
  const form = useForm<IConfigurationPlatformForm>({
    mode: "uncontrolled",
    initialValues: CONFIGURE_PLATFORM_FORM_INITIAL_STATE,
    validate: yupResolver(configurationPlatformSchema),
  });

  const {
    mutate: createProduct,
    isLoading: isCreating,
    isError: hasCreateError,
    data: createData,
    isSuccess: isCreateSuccess,
    error: createError,
  } = useMutation((value: IConfigurationPlatformForm) =>
    PostData<IConfigurationPlatformForm>(
      API_END_POINTS.CONFIGURATION_PLATFORM_INFO,
      value
    )
  );

  const handleSubmit = async (values: IConfigurationPlatformForm) => {
    const payload: IConfigurationPlatformForm = {
      ...values,
    };

    createProduct(payload);
  };

  useEffect(() => {
    if (hasCreateError) {
      apiError(createError as AxiosError);
    }
    if (isCreateSuccess) {
      apiSuccess(createData);
    }
  }, [isCreating, hasCreateError, isCreateSuccess, createError]);

  return {
    form,
    handleSubmit,
    isCreateSuccess: isCreateSuccess,
  };
};
