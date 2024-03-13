import { formData } from '../../../helper/formData';
import { apiSlice } from '../api/apiSlice';

const BASE_PATH = '/paints';

export const paintsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPaints: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['paints'],
    }),
    createPaint: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        }
      },
      invalidatesTags: ['paints']
    }),
  })
});

export const {
  useGetPaintsQuery,
  useCreatePaintMutation
} = paintsApi;

