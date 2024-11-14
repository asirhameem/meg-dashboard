import { apiSlice } from './../api/apiSlice';

const BASE_PATH = '/platform-configuration';

export const configurationApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllConfigurations: builder.query({
      query: ({ section }: { section: string }) => ({
        url: `${BASE_PATH}??section=${section}`,
        method: 'GET'
      }),
      providesTags: ['configurations'],
    }),
    getConfigurationsByName: builder.query({
      query: ({ name }: { name: string }) => ({
        url: `${BASE_PATH}/name/${name}`,
        method: 'GET'
      }),
      providesTags: ['configurations'],
    }),
  })
});

export const {
  useGetAllConfigurationsQuery,
  useGetConfigurationsByNameQuery,
} = configurationApi;