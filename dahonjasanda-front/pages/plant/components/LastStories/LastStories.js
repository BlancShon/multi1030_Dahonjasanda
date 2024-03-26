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


// 박스 구성
const LastStories = ({ data, pageable }) => {
  console.log('data!!!! 시작!!!:', data);
  console.log(typeof data);
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
      <Grid container spacing={4} >
        {/* mock 데이터를 갖고옴 */}

        {/* {data || '검색결과가 없습니다' } */}
        {data && Object.keys(data).map((key, index) => (// display 활용하여 들어온 값으로 포문
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ marginBottom: -10 }} >
            {data[key].cntntsSj}
            {console.log('데이터 콘솔 확인@@@@', data[key])}
            <Box
              component={'a'}
              href={''}
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
            >
              <Box
                component={Card}
                width={1}
                height={0.7}
                boxShadow={7}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png'}
                  title={data[key].cntntsSj}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
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
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom>
                    {data[key].cntntsSj}
                  </Typography>
                  <Typography color="text.secondary">
                    {data[key].plntbneNm}
                  </Typography>
                  <Typography color="text.secondary"><br></br>
                    {data[key].fmlCodeNm}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Typography color={'text.secondary'}>
                      </Typography>
                    </Box>
                  </Box>

                </Box>

              </Box>

            </Box>

          </Grid>
        ))}
        <Grid item container justifyContent={'center'} xs={12}>
              <Pagination count={10} size={'large'} color="primary" />
            </Grid>
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
    </Box>
  );
}
export default LastStories;
