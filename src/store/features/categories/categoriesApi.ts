import { formData } from '../../../helper/formData';
import { apiSlice } from '../api/apiSlice';

const BASE_PATH = '/categories';

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['categories'],
    }),
    createCategory: builder.mutation({
      query: ({ data }) => {
        console.log(data, 'mutation');
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        }
      },
      invalidatesTags: ['categories']
    }),
    updateCategory: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `${BASE_PATH}/${id}`,
          method: "PUT",
          body: data,
        }
      },
      invalidatesTags: ['categories']
    }),

  })
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} = categoriesApi;

