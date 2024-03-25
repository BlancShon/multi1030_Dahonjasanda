import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import React, { useState } from 'react';
import { Checkbox, FormControlLabel} from '@mui/material';
import { Typography, FormControl, Select, MenuItem } from '@mui/material';


//생육 형태
const growthTypeC= [
  '직립형',
  '관목형',
  '덩굴성',
  '풀모양',
  '로제트형',
  '다육형',
];
//꽃 피는 계절
const floweringSeasonC = [
  '봄',
  '여름',
  '가을',
  '겨울',
];

// 잎 무늬
const leafPatternC = [
  '줄무늬',
  '점무늬',
  '잎 가장자리 무늬',
  '기타(무늬 없음 등)',
];

// 잎색
const leafColorC = [
  '녹색, 연두색',
  '금색, 노란색',
  '흰색, 크림색',
  '은색, 회색',
  '빨강, 분홍, 자주색',
  '여러색 혼합',
  '기타',
];
// 꽃색
const flowerColorC = [
  '녹색, 연두색',
  '금색, 노란색',
  '흰색, 크림색',
  '은색, 회색',
  '빨강, 분홍, 자주색',
  '여러색 혼합',
  '기타',
];

// 관리요구도
const managementRequirementC = [
  '초보자',
  '경험자',
];

const SearchBox = ({}) => {
  // 사용할 변수(조건)들 할당 
  const [searchValue, setSearchValue] = useState([]);
  const [growthType, setGrowthType] = useState([]);
  const [floweringSeason, setFloweringSeason] = useState([]);
  const [leafPattern, setLeafPattern] = useState([]);
  const [leafColor, setLeafColor] = useState([]);
  const [flowerColor, setFlowerColor] = useState([]);
  const [managementRequirement, setManagementRequirement] = useState([]);
 
  // 체크박스 체크 해제 및 중복체크 기능
  const handleGrowthTypeCToggle = (item) => {
    if (growthType.includes(item)) {
      setGrowthType(growthType.filter((selectedItem) => selectedItem !== item));
    } else {
      setGrowthType([...growthType, item]);
    }
  };
  const handleFloweringSeasonCToggle = (item) => {
    if (floweringSeason.includes(item)) {
      setFloweringSeason(floweringSeason.filter((selectedItem) => selectedItem !== item));
    } else {
      setFloweringSeason([...floweringSeason, item]);
    }
  };
  const handleLeafPatternCToggle = (item) => {
    if (leafPattern.includes(item)) {
      setLeafPattern(leafPattern.filter((selectedItem) => selectedItem !== item));
    } else {
      setLeafPattern([...leafPattern, item]);
    }
  };
  const handleLeafColorCToggle = (item) => {
    if (leafColor.includes(item)) {
      setLeafColor(leafColor.filter((selectedItem) => selectedItem !== item));
    } else {
      setLeafColor([...leafColor, item]);
    }
  };
  const handleFlowerColorCToggle = (item) => {
    if (flowerColor.includes(item)) {
      setFlowerColor(flowerColor.filter((selectedItem) => selectedItem !== item));
    } else {
      setFlowerColor([...flowerColor, item]);
    }
  };
  const handleManagementRequirementCToggle = (item) => {
    if (managementRequirement.includes(item)) {
      setManagementRequirement(managementRequirement.filter((selectedItem) => selectedItem !== item));
    } else {
      setManagementRequirement([...managementRequirement, item]);
    }
  };

  // 검색 조건
  const [searchData, setSearchData] = useState({
    searchValue: '',
    growthTypeC: '',
    floweringSeasonC: '',
    leafPatternC: '',
    leafColorC: '',
    flowerColorC: '',
    managementRequirementC: '',
    growthType: '',
    floweringSeason: '',
    leafPattern: '',
    leafColor: '',
    flowerColor: '',
    managementRequirement: '',
  });

  // 위 검색 조건들로 서버로 요청 보냄 
  const handleSubmit = async () => {
    try {
      // 검색 조건을 URL 쿼리 문자열에 포함하여 URL 구성
      const url = `http://localhost/plantSearch?searchValue=${searchData.searchValue}&growthType=${searchData.growthType}&floweringSeason=${searchData.floweringSeason}&leafPattern=${searchData.leafPattern}&leafColor=${searchData.leafColor}&flowerColorType=${searchData.flowerColorType}&managementRequirement=${searchData.managementRequirement}`;
      
      // 서버로 GET 요청 보내기
      const response = await axios.get(url);
      // 서버로부터 받은 응답 처리
      console.log(response.data); // 받은 데이터 처리
    } catch (error) {
      console.log('@@@@', url);
      console.error('서치 데이터 안온다!!!!', error);
    }
  };


  return (
    <Box>
      <form noValidate autoComplete="off">
     
      <Box
        padding={2}
        width={1}
        component={Card}
        boxShadow={4}
        marginBottom={4}
      >
          <Box display="flex" alignItems={'center'}>
            <Box width={1} marginRight={1}>
              <TextField
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{
                  height: 54,
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '0 !important',
                  },
                }}
                variant="outlined"
                color="primary"
                size="medium"
                placeholder="나의 새로운 가족, 반려 식물을 찾아보세요"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                        color={'primary.main'}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </Box>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <Button onClick={handleSubmit}
                sx={{ height: 54, minWidth: 100, whiteSpace: 'nowrap' }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                식물 검색
              </Button>
            </Box>
          </Box>
      
      <Typography variant="h6" >
        생육 형태</Typography>
      {growthTypeC.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
            checked={growthType.includes(item)}
                onChange={() => handleGrowthTypeCToggle(item)}
                name={growthType}
                value={item}
            />
          }
          label={item}
        />
        ))}
        <br></br>
        {/* 글씨와 체크박스 포문 및 중복 체크 기능 */}
        <Typography variant="h6" >
          꽃피는 계절
          </Typography>
      {floweringSeasonC.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={floweringSeason.includes(item)}
              onChange={() => handleFloweringSeasonCToggle(item)}
              name={floweringSeason}
            value={item}
            />
          }
          label={item}
        />
        ))}
        <br></br>
        <Typography variant="h6" >
        잎 무늬
        </Typography>
      {leafPatternC.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
            checked={leafPattern.includes(item)}
            onChange={() => handleLeafPatternCToggle(item)}
            name={leafPattern}
            value={item} // 변경된 부분: value를 item으로 설정하여 해당 값이 서버로 전송될 때 반영되도록 함
          />
          }
          label={item}
        />
        ))}
        <br></br>
        <Typography variant="h6" >
        잎 색<br></br>
        </Typography>
      {leafColorC.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={leafColor.includes(item)}
              onChange={() => handleLeafColorCToggle(item)}
              name={leafColor}
              value={item}
            />
          }
          label={item}
        />
        ))}
         <Typography variant="h6" >
        꽃 색</Typography>
      {flowerColorC.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={flowerColor.includes(item)}
              onChange={() => handleFlowerColorCToggle(item)}
              name={flowerColor}
            value={item}
            />
          }
          label={item}
        />
        ))}
        <Typography variant="h6" >
        관리 요구도</Typography>
      {managementRequirementC.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={managementRequirement.includes(item)}
              onChange={() => handleManagementRequirementCToggle(item)}
              name={managementRequirement}
            value={item}
            />
          }
          label={item}
        />
        ))}

      </Box>
      </form>
    </Box>
  );
};

export default SearchBox;
