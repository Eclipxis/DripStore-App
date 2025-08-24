import Formatter from '@/utils/formatter';
import * as S from './styled';
import Button from '@/ui/atoms/button';
import Carousel from '../carousel';
import { ForwardedRef, forwardRef } from 'react';
import SessionUtils from '@/utils/session';

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
}: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <S.Container ref={ref}>
      {isHide && (
        <S.Overlay>
          <S.SoldOutLabel>
            Esgotado
          </S.SoldOutLabel>
        </S.Overlay>
      )}

      <S.WrapperImage>
        <Carousel images={pictures}/>
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
            styles={{ zIndex: SessionUtils.isLogged() ? '2' : '1' }}
          />
        </S.MoreDetails>
      </S.WrapperDetails>
    </S.Container>
  );
}

export default forwardRef(CardShowCollection);