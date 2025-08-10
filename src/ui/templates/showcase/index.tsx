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

const Showcase = () => {
  const { modals } = useModals((state) => state);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [session, setSession] = useState<Session | null>(null);

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

        <CardShowCollection
            name='Hoodie Oversized'
            description='Moletom oversized premium com estampa exclusiva'
            price={189.90}
            pictures={[]}
            isHide
            onClick={() => {}}
          />

          <CardShowCollection
            name='Calça Baggy'
            description='Calça jeans baggy com lavagem especial e cortes únicos'
            pictures={[]}
            isHide={false}
            onClick={() => { router.push('/product/123')  }}
          />

          <CardShowCollection
            name='Boné Snapback'
            description='Boné snapback bordado com logo exclusivo da marca'
            price={79.90}
            pictures={[]}
            isHide={false}
            onClick={() => {}}
          />

          <CardShowCollection
            name='Camiseta Graphic'
            price={89.90}
            pictures={[]}
            isHide={false}
            onClick={() => {}}
          />
      </S.WrapperProducts>
    </S.Container>
  )
}

export default Showcase;