import React from "react";
import { FormControlLabel, Checkbox, Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';


const CheckboxGroup = ({ groupName, options, checked = [], onCheckboxChange  }) => {
  
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const newChecked = isChecked ? [...checked, value] : checked.filter(item => item !== value);

    onCheckboxChange(groupName, newChecked);
  };
  
  return (
    <Box sx={{ p: 2, border: '1px dashed grey' }} borderRadius={2}>
      <Typography variant="subtitle1" gutterBottom>
        {groupName}
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={checked.includes(option.value)}
                onChange={handleChange}
                value={option.value}
                color="primary"
              />
            }
            label={option.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CheckboxGroup;
