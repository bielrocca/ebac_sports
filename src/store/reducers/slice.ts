import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto as ProductType } from '../../App'

type CarrinhoType = {
  itemsToBuy: ProductType[]
  favorites: number[] // guarda ids dos produtos
}

const initialState: CarrinhoType = {
  itemsToBuy: [],
  favorites: []
}

const carrinhoSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (state.itemsToBuy.find((item) => item.id === action.payload.id)) {
        state.itemsToBuy = state.itemsToBuy.filter(
          (item) => item.id !== action.payload.id
        )
        console.log(`RMV: [ ${action.payload.nome} ]`)
      } else {
        state.itemsToBuy = [...state.itemsToBuy, action.payload]
        console.log(`ADD: [ ${action.payload.nome} ]`)
      }
    },
    setFavorite: (state, action: PayloadAction<number>) => {
      console.log(`favoritar: ${action.payload}`)
      if (state.favorites.includes(action.payload))
        state.favorites = state.favorites.filter((id) => id !== action.payload)
      else state.favorites = [...state.favorites, action.payload]
      console.log(`Lista: ${state.favorites}`)
    }
  }
})
export const { addToCart, setFavorite } = carrinhoSlice.actions
export default carrinhoSlice.reducer
