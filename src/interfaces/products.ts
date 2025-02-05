export type TProducts = {
  id: number;
  uuid: string;
  model: string;
  title: string;
  description: string;
  slug: string;
  production_cost: number;
  selling_cost: number;
  booking_cost: number;
  sorting_order: number;
  is_marketed: boolean;
  is_active: boolean;
  category_id: number;
  category_name: null;
  category_slug: null;
  created_at: Date;
  updated_at: Date;
  thumbnail: string;
  marketing_content: string;
  video_content: string;
  features: null;
  marketed_specs: null;
  specifications: null;
  interiors: null;
  product_brochure: string;
}

export interface IProductsCategories {
  id: number;
  name: string;
  slug: string;
  description: string;
  is_visible: boolean;
}

export interface IProductsInteriors {
  id: number;
  interior_image: string;
  interior_type: string;
  interior_title: string;
  interior_description: string;
}

export interface IProductsSpecifications {
  id: number;
  specification_name: string;
  specification_value: string;
  category_name: string;
}

export interface IProductForm {
  model: string;
  title: string;
  slug?: string;
  description: string;
  production_cost?: number;
  selling_cost?: number;
  booking_cost?: number;
  sorting_order?: number;
  is_marketed: 0 | 1;
  is_active: 0 | 1;
  category_id?: number;
  marketing_content_type?: 'image' | 'video';
  marketing_content_file?: File;
  thumbnail_file?: File;
  video_content_file?: File;
  product_brochure?: File;
}

export interface IProductUpdateForm extends IProductForm {
  uuid: string;
  id: number;
}

export interface IProductResponse {
  id: number;
  uuid: string;
  model: string;
  title: string;
  description: string;
  slug: string;
  production_cost: string;
  selling_cost: string;
  booking_cost: string;
  sorting_order: string;
  is_marketed: boolean;
  is_active: boolean;
  category_id: string;
  category_name: null;
  category_slug: null;
  created_at: Date;
  updated_at: Date;
  thumbnail: string;
  marketing_content: string;
  video_content: string;
  features: null;
  marketed_specs: null;
  specifications: null;
  interiors: null;
}

export interface IProductInteriorForm {
  product_id?: number
  interior_type_id?: number
  interior_title: string
  interior_description: string
  interior_file?: File
}

export interface IInteriorType {
  id: number;
  uuid: string;
  name: string;
  is_active: boolean;
}

export interface IProductInteriorResponse {
  interior_id: number;
  interior_type_id: string;
  product_id: string;
  interior_title: string;
  interior_description: string;
  interior_image: string;
}

export interface IProductSpecificationForm {
  product_id?: number;
  specification_category_id?: number;
  specification_id?: number;
  value: string;
}


export interface IProductSpecificationsFrom {
  specifications: IProductSpecificationForm[];
}

export interface IProductSpecificationWithCategory {
  id: number;
  uuid: string;
  name: string;
  is_active: boolean;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  specifications: ISpecification[];
}

export interface ISpecification {
  id: number;
  uuid: string;
  name: string;
  description: null;
  sorting_order: number;
  specification_category_id: number;
  is_active: boolean;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
}
