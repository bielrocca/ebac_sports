import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type ProdutoState = {
  favoritos: Produto[]
}

const initialState: ProdutoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar(state, action: PayloadAction<Produto>) {
      const itemJaExiste = state.favoritos.find(
        (item) => item.id === action.payload.id
      )

      if (itemJaExiste) {
        return
      }

      state.favoritos.push(action.payload)
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
