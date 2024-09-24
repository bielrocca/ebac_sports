import { useSelector } from 'react-redux'

import * as S from './styles'
import cesta from '../../assets/cesta.png'

import {
  selectFavouritesQtt,
  selectProductinCart,
  selectTotalValue
} from '../../store/reducers/carrinho'
import { paraReal } from '../Produto'

const Header = () => {
  const valorTotal = useSelector(selectTotalValue)
  const quantidade = useSelector(selectProductinCart)
  const favoritos = useSelector(selectFavouritesQtt)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidade} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
