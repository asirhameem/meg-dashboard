import { apiSlice } from '../../api/apiSlice';

const BASE_PATH = '/products/specifications';

export const productSpecificationApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createProductSpecification: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: data,
        }
      },
    }),
  })
});

export const {
  useCreateProductSpecificationMutation,
} = productSpecificationApi;