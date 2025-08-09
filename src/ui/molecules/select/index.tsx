import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectComponent = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-category-label">Categoria</InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          label="Categoria"
          onChange={() => {}}
        >
          <MenuItem>Camiseta</MenuItem>
          <MenuItem>Short</MenuItem>
          <MenuItem>Calça</MenuItem>
          <MenuItem>Moletom</MenuItem>
          <MenuItem>Outros</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectComponent;