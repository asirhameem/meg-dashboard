import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: "same-origin",
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.token;
    headers.set("Content-Type", "application/json");
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
    if (result?.error?.status === 401) {
      toast.error(result?.error?.data?.error);
    }
    return result;
  },
  tagTypes: [],
  endpoints: () => ({}),
});
