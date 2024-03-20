import React, { useState } from 'react';
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

// 박스에 사진 및 텍스트 추가

const mock = [
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  { //popfile ㅣ이미지
    image: 'http://www.animal.go.kr/files/shelter/2021/12/202201041101258.png',
    description:
      '유기견 specialMark 관련 설명',
    title: '품종',
    name: '나이',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
];
// 박스 구성
const LastStories = () => {
  const theme = useTheme();
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
            가족을 기다리는 반려동물들을 만나보세요,
          </Typography>
          <Typography color={'text.secondary'}>
            품종, 유기 날짜, 시도 등으로 검색이 가능합니다.
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
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} sx={{marginBottom:-20}} >
            
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
                  image={item.image}
                  title={item.title}
                  name={item.name}
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
                    품종 : {item.title} <br></br>
                    나이 : {item.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
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
      </Grid>
    </Box>
  );
};

export default LastStories;
