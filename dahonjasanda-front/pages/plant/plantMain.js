import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { useState } from 'react';
import {
  Hero,
  SearchBox,
  LastStories,
  FeaturedArticle,
  CaseStudies,
  PopularArticles,
  Newsletter,
} from './components';
import axios from 'axios';

const plantMain = ({onData}) => {
    const [plantList, setPlantList] = useState([]);  // 전체 리스트 가져오기 위한 변수 할당

    const [searchList, setSearchList] = useState();  // 전체 리스트 가져오기 위한 변수 할당
    
    const [resultList, setResultList] = useState([])
    const [pageable, setPageable] = useState({})

    // , pageInfo
    const handleSearch = (data) => { 
      setSearchList(data); // 검색 결과를 상태에 저장
      console.log('검증',data);
      console.log('검증 setSearch 길이',setSearchList.length);
      console.log('검증 setSearch 사이즈',setSearchList.size);
      console.log('검증 search 길이(여기서는 바뀌기 전 데이터 값이다.',Object.keys(searchList).length);
      console.log('검색 결과 데이터:', data);
      setSearchList(data);
      // setPageable(pageInfo); // 페이지 정보 설정
    };
      console.log('searchList@@@ :', searchList);
      console.log('searchList :', searchList);
    // const displayList = searchResults.length > 0 ? searchResults : plantList;
    // 전체리스트가 보여지고있고, 검색 결과를 가져와서 그위에 검색리스트로 변환
    

    
    useEffect(() => {
      axios.get('http://localhost/plant')  // 전체리스트 요청
      .then(map => {
        console.log('map :', map);
        console.log('plantList :', plantList);
          setPlantList(map.data.listsearchAll.content); // 받아온 데이터로 변환
          setPageable({
            pageable : map.data.listsearchAll.pageable,
            totalPages : map.data.listsearchAll.totalPages,
            totalElements : map.data.listsearchAll.totalElements
          });
              console.log('여기 찍힘')
          })
          .catch(error => {
              console.error('데이터가 안옴', error);
          });
  }, []);


  //   useEffect(() => {
  //     axios.get('http://localhost/plant')  // 전체리스트 요청
  //     .then(response => {
  //           console.log('response :', response);
  //           console.log('plantList :', plantList);
  //             setPlantList(response.data.plantList); // 받아온 데이터로 변환
  //             console.log('여기 찍힘')
  //         })
  //         .catch(error => {
  //             console.error('데이터가 안옴', error);
  //         });
  // }, []);
  
  //여기다가 useState
  // const [AllListView, setAllListView] = useState([]);

  // const handleAllView = (results) => {
  //   setAllListView(results);
  // };
  // const [searchResults, setSearchResults] = useState([]); // 사용할 검색 결과 상태
  
  
  
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Hero />
        <Container
          sx={{
            marginTop: '-5rem',
            position: 'relative',
            zIndex: 3,
            paddingY: '0 !important',
          }}
        >
          <SearchBox onSearch={setSearchList} />
          <Container paddingTop={'0 !important'}></Container>
        </Container>
        <Container paddingTop={'0 !important'}>
           {/* onChangePageHandler={setPage}  pageable={setPageable} */}
          <LastStories  data={searchList? searchList : plantList}/> {/*AllListView={AllListView}*/}
         </Container>
        <Container paddingTop={'0 !important'}>
          <CaseStudies />
        </Container>
        <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
        <Container>
          <FeaturedArticle />
        </Container>
        <Container>
          <PopularArticles />
          </Container>
        </Box>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            transform: 'translateY(50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
        };

export default plantMain;