import { formData } from './../../../helper/formData';
import { apiSlice } from './../api/apiSlice';

const BASE_PATH = '/products';

export const productsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['products'],
    }),
    createProduct: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        }
      },
    }),
    createProductSpecification: builder.mutation({
      query: ({ data }) => ({
        url: `${BASE_PATH}/specifications`,
        method: "POST",
        body: data
      }),
    }),
  })
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useCreateProductSpecificationMutation
} = productsApi;