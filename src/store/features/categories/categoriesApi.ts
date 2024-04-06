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

  })
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
} = categoriesApi;

