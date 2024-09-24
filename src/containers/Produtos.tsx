import Produto from '../components/Produto'
import { useGetStoreQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetStoreQuery()

  {
    if (isLoading)
      return (
        <S.Loading>
          <h1> &lsaquo; Carregando &rsaquo;</h1>
        </S.Loading>
      )
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
