import * as S from './styled'

interface Props {
  value: boolean
  onClick: () => void
}

const Switch = ({ value, onClick }: Props) => {
  return (
    <S.Container>
      <S.IOSSwitch value={value} onClick={onClick} />
      <S.Text>Produto esgotado</S.Text>
    </S.Container>
  )
}

export default Switch;