import { apiSlice } from '../api/apiSlice';

const BASE_PATH = '/interiors';

export const interiorApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getInteriorsByProductId: builder.query({
      query: ({ productId }: { productId: number }) => ({
        url: `${BASE_PATH}/products/${productId}`,
        method: 'GET'
      }),
      providesTags: ['product-interiors'],
    }),
  })
});

export const {
  useGetInteriorsByProductIdQuery
} = interiorApi;