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
            name: category.name,
            id: category.id
          }
        })
      }
    }),
    createSpecificationCategories: builder.mutation({
      query: (body) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
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
  useCreateSpecificationCategoriesMutation
} = specificationCategoriesApi;