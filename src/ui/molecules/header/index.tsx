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
        />
        <Button 
          label='Produtos'
          variant='ghost'
          onClick={() => { scrollToSection('products') }}
          styles={{ fontSize: '1.6rem' }}
        />
        <Button 
          label='Sobre'
          variant='ghost'
          onClick={() => { scrollToSection('about') }}
          styles={{ fontSize: '1.6rem' }}
        />
        <Button 
          label='Contato'
          variant='ghost'
          onClick={() => { scrollToSection('contact') }}
          styles={{ fontSize: '1.6rem' }}
        />
      </S.WrapperItems>

      <Button 
        label='Entre em Contato'
        variant='primary'
        onClick={() => {}}
        styles={{ fontWeight: 600 }}
      />
    </S.Container>
  )
}

export default Header