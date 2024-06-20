import { Children } from 'react';
import { apiSlice } from './../api/apiSlice';

const BASE_PATH = '/specifications';

export const specificationApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllSpecifications: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['specifications'],
      transformResponse: (response: any) => {
        return response.data.map((spec: any) => {
          return {
            label: spec.name,
            value: spec.id
          }
        })
      }
    }),
    getAllSpecificationWithCategories: builder.query({
      query: () => ({
        url: `${BASE_PATH}/with-categories`,
        method: 'GET'
      }),
      providesTags: ['specifications'],
      transformResponse: (response: any) => {
        return response.data.map((spec: any) => {
          return {
            label: spec.name,
            value: spec.id,
            children: spec.specifications.map((child: any) => {
              return {
                label: child.name,
                value: child.id
              }
            })
          }
        })
      }
    }),
    getSpecifications: builder.query({
      query: () => ({
        url: `${BASE_PATH}`,
        method: 'GET'
      }),
      providesTags: ['specifications'],
    }),
    createSpecification: builder.mutation({
      query: (body) => {
        return {
          url: `${BASE_PATH}`,
          method: "POST",
          body,
        }
      },
      invalidatesTags: ['specifications']
    }),
  })
});

export const {
  useGetAllSpecificationsQuery,
  useGetAllSpecificationWithCategoriesQuery,
  useGetSpecificationsQuery,
  useCreateSpecificationMutation
} = specificationApi;