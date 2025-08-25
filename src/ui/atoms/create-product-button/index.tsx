import { BiAddToQueue  } from 'react-icons/bi'
import * as S from './styled'
import { useRouter } from 'next/router'

const CreateProductButton = () => {
  const router = useRouter();

  return (
    <S.Container 
      id='create-product-button'
      onClick={() => { router.push('/product/workspace') }}
    >
      <BiAddToQueue size={100} color='#239cddff' />
      <S.Text>Criar produto</S.Text>
    </S.Container>
  )
}

export default CreateProductButton;