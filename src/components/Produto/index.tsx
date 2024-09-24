import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { Produto as ProdutoType } from '../../App'
import { addToCart, setFavorite } from '../../store/reducers/slice'
import { selectIsFavorite, selectIsInCart } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store/store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const adicionar = () => dispatch(addToCart(produto))
  const favoritar = () => dispatch(setFavorite(produto.id))
  const isFavorite = useSelector((state: RootReducer) =>
    selectIsFavorite(state.carrinho.favorites, produto.id)
  )
  const noCarrinho = useSelector((state: RootReducer) =>
    selectIsInCart(state.carrinho.itemsToBuy, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favoritar} type="button">
        {isFavorite ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionar} type="button">
        {noCarrinho ? '- Remover do Carrinho' : '+ Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
