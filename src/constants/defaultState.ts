import { IConfigurationPlatformForm, IDataTable, IProductForm, IProductInteriorForm, IProductSpecificationForm, TSignInForm } from "../interfaces";
import { DEFAULT_TABLE_HEADER } from "./dataTableHeader";

export const SIGN_IN_FORM_INITIAL_STATE: TSignInForm = {
  email: "",
  password: "",
};

export const DEFAULT_TABLE_STATE: IDataTable = {
  head: DEFAULT_TABLE_HEADER,
  body: []
}

export const PRODUCT_FORM_INITIAL_STATE: IProductForm = {
  model: '',
  title: '',
  slug: '',
  description: '',
  production_cost: undefined,
  selling_cost: undefined,
  booking_cost: undefined,
  sorting_order: 1,
  is_marketed: 1,
  is_active: 1,
  category_id: undefined,
  marketing_content_type: 'image',
  marketing_content_file: undefined,
  thumbnail_file: undefined,
  video_content_file: undefined,
}

export const PRODUCT_INTERIOR_FORM_INITIAL_STATE: IProductInteriorForm = {
  product_id: undefined,
  interior_type_id: undefined,
  interior_title: '',
  interior_description: '',
  interior_file: undefined,
}


export const PRODUCT_SPECIFICATION_FORM_INITIAL_STATE: IProductSpecificationForm = {
  product_id: undefined,
  specification_category_id: undefined,
  specification_id: undefined,
  value: '',
}

export const CONFIGURE_PLATFORM_FORM_INITIAL_STATE: IConfigurationPlatformForm = {
  section_name: '',
  configuration_name: '',
  configuration_type: '',
  configuration_title: '',
  configuration_value: '',
  configuration_content: undefined,
}