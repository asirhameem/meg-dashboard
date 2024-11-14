import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { clearAuth } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: "same-origin",
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.token;
    headers.set("Accept", "application/json");
    if (token) {
      headers.set("Authorization", `bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result?.data?.status === 201 && result?.data?.success) {
      toast.success(result?.data?.message);
    }

    if (result?.data?.status === 200 && (result?.meta?.request?.method === "PUT" || result?.meta?.request?.method === "DELETE")) {
      toast.success(result?.data?.message);
    }


    if (result?.error?.status === 405) {
      toast.error("Method not allowed")
    }

    if (result?.error?.status === 500) {
      toast.error(result?.error?.data?.message || result?.error?.data?.error);
    }

    if (result?.error?.status === 401) {
      toast.error(result?.error?.data?.message);
      localStorage.removeItem("auth");
      api.dispatch(clearAuth());
    }
    return result;
  },
  tagTypes: [
    'quotations',
    'products',
    'specificationCategories',
    'specifications',
    'paints',
    'categories',
    'interiorTypes',
    'features',
    'interiors',
    'product-interiors',
    'configurations',
  ],
  endpoints: () => ({}),
});
