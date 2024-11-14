export interface IQuotation {
  uuid: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  designation: string;
  product_id: number;
  product_wheel_id: number;
  product_paint_id: number;
  product_interior_color_id: number;
  quantity: number;
  status: 'pending' | 'sent' | 'rejected';
}
