/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/navigation'
import * as S from './styled'
import Button from '@/ui/atoms/button';
import SelectCategory from '@/ui/molecules/select-category';
import Switch from '@/ui/atoms/switch';
import { useCreateProduct, useHideProduct, useShowProduct, useUpdateProduct } from '@/ui/queries/product';
import useMutableEntity from '@/ui/hooks/use-mutable-entity';
import Product from '@/entities/product';
import { useEffect } from 'react';
import Formatter from '@/utils/formatter';
import Carousel from '@/ui/molecules/carousel';
import SnackBar from '@/ui/molecules/snackbar';

interface Props {
  product?: Product
}

const Workspace = ({ product: givenProduct }: Props) => {
  const router = useRouter();
  const { createProduct, isLoading: createIsLoading, isSuccess: createIsSuccess, error: createError } = useCreateProduct();
  const { updateProduct, isLoading: updateIsLoading, isSuccess: updateIsSuccess, error: updateError } = useUpdateProduct();
  const { hideProduct, isLoading: hideIsLoading, isSuccess: hideIsSuccess, error: hideError } = useHideProduct();
  const { showProduct, isLoading: showIsLoading, isSuccess: showIsSuccess, error: showError } = useShowProduct();

  const product = useMutableEntity(givenProduct ?? new Product());

  const isEdit = () => !!givenProduct;

  const returnToProducts = () => router.push('/products');
  const returnToProduct = () => router.push(`/product/${givenProduct!.id}`);

  const submit = () => {
    if (product.isEmpty())
      return;

    if (!isEdit()) {
      createProduct({ product });
      return;
    }

    updateProduct({ product });
  }

  const toggleHide = () => {
    product.toggleHide()

    if (product.hide) {
      hideProduct({ productId: product.id })
      return;
    }

    showProduct({ productId: product.id })
  }

  useEffect(() => {
    if (!createIsSuccess)
      return;

    returnToProducts();
  }, [createIsSuccess])

  useEffect(() => {
    if (!updateIsSuccess)
      return;

    returnToProduct();
  }, [updateIsSuccess])

  return (
    <>
      {!!createError && (
        <SnackBar
          feedback='ERROR'
          message={`Ocorreu um erro ao criar: ${createError?.message}`}
        />
      )}

      {!!updateError && (
        <SnackBar
          feedback='ERROR'
          message={`Ocorreu um erro ao atualizar: ${updateError?.message}`}
        />
      )}

      {!!hideError && (
        <SnackBar
          feedback='ERROR'
          message={`Ocorreu um erro ao atualizar: ${hideError?.message}`}
        />
      )}

      {!!showError && (
        <SnackBar
          feedback='ERROR'
          message={`Ocorreu um erro ao atualizar: ${showError?.message}`}
        />
      )}

      {(!!hideIsLoading || !!showIsLoading) && (
        <SnackBar
          feedback='LOADING'
          message='Atualizando...'
        />
      )}

      {!!hideIsSuccess && (
        <SnackBar
          feedback='SUCCESS'
          message='Estoque atualizado com sucesso!'
        />
      )}

      {!!showIsSuccess && (
        <SnackBar
          feedback='SUCCESS'
          message='Estoque atualizado com sucesso!'
        />
      )}

      <S.Container>
        <S.ReturnButton 
          size={25}
          onClick={() => {
            if (!givenProduct) {
              returnToProducts();
              return;
            }

            returnToProduct();
          }} 
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
              {isEdit() && <Switch value={product.hide} onClick={toggleHide} />}
            </S.WrapperSelectAndSwitch>

            <S.ButtonWrapper>
              <Button 
                label={!isEdit() ? 'Criar produto' : 'Editar produto'}
                isLoading={createIsLoading || updateIsLoading}
                variant='secondary'
                onClick={submit}
              />
            </S.ButtonWrapper>
          </S.WrapperInputs>
        </S.Content>
      </S.Container>
    </>
  )
}

export default Workspace;