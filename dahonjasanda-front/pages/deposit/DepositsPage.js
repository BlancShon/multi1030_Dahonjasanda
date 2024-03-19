import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Main from "layouts/Main";
import Container from "components/Container";
import Card from '@mui/material/Card';
import customBackgroundImage from '../../src/images/img3.jpg';
import { sectionsData } from './sectionData'; // 'sectionsData.js' 파일의 경로에 맞게 수정하세요

import { Hero, SearchBox, FilterToggleButton, FilterPanel, VerticalMinimalDesignedBlogCards, AdvertisementCard, PollCard, EditorsPickCard} from "./components";


const DepositPage = () => {

  const [activePanel, setActivePanel] = useState(null);
  const [checkedState, setCheckedState] = useState({
    "은행별": [],
    "단복리": [],
    "만기": [],
    "가입방식": [],
    "적립방식": [],
  });
  // console.log("Initial checkedState:", checkedState);

  // Updated to handle checkbox changes for groups by their names
  const handleCheckboxChange = (groupName, newCheckedValues) => {
    setCheckedState(prevState => {
      const updatedState = { ...prevState, [groupName]: newCheckedValues };
      // console.log("Updated checkedState:", updatedState); // 로그 추가
      return updatedState;
    });
  };

  // 패널 토글 함수
  const togglePanel = (panelName) => {
    setActivePanel(prevPanel => prevPanel === panelName ? null : panelName);
  };

  const handleSearch = (value) => {
    // console.log(value);
  };

  


  return (
    <Main>
      <Box>
        <Hero
          backgroundImage={customBackgroundImage} // 여기서 customBackgroundImage는 이미지의 경로입니다.
          titleText="당신의 금융을 찾아보세요"
          subtitleText="다양한 금융 상품을 비교하고 분석해보세요."
          subtitleText2="적금, 예금, 연금 등 최적의 선택을 위한 정보가 여기에 있습니다."
          opacity={0.6}
        >
          <Container>
            <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={1}
            >
              <Box
                display="flex"
                gap={2}
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                marginBottom={2}
              >
                <FilterToggleButton 
                  showFilterBox={activePanel === 'term-deposits'} 
                  onClick={() => togglePanel('term-deposits')} 
                  onCheckboxChange={handleCheckboxChange}
                  text="예금"
                  />
                <FilterToggleButton 
                  showFilterBox={activePanel === 'savings'} 
                  onClick={() => togglePanel('savings')} 
                  onCheckboxChange={handleCheckboxChange}
                  text="적금"
                  />
                <FilterToggleButton
                  showFilterBox={activePanel === 'annuity-savings'}
                  onClick={() => togglePanel('annuity-savings')}
                  onCheckboxChange={handleCheckboxChange}
                  text="연금"
                  />
              </Box>
              <SearchBox onSearch={handleSearch} />
              {/* Explicitly render FilterPanel for each panel */}
              {activePanel === 'term-deposits' && <FilterPanel showFilterBox={true} filterSections={sectionsData.filter(section => section.title === "예금")} checked={checkedState} onCheckboxChange={handleCheckboxChange} />}
              {activePanel === 'savings' && <FilterPanel showFilterBox={true} filterSections={sectionsData.filter(section => section.title === "적금")} checked={checkedState} onCheckboxChange={handleCheckboxChange} />}
              {activePanel === 'annuity-savings' && <FilterPanel showFilterBox={true} filterSections={sectionsData.filter(section => section.title === "연금")} checked={checkedState} onCheckboxChange={handleCheckboxChange} />}
            </Box>
          </Container>
        </Hero>

        <Container>
          <Box display="flex" gap={2}>
            <Box flex={9}>
              {activePanel === 'term-deposits' && (
                <div>
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>예금</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards category="term-deposits" />
                  </Box>
                </div>
              )}
              {activePanel === 'savings' && (
                <div>
                  {/* Add code for Top 10 savings */}
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>적금</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards category="savings" />
                  </Box>
                </div>
              )}
              {activePanel === 'annuity-savings' && (
                <div>
                  {/* Add code for Top 10 annuity-savings */}
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>연금</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards category="annuity-savings" />
                  </Box>
                </div>
              )}
              {!activePanel && (
                <div>
                  {/* Add code for default content */}
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>금리 높은 예적금 Top 10 추천</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards />
                  </Box>
                </div>
              )}
            </Box>
            <Box flex={3}>
              {/* Add code for advertisement banner */}
              <Box flex={4}>
                <AdvertisementCard />
              </Box>

              <Box flex={4}>
                <PollCard />
              </Box>

              <Box flex={4}>
                <EditorsPickCard />
              </Box>
            </Box>
          </Box>
        </Container>

        

      </Box>
    </Main>
  );
};

export default DepositPage;
