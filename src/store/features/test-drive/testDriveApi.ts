import { formData } from "../../../helper/formData";
import { apiSlice } from "../api/apiSlice";

const BASE_PATH = "/test-drive";

export const testDriveAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTestDriveRequests: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: "GET"
      }),
      providesTags: ["testDrive"]
    }),
    createTestDriveRequest: builder.mutation({
      query: ({ data }) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body: formData(data),
          formData: true
        };
      },
      invalidatesTags: ["testDrive"]
    })
  })
});

export const {
  useGetTestDriveRequestsQuery,
  useCreateTestDriveRequestMutation,
} = testDriveAPI;