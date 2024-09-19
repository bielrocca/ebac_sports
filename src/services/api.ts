import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getStore: builder.query<Produto[], void>({
      query: () => 'ebac_store'
    })
  })
})

export const { useGetStoreQuery } = api

export default api
