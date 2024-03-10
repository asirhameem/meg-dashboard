export type ProductList = {
  model: string;
  title: string;
  is_active: boolean;
}

export type ProductFormFields = "model" | "title" | "description" | "production_cost" | "selling_cost" | "booking_cost" | "sorting_order" | "thumbnail_file" | "marketing_content_type" | "marketing_content_file" | "is_marketed" | "is_active" | "category_id"