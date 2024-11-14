import axios, { AxiosResponse } from "axios";
import { AxiosInstance } from "../config/axios";
import { TApiEndPoint } from "../interfaces";
import { TApiResponse } from "../interfaces/api";

export const GetData = async <T>(url: TApiEndPoint[keyof TApiEndPoint]): Promise<TApiResponse<T>> => {
  try {
    const response = await AxiosInstance.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      return {
        status: 500,
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      } as unknown as TApiResponse<T>;
    }
  }
}

export const PostData = async <T>(url: TApiEndPoint[keyof TApiEndPoint], data: T): Promise<AxiosResponse> => {
  const isFormData = data instanceof FormData;
  const response = await AxiosInstance.post(url, data, {
    headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
  });
  return response;
}

export const PutData = async <T>(url: TApiEndPoint[keyof TApiEndPoint], data: T) => {
  try {
    const response = await AxiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export const DeleteData = async (url: TApiEndPoint[keyof TApiEndPoint]) => {
  try {
    const response = await AxiosInstance.delete(url);
    return response.data;
  } catch (error) {
    return error;
  }
}