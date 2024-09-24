import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import produtos from './reducers/slice'

const store = configureStore({
  reducer: {
    carrinho: produtos,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
