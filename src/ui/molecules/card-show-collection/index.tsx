import Formatter from '@/utils/formatter';
import * as S from './styled';
import Button from '@/ui/atoms/button';

interface Props {
  name: string;
  description?: string;
  price?: number;
  pictures: string[];
  isHide: boolean;
}

const CardShowCollection = ({
  name,
  description,
  price,
  pictures,
  isHide
}: Props) => {
  return (
    <S.Container>
      {isHide && (
        <S.Overlay>
          <S.SoldOutLabel>
            Esgotado
          </S.SoldOutLabel>
        </S.Overlay>
      )}
      <S.WrapperImage />
      <S.WrapperDetails>
        <S.NameDetails>{name}</S.NameDetails>
        <S.DescriptionDetails>{description}</S.DescriptionDetails>

        <S.MoreDetails>
          <S.PriceDetails>
            {Formatter.Money(price)}
          </S.PriceDetails>

          <Button 
            label='Ver Detalhes'
            variant='primary'
            onClick={() => {}}
          />
        </S.MoreDetails>
      </S.WrapperDetails>
    </S.Container>
  );
}

export default CardShowCollection;