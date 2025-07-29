import Button from '@/ui/atoms/button';
import * as S from './styled';

const Hero = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>DRIP</S.Title>
        <S.Subtitle>
          Eleve seu estilo com as melhores peças de street wear. Autenticidade, qualidade e atitude em cada look.
        </S.Subtitle>

        <S.WrapperButtons>
          <Button 
            label='Ver Coleção'
            variant='primary'
            onClick={() => {}}
            styles={{ 
              width: '100%', 
              height: '4.8rem',
              fontSize: '2rem'
            }}
          />
          
          <Button 
            label='Fale Conosco'
            variant='secondary'
            onClick={() => {}}
            styles={{ 
              width: '100%', 
              height: '4.8rem',
              fontSize: '2rem'
            }}
          />
        </S.WrapperButtons>

        <S.ScrollAnimation
          animate={{ y: [0, -30, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      </S.Wrapper>
    </S.Container>
  )
}

export default Hero;