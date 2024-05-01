import { formData } from '../../../helper/formData';
import { apiSlice } from "../api/apiSlice"

const BASE_PATH = '/contact-us';

export const contactUsAPI = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getContactUsRequests: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['contactUs'],
    }),
    createContactRequest: builder.mutation({
      query: ({ data }) => {
        console.log(data, 'mutation');
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        }
      },
      invalidatesTags: ['contactUs']
    }),

  })
});

export const {
  useGetContactUsRequestsQuery,
  useCreateContactRequestMutation,
} = contactUsAPI;

