export type TApiResponse<T> = {
  status: 200 | 201 | 400 | 401 | 403 | 404 | 500;
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: {
    [key: string]: string[];
  }
}