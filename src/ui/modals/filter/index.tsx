import Checkbox from '@mui/material/Checkbox'
import * as S from './styled'
import { useModals } from '@/ui/context/modals/context'
import { useRef } from 'react'
import { useClickOutside } from '@/ui/hooks/use-click-outside'

interface Props {
  position: { top: string, left: string }
}

const FilterModal = ({ position }: Props) => {
  const { closeAll } = useModals((state) => state);

  const filterRef = useRef<HTMLDivElement>(null);

  useClickOutside(filterRef, closeAll);

  return (
    <S.Container 
      ref={filterRef}
      top={position.top} 
      left={position.left}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <S.Item isLastItem={false}>
        <Checkbox size='large' />
        <S.Text>
          Qualquer coisa
        </S.Text>
      </S.Item>
      <S.Item isLastItem={false}>
        <Checkbox size='large' />
        <S.Text>
          Qualquer coisa
        </S.Text>
      </S.Item>
      <S.Item isLastItem={false}>
        <Checkbox size='large' />
        <S.Text>
          Qualquer coisa
        </S.Text>
      </S.Item>
      <S.Item isLastItem={false}>
        <Checkbox size='large' />
        <S.Text>
          Qualquer coisa
        </S.Text>
      </S.Item>
      <S.Item isLastItem={false}>
        <Checkbox size='large' />
        <S.Text>
          Qualquer coisa
        </S.Text>
      </S.Item>
      <S.Item isLastItem>
        <Checkbox size='large' />
        <S.Text>
          Qualquer coisa
        </S.Text>
      </S.Item>
    </S.Container>
  )
}

export default FilterModal