import { Category } from '@/entities/category';
import Product from '@/entities/product';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type TSelectCategory = {
  label: string,
  category: Category
}

const Categories: TSelectCategory[] = [
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

interface Props {
  product: Product
}

const SelectCategory = ({ product }: Props) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel 
          id="select-category-label" 
          sx={{ fontSize: '1.4rem' }}
        >
          Categoria
        </InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          label="Categoria"
          sx={{ fontSize: '1.4rem' }}
          onChange={(evt) => { product.withCategory(evt.target.value as Category) }}
        >
          {Categories.map(category => (
            <MenuItem 
              sx={{ fontSize: '1.4rem' }}
              key={category.category}
              value={category.category}  
            >
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectCategory;