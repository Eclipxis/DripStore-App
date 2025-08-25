import Button from '@/ui/atoms/button';
import * as S from './styled'
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Página não encontrada</S.Title>
        <S.Subtitle>Acho que essa página não existe :(</S.Subtitle>

        <Button 
          label='Voltar'
          variant='secondary'
          onClick={() => { router.push('/') }}
          styles={{ marginTop: '2rem' }}
        />
      </S.Wrapper>
    </S.Container>
  )
}

export default NotFoundPage;