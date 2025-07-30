import * as S from './styled';

const About = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          SOBRE A DRIP
        </S.Title>

        <S.Card>
          <S.Description>
            A <S.StrongDescription>DRIP </S.StrongDescription> 
            nasceu da paixão pela cultura urbana e pelo street wear autêntico. 
            Somos mais que uma marca - somos um movimento que celebra a individualidade e a 
            expressão pessoal através da moda.
          </S.Description>
          <S.Description>
            Cada peça é cuidadosamente selecionada para representar o que há de mais atual 
            e exclusivo no cenário street wear. Nossa missão é conectar você às tendências mais autênticas da cultura urbana mundial.
          </S.Description>
        </S.Card>

        <S.Card>
          <S.StrongDescription style={{ fontSize: '2.5rem' }}>
            Nossa Localização
          </S.StrongDescription>

          <S.Description>
            Av. Campanella, 2491 - Jardim Cleide
          </S.Description>

          <S.Maps 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.892157932037!2d-46.45802252376075!3d-23.536380860676733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66b90f436c77%3A0x210bc4847e523828!2sAv.%20Campanella%2C%202491%20-%20Jardim%20Cleide%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008220-705!5e0!3m2!1spt-BR!2sbr!4v1753836547333!5m2!1spt-BR!2sbr"  
            loading="lazy"
          />
        </S.Card>
      </S.Wrapper>
    </S.Container>
  )
}

export default About;