import React from 'react';
import Collapse from '@mui/material/Collapse';
import FilterSection from '../FilterSection';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';



const FilterPanel = ({ showFilterBox, filterSections, checked, onCheckboxChange }) => {
  // console.log("Checked state in FilterPanel:", checked);

    return (
      <Collapse in={showFilterBox}>
        <Box marginY={1} marginX={{ xs: -3, sm: -6 }}>
        <Divider />
        </Box>
        {filterSections.map((section, index) => (
          // `checked`와 `onCheckboxChange`를 `FilterSection` 컴포넌트에 전달
          <FilterSection 
            key={index} 
            {...section} 
            checked={checked}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </Collapse>
    );
  };

export default FilterPanel;