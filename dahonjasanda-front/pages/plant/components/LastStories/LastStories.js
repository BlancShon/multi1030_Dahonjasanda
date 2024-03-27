import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import { Container } from 'react-bootstrap';
import PageComponent from '../PageComponent';
// 박스에 사진 및 텍스트 추가


import { useRouter } from 'next/router';


// 박스 구성
const LastStories = ({ data, totalPages, pageNumber, onChangePageHandler, pageable, onDetail }) => {
  console.log('LastStories 전체데이터 data 시작!!!:', data);
  console.log(typeof data); // 전체데이터 

  const router = useRouter();


  const handleClick = async (ptno) => {
    try {
      // 아래 사용하지 않음 (라우터 받아주는 곳에서 데이터 서버로 요청 하기떄문))
      // const url = `http://localhost/plant/${ptno}`;
      // console.log('@@@@@@@@@ptno 번호 확인 @@@@@@', ptno);
      // console.log('@@@@@@@@@ptno 가져오는 엑스오스 url 입니다.@@@@@@', url);

      // // 백엔드 API에서 상세 데이터를 요청하는 요청을 보냅니다.
      // const response = await axios.get(url);
  
      // // 응답으로 받은 상세 데이터를 이용하여 특정 작업을 수행합니다.
      // console.log('ptno에 따른 상세 데이터 넘어 왔는데용?1:', response);
      // console.log('상세 데이터 넘어 왔는데용?2:', response.data.plantDetail);
      // const jaemokgodja = response.data.plantDetail;

      // 라우터를 활용해, ptno값을 서버에서 받아옴과, 페이지를 /plant/${ptno} 로 이동
      router.push({
        pathname: `/plant/${ptno}`,  // 주소 
        // query : {jaemokgodja}
      });
      const {query} = router;

      console.log('라우터 정보 확인 (여기는 라우터를 설정한 곳)', query);
      // 받아온 데이터를 표시하거나 다른 작업을 수행할 수 있습니다.

    } catch (error) {
      console.log('상세 데이터를 불러오는 중 오류가 발생했습니다@@@:', error);
    }
  };
 
  // console.log('data 길이', data.length);

  // const { pageNumber, totalPages, totalElements } = pageable;

  const theme = useTheme();
  // const [responseData, setResponseData] = useState([]);
  // console.log('responseData:', responseData);


  // useEffect(() => {
  //   // 데이터를 가져온다는 가정하에, 비동기 함수 호출 대신에 propsData를 사용하여 상태를 설정
  //   setResponseData(data);
  // }, [data]); // propsData가 변경될 때마다 useEffect가 실행되도록 설정


  // const [isJsh, setIsJsh] = useState(true);
  return (

    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        {/* {isJsh ? <div>장성희</div> : <div>김남훈</div>}
      <div onClick={() => setIsJsh((prev) => !prev)}>바꾼다</div> */}
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            다양한 반려 식물을 만나보세요 
          </Typography>
          <Typography color={'text.secondary'}>
            식물 종류, 잎의 색상 등 다양하게 검색이 가능합니다.  
            {/* {totalElements} 개의 결과 */}
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>

          {/* viewAll 삭제 */}
          {/* <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
          </Box> */}
        </Box>
      </Box>
      <Grid container spacing={4}  >
        {/* mock 데이터를 갖고옴 */}

        {/* {data || '검색결과가 없습니다' } */}
        {data && Object.keys(data).map((key, index) => {// display 활용하여 들어온 값으로 포문
          const item = data[key];
          const imageUrls = item.rtnFileUrl.split('|');
          return (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ marginBottom: -15}} >
            {/* {data[key].cntntsSj} */}
            {/* {console.log('데이터 콘솔 확인@@@@', data[key])} */}
            <Box
              onClick={() => handleClick(data[key].ptno)}
              component={'a'}
              // href= {'http://localhost/plantDetail/${data[key].ptno}'}
              // href={`http://localhost/plantDetail/${item.ptno}`}
              display={'block'}
              width={1}  //? 0.8 이나..1?
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >dd
              <Box
                component={Card}
                width={1}
                height={0.7}
                boxShadow={7}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none', marginY: ''}}
              > 
              {console.log('이미지 확인', imageUrls[0])}
                <CardMedia
                  image={imageUrls[0]} 
                  // image={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png'}
                  title={data[key].cntntsSj}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                  // {data[key].rtnThmbUrl}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'} marginY={0}>
                  <Typography variant={'h6'} gutterBottom>
                    {data[key].cntntsSj}
                  </Typography>
                  <Typography color="text.secondary">
                    {data[key].plntbneNm}
                  </Typography>
                  <Typography color="text.secondary" fontWeight={'bold'} textAlign={'right'}><br></br>
                    {data[key].fmlCodeNm}
                  </Typography>
                </Box>
                <Box flexGrow={1} />

              </Box>

            </Box>

          </Grid>
        )})}
        {/* <Grid item container justifyContent={'center'} xs={12}>
              <Pagination count={10} size={'large'} color="primary" />
            </Grid> */}
    {/* <Container className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
    <Pagination
      count={totalPages}
      page={pageNumber}
      onChange={pageable}
      variant="outlined"
      shape="rounded"
    />
  </Container> */}
      </Grid>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <hr></hr>
        <Container className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <PageComponent totalPages={totalPages} currentPage={pageNumber} onPageChange={onChangePageHandler}/>
        </Container>
    </Box>
  );
}
export default LastStories;