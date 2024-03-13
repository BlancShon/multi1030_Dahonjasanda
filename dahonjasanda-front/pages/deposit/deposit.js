import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Main from "layouts/Main";
import Container from "components/Container";
import Card from '@mui/material/Card';
import customBackgroundImage from '../../src/images/img3.jpg';

import { Hero, SearchBox, FilterToggleButton, FilterPanel, VerticalMinimalDesignedBlogCards, AdvertisementCard, PollCard, DeadlineCard, EditorsPickCard} from "./components";


const deposit = () => {

  const [activePanel, setActivePanel] = useState(null);
  const [checkedState, setCheckedState] = useState({
    "은행별": [],
    "단복리": [],
    "기간": [],
    "납입기간": [],
    "가입나이": [],
    "수령조건": [],
    // 다른 그룹명에 대한 초기값 추가...
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

  const sectionsData = [
    {
      title: "예금",
      groups: [
        {
          name: "은행별",
          options: [
            { name: "국민은행", value: "KB" },
            { name: "신한은행", value: "SH" },
            { name: "우리은행", value: "WR" },
          ],
        },
        {
          name: "단복리",
          options: [
            { name: "단리", value: "simple" },
            { name: "복리", value: "compound" },
          ],
        },
        {
          name: "월납입금액",
          options: [
            { name: "단리", value: "simple" },
            { name: "복리", value: "compound" },
          ],
        },
        {
          name: "기간",
          options: [
            { name: "1년", value: "1" },
            { name: "2년", value: "2" },
            { name: "3년", value: "3" },
            { name: "5년", value: "5" },
            { name: "10년", value: "10" },
            { name: "21년", value: "21" },
            { name: "22년", value: "22" },
            { name: "23년", value: "23" },
            { name: "25년", value: "25" },
            { name: "210년", value: "210" },
            // Add other options here
          ],
        },
        // Add other groups here
      ],
    },
    // Add other sections here for "Saving", etc.
    {
      title: "적금",
      groups: [
        {
          name: "은행별",
          options: [
            { name: "국민은행", value: "KB" },
            { name: "신한은행", value: "SH" },
            { name: "우리은행", value: "WR" },
          ],
        },
        {
          name: "단복리",
          options: [
            { name: "단리", value: "simple" },
            { name: "복리", value: "compound" },
          ],
        },
        {
          name: "기간",
          options: [
            { name: "1년", value: "1" },
            { name: "2년", value: "2" },
            { name: "3년", value: "3" },
            { name: "5년", value: "5" },
            { name: "10년", value: "10" },
            // Add other options here
          ],
        },
        // Add other groups here
      ],
    },
    // Add other sections here for "Annuity ", etc.
    {
      title: "연금",
      groups: [
        {
          name: "은행별",
          options: [
            { name: "국민은행", value: "KB" },
            { name: "신한은행", value: "SH" },
            { name: "우리은행", value: "WR" },
          ],
        },
        {
          name: "납입기간",
          options: [
            { name: "1년", value: "1" },
            { name: "2년", value: "2" },
            { name: "3년", value: "3" },
            { name: "5년", value: "5" },
            { name: "10년", value: "10" },
          ],
        },
        {
          name: "가입나이",
          options: [
            { name: "20대", value: "20" },
            { name: "30대", value: "30" },
            { name: "40대", value: "40" },
            { name: "50대", value: "50" },
            { name: "60대", value: "60" },
          ],
        },
        {
          name: "수령조건",
          options: [
            { name: "생존", value: "alive" },
            { name: "사망", value: "dead" },
            // Add other options here
          ],
        },
        // Add other groups here
      ],
    }
  ];



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
                  showFilterBox={activePanel === 'deposit'} 
                  onClick={() => togglePanel('deposit')} 
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
                  showFilterBox={activePanel === 'annuity'}
                  onClick={() => togglePanel('annuity')}
                  onCheckboxChange={handleCheckboxChange}
                  text="연금"
                  />
              </Box>
              <SearchBox onSearch={handleSearch} />
              {/* Explicitly render FilterPanel for each panel */}
              {activePanel === 'deposit' && <FilterPanel showFilterBox={true} filterSections={sectionsData.filter(section => section.title === "예금")} checked={checkedState} onCheckboxChange={handleCheckboxChange} />}
              {activePanel === 'savings' && <FilterPanel showFilterBox={true} filterSections={sectionsData.filter(section => section.title === "적금")} checked={checkedState} onCheckboxChange={handleCheckboxChange} />}
              {activePanel === 'annuity' && <FilterPanel showFilterBox={true} filterSections={sectionsData.filter(section => section.title === "연금")} checked={checkedState} onCheckboxChange={handleCheckboxChange} />}
            </Box>
          </Container>
        </Hero>

        <Container>
          <Box display="flex" gap={2}>
            <Box flex={8}>
              {activePanel === 'deposit' && (
                <div>
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>예금 Top 12 추천</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards />
                  </Box>
                </div>
              )}
              {activePanel === 'savings' && (
                <div>
                  {/* Add code for Top 10 savings */}
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>적금 Top 12 추천</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards />
                  </Box>
                </div>
              )}
              {activePanel === 'annuity' && (
                <div>
                  {/* Add code for Top 10 annuity */}
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>연금 Top 12 추천</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards />
                  </Box>
                </div>
              )}
              {!activePanel && (
                <div>
                  {/* Add code for default content */}
                  <Box padding={{ xs: 3, sm: 6 }}>
                    <h1 style={{ textAlign: 'left' }}>은행별 예금 Top 12 추천</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <VerticalMinimalDesignedBlogCards />
                  </Box>
                </div>
              )}
            </Box>
            <Box flex={4}>
              {/* Add code for advertisement banner */}
              <Box flex={4}>
                <AdvertisementCard />
              </Box>

              <Box flex={4}>
                <PollCard />
              </Box>

              <Box flex={4}>
                <DeadlineCard />
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

export default deposit;
