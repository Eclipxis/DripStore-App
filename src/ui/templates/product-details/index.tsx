/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from '@/ui/molecules/carousel';
import Formatter from '@/utils/formatter';
import * as S from './styled'
import Button from '@/ui/atoms/button';
import { useRouter } from 'next/router';
import Product from '@/entities/product';
import { Category } from '@/entities/category';
import { BiEdit, BiSolidTrash } from 'react-icons/bi';
import SessionUtils from '@/utils/session';
import { useDeleteProduct } from '@/ui/queries/product';
import { useEffect } from 'react';

interface Props {
  product: Product
}

const Categories: Record<Category, string> = {
  HOODIES: 'Moletom',
  OUTFITS: 'Conjuntos',
  PANTS: 'Calças',
  SHORTS: 'Shorts',
  TANKTOP: 'Regatas',
  TSHIRTS: 'Camisetas',
  OTHERS: 'Outros'
}

const ProductDetails = ({ product }: Props) => {
  const router = useRouter();
  const { deleteProduct, isSuccess } = useDeleteProduct();
  
  const goToProducts = () => router.push('/products');
  const goToEdit = () => router.push(`/product/workspace?productid=${product.id}`);

  useEffect(() => {
    if (!isSuccess)
      return;

    goToProducts();
  }, [isSuccess])

  return (
    <S.Container>
      <S.WrapperReturnButton>
        <S.ReturnButton 
          size={25}
          onClick={goToProducts} 
          color='#0d0d0d' 
        />
      </S.WrapperReturnButton>
      
      <S.Content>
        <S.WrapperCarousel>
          <Carousel images={product.pictures} />
        </S.WrapperCarousel>

        <S.WrapperInfo>
          {SessionUtils.isLogged() && (
            <S.DeleteButton>
              <BiSolidTrash
                size={20} 
                color='#ffffff' 
                onClick={() => { deleteProduct({ productId: product.id }) }} 
              />
            </S.DeleteButton>
          )}
          {SessionUtils.isLogged() && (
            <S.UpdateButton>
              <BiEdit 
                size={20} 
                color='#ffffff' 
                onClick={goToEdit} 
              />
            </S.UpdateButton>
          )}

          <S.WrapperProductTexts>
            <S.ProductName>{product.name}</S.ProductName>
            <S.ProductDescription>
              {product.description}
            </S.ProductDescription>
          </S.WrapperProductTexts>

          <S.WrapperCategoryAndPrice>
            <div>
              <S.ProductCategoryStrong>Categoria: </S.ProductCategoryStrong>
              <S.ProductCategory>{Categories[product.category]}</S.ProductCategory>
            </div>

            <div className='price-and-contact'>
              {product.price && (
                <S.ProductPrice>{Formatter.FormatCurrency(product.price)}</S.ProductPrice>
              )}
              <Button 
                label='Entre em contato'
                variant='primary'
                onClick={() => {}}
                styles={{
                  fontSize: '1.8rem',
                  fontWeight: '600'
                }}
              />
            </div>
          </S.WrapperCategoryAndPrice>
        </S.WrapperInfo>
      </S.Content>
    </S.Container>
  )
}

export default ProductDetails;