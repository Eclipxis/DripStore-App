 
import SettingsButton from '@/ui/atoms/settings-button';
import * as S from './styled';
import Search from '@/ui/molecules/seach';
import CardShowCollection from '@/ui/molecules/card-show-collection';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import CreateProductButton from '@/ui/atoms/create-product-button';
import SessionUtils from '@/utils/session';
import Session from '@/entities/session';
import { useModals } from '@/ui/context/modals/context';
import { useGetProducts } from '@/ui/queries/product';
import { useRequestByScroll } from '@/ui/hooks/use-request-by-scroll';
import { useStore } from '@/ui/context/store';
import FeedBackProductsNotFound from '@/ui/molecules/feedbacks/products-not-found';
import { CircularProgress } from '@mui/material';
import Product from '@/entities/product';

const Showcase = () => {
  const router = useRouter();
  const { search, selectedCategories } = useStore(({ queryContext }) => queryContext);
  const { modals } = useModals((state) => state);

  const [session, setSession] = useState<Session | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { lastElementRef, perPage, updateDuplicates } = useRequestByScroll(5);

  const { products, isLoading } = useGetProducts({ 
    page: 1, 
    perPage, 
    search, 
    categories: selectedCategories
  });

  const [productsData, setProductsData] = useState<Product[]>(products?.data ?? []);

  useMemo(() => {
    const signInIsOpen = modals.some(modal => modal === 'sign-in')

    if (signInIsOpen)
      return;

    const sessionExists = SessionUtils.getSession();

    if (!sessionExists)
      return;

    setSession(sessionExists);
  },
  [modals])

  useEffect(() => {
    if (!products)
      return;

    setProductsData(oldProducts => updateDuplicates([...oldProducts, ...products.data], 'id'))
  }, [products, updateDuplicates])

  useEffect(() => {
    if (!products)
      return;

    setProductsData(products.data)
  }, [products, selectedCategories])

  return (
    <S.Container>
      <SettingsButton />
      <Search wrapperRef={wrapperRef} />

      <S.WrapperProducts ref={wrapperRef}>
        {!productsData.length && isLoading && (
          <S.LoadingContainer>
            <CircularProgress size={60} color='secondary' />
          </S.LoadingContainer>
        )}

        {!!session && !isLoading && <CreateProductButton />}

        {!productsData.length && !isLoading && <FeedBackProductsNotFound darkmode />}

        {(productsData ?? []).map((product, index) => (
          <CardShowCollection
            ref={(node) => { lastElementRef(node, index) }}
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            pictures={product.pictures}
            isHide={product.hide}
            onClick={() => { 
              console.log('product id', product.id)
              router.push(`/product/${product.id}`) 
            }}
          />
        ))}
      </S.WrapperProducts>
    </S.Container>
  )
}

export default Showcase;