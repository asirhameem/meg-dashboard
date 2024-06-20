import { formData } from '../../../helper/formData';
import { apiSlice } from '../api/apiSlice';

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
    getProductBasicBySlug: builder.query({
      query: ({ slug }) => ({
        url: `${BASE_PATH}/${slug}/basic`,
        method: 'GET'
      }),
    }),
    createProduct: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true,
        }
      },
      invalidatesTags: ['products']
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
  useGetProductBasicBySlugQuery,
  useCreateProductMutation,
  useCreateProductSpecificationMutation
} = productsApi;