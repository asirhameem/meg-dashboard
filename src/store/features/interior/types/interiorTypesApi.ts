import { formData } from '../../../../helper/formData';
import { apiSlice } from '../../api/apiSlice';

const BASE_PATH = '/interior-types';

export const interiorTypes = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getInteriorTypes: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['interiorTypes'],
      transformResponse: (response: { data: Array<{ id: number, name: string }> }) => {
        if (response?.data?.length) {
          return response.data.map((type: { id: number, name: string }) => ({
            value: type.id,
            label: type.name,
          }));
        }
        else {
          return [];
        }

      }
    }),
    createInteriorType: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        }
      },
      invalidatesTags: ['interiorTypes']
    }),
  })
});

export const {
  useGetInteriorTypesQuery,
  useCreateInteriorTypeMutation,
} = interiorTypes;


