import CardShowCollection from '@/ui/molecules/card-show-collection';
import * as S from './styled';
import Button from '@/ui/atoms/button';

const ShowCollection = () => {
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
          <CardShowCollection
            name='Hoodie Oversized'
            description='Moletom oversized premium com estampa exclusiva'
            price={189.90}
            pictures={[]}
            isHide
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
        </S.WrapperProducts>

        <Button 
          label='Ver mais peças'
          variant='secondary'
          onClick={() => {}}
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