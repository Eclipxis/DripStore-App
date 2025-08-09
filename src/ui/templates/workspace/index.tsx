import { useRouter } from 'next/navigation'
import { BiBookAdd } from 'react-icons/bi';
import * as S from './styled'
import Button from '@/ui/atoms/button';
import SelectComponent from '@/ui/molecules/select';
import Switch from '@/ui/atoms/switch';

const Workspace = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.ReturnButton 
        size={25}
        onClick={() => { router.push('/products') }} 
        color='#0d0d0d' 
      />

      <S.Content>
        <S.WrapperCarousel>
          <BiBookAdd size={100} color='#239cddff' />
          <S.TitleImages>Adicionar imagens</S.TitleImages>
        </S.WrapperCarousel>

        <S.WrapperInputs>
          <S.Input placeholder='Nome do produto' />
          <S.TextArea placeholder='Descrição do produto...' />
        
          <S.Input placeholder='Preço - R$ 00,00' />

          <S.WrapperSelectAndSwitch>
            <SelectComponent />
            <Switch />
          </S.WrapperSelectAndSwitch>

          <S.ButtonWrapper>
            <Button 
              label='Criar produto'
              variant='secondary'
              onClick={() => {}}
            />
          </S.ButtonWrapper>
        </S.WrapperInputs>
      </S.Content>
    </S.Container>
  )
}

export default Workspace;