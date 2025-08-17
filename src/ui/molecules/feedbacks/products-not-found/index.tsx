import { FiXCircle } from 'react-icons/fi';
import * as S from './styled';

interface Props {
  darkmode?: boolean
}

const FeedBackProductsNotFound = ({ darkmode = false }: Props) => {
  return (
    <S.WrapperFeedback darkmode={darkmode}>
      <FiXCircle size={50} color={darkmode ? '#0d0d0d' : '#dbdbdb'} />
      <S.FeedbackText>
        Nenhum produto foi<br/>
        encontrado
      </S.FeedbackText>
    </S.WrapperFeedback>
  )
}

export default FeedBackProductsNotFound;