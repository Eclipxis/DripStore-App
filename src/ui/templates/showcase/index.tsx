import SettingsButton from '@/ui/atoms/settings-button';
import * as S from './styled';
import Search from '@/ui/molecules/seach';
import CardShowCollection from '@/ui/molecules/card-show-collection';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import CreateProductButton from '@/ui/atoms/create-product-button';

const Showcase = () => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null)

  return (
    <S.Container>
      <SettingsButton />
      <Search wrapperRef={wrapperRef} />

      <S.WrapperProducts ref={wrapperRef}>
        <CreateProductButton />

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