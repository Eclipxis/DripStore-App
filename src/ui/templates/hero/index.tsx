import Button from '@/ui/atoms/button';
import * as S from './styled';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  
  const goToContact = () => {
    const component = document.getElementById('contact');

    if (!component)
      return;

    component.scrollIntoView({ behavior: 'smooth' });
  }

  const goToProducts = () => {
    router.push('products')
  }

  return (
    <S.Container id="hero">
      <S.Wrapper>
        <S.Title
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          DRIP
        </S.Title>
        <S.Subtitle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          Eleve seu estilo com as melhores peças de street wear.<br /> 
          Autenticidade, qualidade e atitude em cada look.
        </S.Subtitle>

        <S.WrapperButtons>
          <Button 
            label='Ver Coleção'
            variant='primary'
            onClick={goToProducts}
            styles={{ 
              width: '100%', 
              height: '4.8rem',
              fontSize: '2rem'
            }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: [0, 0.83, 1, 1.05]
            }}
          />
          
          <Button 
            label='Fale Conosco'
            variant='secondary'
            onClick={goToContact}
            styles={{ 
              width: '100%', 
              height: '4.8rem',
              fontSize: '2rem'
            }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: [0, 0.83, 1, 1.05]
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