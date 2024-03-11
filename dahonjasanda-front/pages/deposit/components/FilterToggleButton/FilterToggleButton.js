import React from 'react';
import Button from '@mui/material/Button';



const FilterToggleButton = ({ showFilterBox, onClick, text }) => {
  return (
    <Button
      size="large"
      variant={showFilterBox ? "outlined" : "contained"}
      onClick={onClick}
    >
      {showFilterBox ? `${text}` : `${text}`}
    </Button>
  );
};

export default FilterToggleButton;