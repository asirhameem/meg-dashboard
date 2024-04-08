export type ApiResponse = {
  status: number,
  success: boolean,
  message: string,
  data: Array<object> | object
}