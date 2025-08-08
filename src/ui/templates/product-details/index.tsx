// import Carousel from '@/ui/molecules/carousel';
import Formatter from '@/utils/formatter';
import * as S from './styled'
import Button from '@/ui/atoms/button';
import { useRouter } from 'next/navigation';

const ProductDetails = () => {
  const router = useRouter();
  
  return (
    <S.Container>
      <S.ReturnButton 
        size={25}
        onClick={() => { router.push('/products') }} 
        color='#0d0d0d' 
      />
      
      <S.Content>
        <S.WrapperCarousel>
          {/* <Carousel images={[]} /> */}
        </S.WrapperCarousel>

        <S.WrapperInfo>
          <S.WrapperProductTexts>
            <S.ProductName>Camiseta Blunt</S.ProductName>
            <S.ProductDescription>
              Camiseta tamanho G preta manga longa
            </S.ProductDescription>
          </S.WrapperProductTexts>

          <S.WrapperCategoryAndPrice>
            <div>
              <S.ProductCategoryStrong>Categoria: </S.ProductCategoryStrong>
              <S.ProductCategory>Camiseta</S.ProductCategory>
            </div>

            <div className='price-and-contact'>
              <S.ProductPrice>{Formatter.Money(80.99)}</S.ProductPrice>
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