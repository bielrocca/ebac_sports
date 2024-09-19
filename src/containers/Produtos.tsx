import Produto from '../components/Produto'

import { useGetStoreQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: item, isLoading } = useGetStoreQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {item?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
