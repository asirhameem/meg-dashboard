export interface IOrder {
  id: number;
  uuid: string;
  order_number: string;
  customer_id: string;
  total_amount: string;
  order_status: string;
  payment_status: string;
  phone_number: null;
  shipping_address: null;
  shipping_method: string;
  order_type: string;
  deleted_at: null;
  created_at: string;
  updated_at: Date;
  payments: IOrderPayment[];
  items: IOrderItem[];
  customer: IOrderCustomer;
}

export interface IOrderCustomer {
  id: number;
  uuid: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: null;
}

export interface IOrderItem {
  id: number;
  uuid: string;
  order_id: string;
  product_id: string;
  product_paint_id: string;
  product_wheel_id: string;
  product_interior_color_id: string;
  quantity: string;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  product: Product;
}

export interface Product {
  id: number;
  uuid: string;
  model: string;
  title: string;
  description: string;
  slug: string;
  sorting_order: number;
  thumbnail: string;
  marketing_content_type: string;
  marketing_content: string;
  video_content: string;
  production_cost: number;
  selling_cost: number;
  booking_cost: number;
  is_marketed: boolean;
  is_active: boolean;
  category_id: number;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  paint: InteriorColor;
  wheel: InteriorColor;
  interior_color: InteriorColor;
  image: null;
}

export interface InteriorColor {
  id: number;
  uuid: string;
  name: string;
  hex?: string;
  image: string;
  is_active: boolean;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  rgb?: string;
  description?: null;
}

export interface IOrderPayment {
  id: number;
  uuid: string;
  payment_number: string;
  order_id: string;
  order_number: string;
  customer_id: string;
  amount: string;
  bank_name: string;
  branch_name: string;
  bank_account_number: string;
  bank_account_name: string;
  transaction_id: string;
  payment_method: string;
  payment_status: string;
  payment_date: Date;
  deleted_at: null;
  created_at: string;
  updated_at: Date;
}
