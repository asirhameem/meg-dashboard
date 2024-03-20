import { formData } from "../../../helper/formData";
import { apiSlice } from "../api/apiSlice";

const BASE_PATH = "/quotations";

export const quotationsApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getQuotations: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: "GET"
      }),
      providesTags: ["quotations"]
    }),
    createQuotation: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        };
      },
      invalidatesTags: ["quotations"]
    })
  })
});

export const {
  useGetQuotationsQuery,
  useCreateQuotationMutation
} = quotationsApi;