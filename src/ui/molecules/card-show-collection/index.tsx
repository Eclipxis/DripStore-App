import Formatter from '@/utils/formatter';
import * as S from './styled';
import Button from '@/ui/atoms/button';
import Carousel from '../carousel';

interface Props {
  name: string;
  description?: string;
  price?: number;
  pictures: string[];
  isHide: boolean;
  onClick: () => void;
}

const CardShowCollection = ({
  name,
  description,
  price,
  pictures,
  isHide,
  onClick
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

      <S.WrapperImage>
        <Carousel 
          images={pictures}
        />
      </S.WrapperImage>
      <S.WrapperDetails>
        <S.NameDetails>{name}</S.NameDetails>
        <S.DescriptionDetails>{description}</S.DescriptionDetails>

        <S.MoreDetails>
          <S.PriceDetails>
            {Formatter.FormatCurrency(price)}
          </S.PriceDetails>

          <Button 
            label='Ver Detalhes'
            variant='primary'
            onClick={onClick}
          />
        </S.MoreDetails>
      </S.WrapperDetails>
    </S.Container>
  );
}

export default CardShowCollection;