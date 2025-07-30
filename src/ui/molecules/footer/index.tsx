import * as S from './styled';

const Footer = () => {
  return (
    <S.Container>
      <S.LogoTitle>DRIP</S.LogoTitle>
      <S.LogoSubtitle>
        Elevando o street wear da<br/>
        zona leste com estilo.
      </S.LogoSubtitle>

      <S.WrapperCopyright>
        <S.LogoSubtitle>
          © 2025 DRIP<br/>
          Store
        </S.LogoSubtitle>

        <S.LogoSubtitle>
          .
        </S.LogoSubtitle>

        <S.LogoSubtitle>
          Todos os direitos<br/>
          reservados
        </S.LogoSubtitle>
      </S.WrapperCopyright>
    </S.Container>
  )
}

export default Footer;