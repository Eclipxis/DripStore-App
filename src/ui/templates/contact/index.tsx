import Button from '@/ui/atoms/button';
import * as S from './styled';

const Contact = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/drip_street_wear?utm_source=ig_web_button_share_sheet&igsh=NmRiam4waHo2eXky', '_blank');
  }

  const redirectToEmail = () => {
    window.location.href = 'mailto:dripstreetwearstore@gmail.com';
  }

  return (
    <S.Container id="contact">
      <S.Wrapper>
        <S.WrapperTexts>
          <S.Title>
            ENTRE EM CONTATO
          </S.Title>

          <S.Subtitle>
            Pronto para elevar seu style? Entre <br/> 
            em contato conosco e descubra as peças perfeitas para o seu guarda-roupa.
          </S.Subtitle>
        </S.WrapperTexts>

        <S.WrapperCards>
          <S.Card>
            <S.Icon icon='whatsapp' />
            
            <S.CardTitle>
              Whatsapp
            </S.CardTitle>
            <S.CardSubtitle>
              Atendimento rápido e personalizado
            </S.CardSubtitle>

            <Button 
              label='Chamar no Whatsapp'
              variant='primary'
              onClick={() => {}}
            />
          </S.Card>

          <S.Card>
            <S.Icon icon='instagram' />
            
            <S.CardTitle>
              Instagram
            </S.CardTitle>
            <S.CardSubtitle>
              Acompanhe nossos lançamentos
            </S.CardSubtitle>

            <Button 
              label='Seguir no Instagram'
              variant='secondary'
              onClick={redirectToInstagram}
              styles={{ fontSize: '1.4rem' }}
            />
          </S.Card>

          <S.Card>
            <S.Icon icon='email' />
            
            <S.CardTitle>
              E-mail
            </S.CardTitle>
            <S.CardSubtitle>
              Para parcerias e dúvidas
            </S.CardSubtitle>

            <Button 
              label='Enviar E-mail'
              variant='secondary'
              onClick={redirectToEmail}
              styles={{ fontSize: '1.4rem' }}
            />
          </S.Card>
        </S.WrapperCards>

        <S.Card>
          <S.CardTitle style={{ fontSize: '2.4rem', textAlign: 'center', paddingBottom: '1.6rem' }}>
            Horário de <br/>
            Atendimento
          </S.CardTitle>
          
          <S.CardSubtitle style={{ fontSize: '1.6rem', textAlign: 'center' }}>
            Segunda a Sábado:<br/> 
            9h às 18h
          </S.CardSubtitle>
        </S.Card>
      </S.Wrapper>
    </S.Container>
  );
}

export default Contact;