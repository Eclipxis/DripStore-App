import Button from '@/ui/atoms/button'
import * as S from './styled'

const Header = () => {
  return (
    <S.Container>
      <S.Heading>DRIP</S.Heading>
      <Button 
        label='Entre em Contato'
        variant='primary'
        onClick={() => {}}
        styles={{ fontWeight: 600 }}
      />
    </S.Container>
  )
}

export default Header