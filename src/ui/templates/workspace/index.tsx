/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/navigation'
import * as S from './styled'
import Button from '@/ui/atoms/button';
import SelectCategory from '@/ui/molecules/select-category';
import Switch from '@/ui/atoms/switch';
import { useCreateProduct } from '@/ui/queries/product';
import useMutableEntity from '@/ui/hooks/use-mutable-entity';
import Product from '@/entities/product';
import { useEffect } from 'react';
import Formatter from '@/utils/formatter';
import Carousel from '@/ui/molecules/carousel';

const Workspace = () => {
  const { createProduct, isSuccess } = useCreateProduct();
  const router = useRouter();

  const product = useMutableEntity(new Product());

  const returnToProduct = () => router.push('/products');

  const submit = () => {
    if (product.isEmpty())
      return;

    createProduct({ product });
  }

  useEffect(() => {
    if (!isSuccess)
      return;

    returnToProduct();
  }, [isSuccess])

  return (
    <S.Container>
      <S.ReturnButton 
        size={25}
        onClick={returnToProduct} 
        color='#0d0d0d' 
      />

      <S.Content>
        <S.WrapperCarousel>
          <Carousel
            created
            images={product.pictures}
            onAddImages={(base64s) => {
              product.withPictures(base64s);
            }}
            onRemoveImage={(pictureIndex) => {
              product.removePicture(pictureIndex);
            }}
          />
        </S.WrapperCarousel>

        <S.WrapperInputs>
          <S.Input 
            autoFocus
            placeholder='Nome do produto'
            value={product.name}
            onChange={(evt) => { product.withName(evt.target.value) }}
          />

          <S.TextArea 
            placeholder='Descrição do produto...' 
            value={product.description}
            onChange={(evt) => { product.withDescription(evt.target.value) }}
          />
        
          <S.Input
            placeholder='R$ 0,00'
            value={Formatter.FormatCurrency(product.price)}
            onChange={(evt) => { 
              product.withPrice(Formatter.ParseCurrency(evt.target.value)) 
            }}
          />

          <S.WrapperSelectAndSwitch>
            <SelectCategory product={product} />
            <Switch value={product.hide} onClick={() => { product.toggleHide() }} />
          </S.WrapperSelectAndSwitch>

          <S.ButtonWrapper>
            <Button 
              label='Criar produto'
              variant='secondary'
              onClick={submit}
            />
          </S.ButtonWrapper>
        </S.WrapperInputs>
      </S.Content>
    </S.Container>
  )
}

export default Workspace;