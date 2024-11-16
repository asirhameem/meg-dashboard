import { useMutation, useQuery } from "react-query"
import { GetData, PostData, PutData } from "../services"
import { API_END_POINTS, DEFAULT_TABLE_STATE, PRODUCT_TABLE_HEADER, PRODUCT_CATEGORY_TABLE_HEADER, PRODUCT_INTERIOR_TABLE_HEADER, PRODUCT_SPECIFICATION_TABLE_HEADER, PRODUCT_FORM_INITIAL_STATE, PRODUCT_INTERIOR_FORM_INITIAL_STATE } from "../constants"
import { IDataTable, IFormSelectOption, IInteriorType, IProductForm, IProductInteriorForm, IProductsCategories, IProductsInteriors, IProductSpecificationForm, IProductSpecificationsFrom, IProductSpecificationWithCategory, IProductsSpecifications, ISpecification, TProducts } from "../interfaces"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { apiError, apiSuccess, replaceUrlParams } from "../helpers"
import { useForm, yupResolver } from "@mantine/form"
import { productInteriorSchema, productSchema, productSpecificationSchema, productUpdateSchema } from "../validations"
import { AxiosError } from "axios"
import { PRODUCT_SPECIFICATION_FORM_INITIAL_STATE } from "../constants/defaultState"
import { IProductUpdateForm } from "../interfaces/products"

export const useGetProducts = () => {
  const navigate = useNavigate()
  const [dataTableState, setDataTableState] = useState<IDataTable>(DEFAULT_TABLE_STATE)
  const { isLoading, error, data } = useQuery('products', () => GetData<TProducts[]>(API_END_POINTS.PRODUCTS))

  const tableActions = {
    view: (row: unknown) => {
      const { id } = row as TProducts
      navigate(`/products/${id}/details`)
    },
    edit: (row: unknown) => {
      const { id } = row as TProducts
      navigate(`/products/${id}/update`, { state: { row } })
    },
  }

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = PRODUCT_TABLE_HEADER;
      const body = data.data.map((product: TProducts) => {
        return {
          id: product.id,
          model: product.model,
          title: product.title,
          is_visible: product.is_active ? "Active" : "Inactive",
          uuid: product.uuid,
          description: product.description,
          production_cost: product.production_cost,
          selling_cost: product.selling_cost,
          booking_cost: product.booking_cost,
          sorting_order: product.sorting_order,
          is_marketed: product.is_marketed,
          is_active: product.is_active,
          category_id: product.category_id,
          action: "action"
        }
      })
      setDataTableState({ head, body })
    }
  }, [isLoading, error, data])

  return { isLoading, error, data: dataTableState, actions: tableActions }
}

export const useGetProductsCategories = () => {
  const [dataTableState, setDataTableState] = useState<IDataTable>(DEFAULT_TABLE_STATE)
  const { isLoading, error, data } = useQuery('products-categories', () => GetData<IProductsCategories[]>(API_END_POINTS.PRODUCTS_CATEGORIES))

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = PRODUCT_CATEGORY_TABLE_HEADER;
      const body = data.data.map((product: IProductsCategories) => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          is_visible: product.is_visible ? "Active" : "Inactive",
          action: "action"
        }
      })
      setDataTableState({ head, body })
    }
  }, [isLoading, error, data])

  return { isLoading, error, data: dataTableState }

}

export const useGetProductsInteriors = () => {
  const params = useParams();

  const [dataTableState, setDataTableState] = useState<IDataTable>(DEFAULT_TABLE_STATE)
  const { isLoading, error, data, refetch } = useQuery('products-interiors', () => GetData<IProductsInteriors[]>(replaceUrlParams(API_END_POINTS.PRODUCTS_INTERIORS, params)))

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = PRODUCT_INTERIOR_TABLE_HEADER;
      const body = data.data.map((item: IProductsInteriors) => {
        return {
          id: item.id,
          interior_title: item.interior_title,
          interior_image: item.interior_image,
          interior_description: item.interior_description,
          action: "action"
        }
      })
      setDataTableState({ head, body })
    }
  }, [isLoading, error, data])

  return { isLoading, error, data: dataTableState, refetch }
}

export const useGetProductsSpecification = () => {
  const params = useParams();

  const [dataTableState, setDataTableState] = useState<IDataTable>(DEFAULT_TABLE_STATE)
  const { isLoading, error, data, refetch } = useQuery('products-interiors', () => GetData<IProductsSpecifications[]>(replaceUrlParams(API_END_POINTS.PRODUCTS_SPECIFICATION, params)))

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = PRODUCT_SPECIFICATION_TABLE_HEADER;
      const body = data.data.map((item: IProductsSpecifications) => {
        return {
          id: item.id,
          category_name: item.category_name,
          specification_name: item.specification_name,
          specification_value: item.specification_value,
          action: "action"
        }
      })
      setDataTableState({ head, body })
    }
  }, [isLoading, error, data])

  return { isLoading, error, data: dataTableState, refetch }
}

export const useCreateProduct = () => {
  const navigate = useNavigate();
  const form = useForm<IProductForm>({
    mode: "uncontrolled",
    initialValues: PRODUCT_FORM_INITIAL_STATE,
    validate: yupResolver(productSchema),
  });

  const {
    mutate: createProduct,
    isLoading: isCreating,
    isError: hasCreateError,
    data: createData,
    isSuccess: isCreateSuccess,
    error: createError
  } = useMutation((formData: FormData) => PostData<FormData>(API_END_POINTS.PRODUCTS_CREATE, formData))

  const handleSubmit = async (values: IProductForm) => {
    const payload: IProductForm = {
      ...values,
      category_id: Number(values.category_id),
      is_active: values.is_active ? 1 : 0,
      is_marketed: values.is_marketed ? 1 : 0,
      marketing_content_type: values.marketing_content_file?.type.includes('image') ? 'image' : 'video',
      video_content_file: values.video_content_file ? values.video_content_file : undefined,
    }

    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    createProduct(formData);
  };

  useEffect(() => {
    if (hasCreateError) {
      apiError(createError as AxiosError);
    }
    if (isCreateSuccess) {
      apiSuccess(createData);
      navigate('/products');
    }
  }, [isCreating, hasCreateError, isCreateSuccess, createError])

  return {
    form,
    handleSubmit,
  }
}

export const useCreateProductInterior = () => {
  const params = useParams();

  const form = useForm<IProductInteriorForm>({
    mode: "uncontrolled",
    initialValues: PRODUCT_INTERIOR_FORM_INITIAL_STATE,
    validate: yupResolver(productInteriorSchema),
  });
  form.setFieldValue('product_id', Number(params['product-id']));

  const { data: interiorTypeData, isError: hasInteriorTypeError, isLoading: isInteriorTypeLoading } = useQuery('interior-types', () => GetData<IInteriorType[]>(API_END_POINTS.INTERIOR_TYPE))
  const [interiorTypes, setInteriorTypes] = useState<{ value: string, label: string }[]>([])

  const {
    mutate: createProductInterior,
    isLoading: isCreating,
    isError: hasCreateError,
    data: createData,
    isSuccess: isCreateSuccess,
    error: createError
  } = useMutation((formData: FormData) => PostData<FormData>(API_END_POINTS.PRODUCTS_INTERIOR_CREATE, formData))

  const handleSubmit = async (values: IProductInteriorForm) => {
    const payload: IProductInteriorForm = {
      ...values,
      interior_type_id: Number(values.interior_type_id),
      interior_title: values.interior_title.trim(),
      interior_description: values.interior_description.trim(),
    }

    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    createProductInterior(formData);
  };

  useEffect(() => {
    if (hasCreateError) {
      apiError(createError as AxiosError);
    }
    if (isCreateSuccess) {
      apiSuccess(createData);
    }
  }, [isCreating, hasCreateError, isCreateSuccess, createError])

  useEffect(() => {
    if (!isInteriorTypeLoading && !hasInteriorTypeError && interiorTypeData?.data?.length) {
      const tempInteriorTypes = interiorTypeData.data.map((item: IInteriorType) => {
        return {
          value: String(item.id),
          label: item.name
        }
      })
      tempInteriorTypes.unshift({ value: '', label: 'Choose one' });
      setInteriorTypes(tempInteriorTypes)
    }
  }, [interiorTypeData, hasInteriorTypeError, isInteriorTypeLoading])

  return {
    form,
    handleSubmit,
    interiorTypes: interiorTypes,
    isCreateSuccess: isCreateSuccess
  }
}

export const useCreateProductSpecification = () => {
  const params = useParams();
  const [currentSpecificationCategory, setCurrentSpecificationCategory] = useState<string>('')

  const form = useForm<IProductSpecificationForm>({
    mode: "uncontrolled",
    initialValues: PRODUCT_SPECIFICATION_FORM_INITIAL_STATE,
    validate: yupResolver(productSpecificationSchema),
    onValuesChange: (values) => {
      if (String(values.specification_category_id) !== String(currentSpecificationCategory)) {
        setCurrentSpecificationCategory(String(values.specification_category_id))
      }
    }
  });
  form.setFieldValue('product_id', Number(params['product-id']));

  const { data: specificationCategoriesData, isError: hasSpecificationCategoriesError, isLoading: isSpecificationCategoriesLoading } = useQuery('specifications-with-categories', () => GetData<IProductSpecificationWithCategory[]>(API_END_POINTS.PRODUCT_SPECIFICATION_WITH_CATEGORY))
  const [specificationCategories, setSpecificationCategories] = useState<{ value: string, label: string, specifications: IFormSelectOption[] }[]>([])

  const {
    mutate: createProductSpecification,
    isLoading: isCreating,
    isError: hasCreateError,
    data: createData,
    isSuccess: isCreateSuccess,
    error: createError
  } = useMutation((value: IProductSpecificationsFrom) => PostData<IProductSpecificationsFrom>(API_END_POINTS.PRODUCTS_SPECIFICATION_CREATE, value))

  const handleSubmit = async (values: IProductSpecificationForm) => {
    const payload: IProductSpecificationsFrom = {
      specifications: [{
        product_id: Number(values.product_id),
        specification_id: Number(values.specification_id),
        value: values.value.trim()
      }]
    }

    createProductSpecification(payload);
  };

  useEffect(() => {
    if (hasCreateError) {
      apiError(createError as AxiosError);
    }
    if (isCreateSuccess) {
      apiSuccess(createData);
    }
  }, [isCreating, hasCreateError, isCreateSuccess, createError])

  useEffect(() => {
    if (!isSpecificationCategoriesLoading && !hasSpecificationCategoriesError && specificationCategoriesData?.data?.length) {
      const tempSpecificationCategories = specificationCategoriesData.data.map((item: IProductSpecificationWithCategory) => {
        return {
          value: String(item.id),
          label: item.name,
          specifications: item.specifications.map((specification: ISpecification) => {
            return {
              value: String(specification.id),
              label: specification.name
            }
          })
        }
      })
      tempSpecificationCategories.unshift({ value: '', label: 'Choose one', specifications: [{ value: '', label: "" }] });
      setSpecificationCategories(tempSpecificationCategories)
    }
  }, [specificationCategoriesData, hasSpecificationCategoriesError, isSpecificationCategoriesLoading])

  return {
    form,
    handleSubmit,
    specificationCategories: specificationCategories,
    currentSpecificationCategory: currentSpecificationCategory,
    isCreateSuccess: isCreateSuccess,
  }
}

export const useUpdateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location?.state?.row);


  const payload: IProductUpdateForm = {
    id: location?.state?.row?.id,
    uuid: location?.state?.row?.uuid,
    model: location?.state?.row?.model,
    title: location?.state?.row?.title,
    description: location?.state?.row?.description,
    production_cost: Number(location?.state?.row?.production_cost || 0),
    selling_cost: Number(location?.state?.row?.selling_cost || 0),
    booking_cost: location?.state?.row?.booking_cost,
    sorting_order: location?.state?.row?.sorting_order,
    is_marketed: location?.state?.row?.is_marketed,
    is_active: location?.state?.row?.is_active,
    category_id: location?.state?.row?.category_id,
  }
  const form = useForm<IProductForm>({
    mode: "uncontrolled",
    initialValues: payload,
    validate: yupResolver(productUpdateSchema),
  });

  const {
    mutate: updateProduct,
    isLoading: isUpdating,
    isError: hasUpdateError,
    data: updateData,
    isSuccess: isUpdateSuccess,
    error: updateError
  } = useMutation((formData: FormData) => PutData<FormData>(`${API_END_POINTS.PRODUCTS_UPDATE}/${location.state?.row?.uuid}`, formData))

  const handleSubmit = async (values: IProductForm) => {
    const payload: IProductForm = {
      ...values,
      category_id: Number(values.category_id),
      is_active: values.is_active ? 1 : 0,
      is_marketed: values.is_marketed ? 1 : 0,
    }

    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    updateProduct(formData);
  };

  useEffect(() => {
    if (hasUpdateError) {
      apiError(updateError as AxiosError);
    }
    if (isUpdateSuccess) {
      apiSuccess(updateData);
      navigate('/products');
    }
  }, [isUpdating, hasUpdateError, isUpdateSuccess, updateError])

  return {
    form,
    handleSubmit,
  }
}