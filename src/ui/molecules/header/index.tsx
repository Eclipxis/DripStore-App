import Button from '@/ui/atoms/button'
import * as S from './styled'

const Header = () => {
  const scrollToSection = (id: string) => {
    const component = document.getElementById(id);

    if (!component)
      return;

    component.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <S.Container>
      <S.Heading>DRIP</S.Heading>

      <S.WrapperItems>
        <Button 
          label='Início'
          variant='ghost'
          onClick={() => { scrollToSection('hero') }}
          styles={{ fontSize: '1.6rem' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
        />
        <Button 
          label='Produtos'
          variant='ghost'
          onClick={() => { scrollToSection('products') }}
          styles={{ fontSize: '1.6rem' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
        />
        <Button 
          label='Sobre'
          variant='ghost'
          onClick={() => { scrollToSection('about') }}
          styles={{ fontSize: '1.6rem' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
        />
      </S.WrapperItems>

      <Button 
        label='Entre em Contato'
        variant='primary'
        onClick={() => { scrollToSection('contact') }}
        styles={{ fontWeight: 600 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      />
    </S.Container>
  )
}

export default Header