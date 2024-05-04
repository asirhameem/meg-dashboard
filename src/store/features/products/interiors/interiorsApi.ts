import { formData } from '../../../../helper/formData';
import { apiSlice } from '../../api/apiSlice';

const BASE_PATH = '/products/interiors';

export const productsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createInterior: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true,
        }
      },
      invalidatesTags: ['interiors']
    }),
  })
});

export const {
  useCreateInteriorMutation,
} = productsApi;