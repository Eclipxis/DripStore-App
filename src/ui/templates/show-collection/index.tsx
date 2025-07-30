import CardShowCollection from '@/ui/molecules/card-show-collection';
import * as S from './styled';
import Button from '@/ui/atoms/button';

const ShowCollection = () => {
  return (
    <S.Container>
      <S.WrapperItems>
        <S.WrapperTexts>
          <S.Title>NOSSA COLEÇÃO</S.Title>
          <S.Subtitle>
            Peças exclusivas que definem o street wear autêntico. 
            Cada item é cuidadosamente selecionado para expressar sua personalidade única.
          </S.Subtitle>
        </S.WrapperTexts>

        <CardShowCollection
          name='Hoodie Oversized'
          description='Moletom oversized premium com estampa exclusiva'
          price={189.90}
          pictures={[]}
          isHide={false}
        />

        <CardShowCollection
          name='Calça Baggy'
          description='Calça jeans baggy com lavagem especial e cortes únicos'
          pictures={[]}
          isHide={false}
        />

        <CardShowCollection
          name='Boné Snapback'
          description='Boné snapback bordado com logo exclusivo da marca'
          price={79.90}
          pictures={[]}
          isHide={false}
        />

        <CardShowCollection
          name='Camiseta Graphic'
          price={89.90}
          pictures={[]}
          isHide={false}
        />

        <Button 
          label='Ver mais peças'
          variant='secondary'
          onClick={() => {}}
          styles={{ fontSize: '2rem', fontWeight: 700 }}
        />
      </S.WrapperItems>
    </S.Container>
  );
}

export default ShowCollection;