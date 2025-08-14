import Carousel from '@/ui/molecules/carousel';
import Formatter from '@/utils/formatter';
import * as S from './styled'
import Button from '@/ui/atoms/button';
import { useRouter } from 'next/navigation';
import Product from '@/entities/product';
import { Category } from '@/entities/category';

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
  
  return (
    <S.Container>
      <S.ReturnButton 
        size={25}
        onClick={() => { router.push('/products') }} 
        color='#0d0d0d' 
      />
      
      <S.Content>
        <S.WrapperCarousel>
          <Carousel images={product.pictures} />
        </S.WrapperCarousel>

        <S.WrapperInfo>
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