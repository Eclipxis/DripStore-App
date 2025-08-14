import Checkbox from '@mui/material/Checkbox'
import * as S from './styled'
import { useModals } from '@/ui/context/modals/context'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/ui/hooks/use-click-outside'
import { Category } from '@/entities/category'

type TCategoriesFilter = { label: string, category: Category }

interface Props {
  position: { top: string, left: string }
}

const Categories: TCategoriesFilter[] = [
  {
    label: 'Moletom',
    category: Category.HOODIES
  },
  {
    label: 'Camiseta',
    category: Category.TSHIRTS
  },
  {
    label: 'Shorts',
    category: Category.SHORTS
  },
  {
    label: 'Calças',
    category: Category.PANTS
  },
  {
    label: 'Conjuntos',
    category: Category.OUTFITS
  },
  {
    label: 'Regata',
    category: Category.TANKTOP
  },
  {
    label: 'Outros',
    category: Category.OTHERS
  },
];

const FilterModal = ({ position }: Props) => {
  const { closeAll } = useModals((state) => state);

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const filterRef = useRef<HTMLDivElement>(null);

  const isChecked = (category: Category) => {
    return !!selectedCategories.find(selected => selected === category);
  }

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
      {Categories.map((info, index) => (
        <S.Item 
          key={info.category}
          isLastItem={index === (Categories.length - 1)}
          onClick={() => { setSelectedCategories(old => [...old, info.category]) }}
        >
          <Checkbox size='large' checked={isChecked(info.category)} />
          <S.Text>
            {info.label}
          </S.Text>
        </S.Item>
      ))}
    </S.Container>
  )
}

export default FilterModal