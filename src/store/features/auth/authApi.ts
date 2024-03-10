import { apiSlice } from "../api/apiSlice";
import { clearAuth, setAuth } from "./authSlice";

const BASE_PATH = "/auth";

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: `${BASE_PATH}/login`,
        method: "POST",
        body,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result.data.success) {
            localStorage.setItem("auth", JSON.stringify(result.data));
            dispatch(setAuth(result.data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    logout: builder.query({
      query: () => ({
        url: `${BASE_PATH}/logout`,
        method: "GET",
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result.data.success) {
            localStorage.removeItem("auth");
            dispatch(clearAuth());
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLazyLogoutQuery } = authApi;
