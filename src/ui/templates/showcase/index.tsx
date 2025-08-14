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

const Showcase = () => {
  const router = useRouter();
  const { modals } = useModals((state) => state);

  const [session, setSession] = useState<Session | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { products } = useGetProducts({ page: 1, perPage: 5 });

  const singInIsOpen = useMemo(() => !!modals.find(modal => modal === 'sign-in'), [modals])

  useEffect(() => {
    if (singInIsOpen)
      return;

    const sessionExists = SessionUtils.getSession();

    if (!sessionExists)
      return;

    setSession(sessionExists);
  }, [singInIsOpen]);

  return (
    <S.Container>
      <SettingsButton />
      <Search wrapperRef={wrapperRef} />

      <S.WrapperProducts ref={wrapperRef}>
        {!!session && <CreateProductButton />}

        {(products?.data ?? []).map((product) => (
          <CardShowCollection
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