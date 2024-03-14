import { formData } from '../../../helper/formData';
import { apiSlice } from '../api/apiSlice';

const BASE_PATH = '/features';

export const featuresApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFeatures: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['features'],
    }),
    createFeature: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        }
      },
      invalidatesTags: ['features']
    }),
  })
});

export const {
  useGetFeaturesQuery,
  useCreateFeatureMutation,
} = featuresApi;

