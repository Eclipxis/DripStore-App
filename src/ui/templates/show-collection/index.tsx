import CardShowCollection from '@/ui/molecules/card-show-collection';
import * as S from './styled';
import Button from '@/ui/atoms/button';
import { useRouter } from 'next/router';
import { useGetProducts } from '@/ui/queries/product';
import FeedBackProductsNotFound from '@/ui/molecules/feedbacks/products-not-found';
import { CircularProgress } from '@mui/material';

const ShowCollection = () => {
  const router = useRouter();

  const { products, isLoading } = useGetProducts({ page: 1, perPage: 4 })

  const goToProducts = (id?: string) => {
    if (!id) {
      router.push('products');
      return;
    }

    router.push(`product/${id}`)
  }
  
  return (
    <S.Container id="products">
      <S.WrapperItems>
        <S.WrapperTexts>
          <S.Title>NOSSA COLEÇÃO</S.Title>
          <S.Subtitle>
            Peças que definem o street wear autêntico. 
            Cada item é cuidadosamente selecionado para expressar sua personalidade única.
          </S.Subtitle>
        </S.WrapperTexts>

        <S.WrapperProducts>
          {!products?.data.length && isLoading && <CircularProgress size={40} color='secondary' />}

          {!products?.data.length && !isLoading && <FeedBackProductsNotFound />}

          {(products?.data ?? []).map((product) => (
            <CardShowCollection
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              pictures={product.pictures}
              isHide={product.hide}
              onClick={() => { goToProducts(product.id) }}
            />
          ))}
        </S.WrapperProducts>

        <Button 
          label='Ver mais peças'
          variant='secondary'
          onClick={() => { goToProducts() }}
          styles={{ 
            fontSize: '2rem', 
            fontWeight: 700,
            width: '100%',
            maxWidth: '34rem'
          }}
        />
      </S.WrapperItems>
    </S.Container>
  );
}

export default ShowCollection;