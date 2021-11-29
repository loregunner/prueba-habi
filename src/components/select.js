import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles/check.css'

function SelectPizza(props) {
  const [types, setTypes] = React.useState([])

  React.useEffect(() => {
    const options = props.options
    setTypes(options)
  }, [])
  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <Select
          className="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.data}
          label="Pizza"
          displayEmpty
          onChange={props.handleChangeSelect}
        >
        <MenuItem disabled value="">
          <em>Nombre pizza</em>
        </MenuItem>
            {types.map((item, index) => (
                <MenuItem value={item.name}>Pizza de {item.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectPizza