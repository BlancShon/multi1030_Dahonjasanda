import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckboxGroup from '../CheckboxGroup';
import Divider from '@mui/material/Divider';



const FilterSection = ({ title, groups, checked, onCheckboxChange }) => {
  
  const handleCheckboxChange = (groupName, newChecked) => {
    // console.log(`Checkbox change in '${groupName}':`, newChecked); // 체크박스 변경 로그 추가
    onCheckboxChange(groupName, newChecked);
  };

  // console.log("Checked state at FilterSection:", checked); // 전체 checked 상태 로그

    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        
        {groups.map((group, index) => {
          // console.log(`Group name: ${group.name}, Checked values:`, checked[group.name] || []); // 그룹명과 체크된 값들에 대한 로그 추가
          return (
            <CheckboxGroup
              key={index}
              groupName={group.name}
              options={group.options}
              checked={checked[group.name] || []}
              onCheckboxChange={handleCheckboxChange}
            />
          );
        })}
        
      </Box>
    );
  };

export default FilterSection;