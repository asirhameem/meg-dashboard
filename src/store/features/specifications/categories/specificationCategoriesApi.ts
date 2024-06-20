import { apiSlice } from './../../api/apiSlice';

const BASE_PATH = '/specifications/categories';

export const specificationCategoriesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSpecificationCategories: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['specificationCategories'],
    }),
    getAllSpecificationCategories: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['specificationCategories'],
      transformResponse: (response: any) => {
        return response.data.map((category: any) => {
          return {
            label: category.name,
            value: category.id
          }
        })
      }
    }),
    createSpecificationCategories: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: data,
        }
      },
      invalidatesTags: ['specificationCategories']
    }),
    updateSpecificationCategories: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `${BASE_PATH}/${id}`,
          method: "PUT",
          body,
        }
      },
      invalidatesTags: ['specificationCategories']
    }),
  })
});

export const {
  useGetSpecificationCategoriesQuery,
  useGetAllSpecificationCategoriesQuery,
  useCreateSpecificationCategoriesMutation,
  useUpdateSpecificationCategoriesMutation
} = specificationCategoriesApi;