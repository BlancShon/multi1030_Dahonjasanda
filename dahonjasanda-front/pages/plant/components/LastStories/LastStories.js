import React from 'react';
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

// 박스에 사진 및 텍스트 추가
const mock = [
  {
    image: 'https://www.nongsaro.go.kr/cms_contents/301/19715_MF_REPR_ATTACH_01.jpg',
    description:
      '농사로 식물 관련 설명',
    title: '농사로 식물 이름',
    author: {
      name: '이름',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
  },
  {
    image: 'https://www.nongsaro.go.kr/cms_contents/1122/204870_MF_BIMG_01.jpg',
    description: '농사로 식물 관련 설명',
    title: '농사로 식물 이름',
    author: {
      name: '이름',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
  {
    image: 'https://www.nongsaro.go.kr/cms_contents/1122/204870_MF_BIMG_01.jpg',
    description: '농사로 식물 관련 설명',
    title: '농사로 식물 이름',
    author: {
      name: '이름',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
  {
    image: 'https://www.nongsaro.go.kr/cms_contents/1122/204870_MF_BIMG_01.jpg',
    description: '농사로 식물 관련 설명',
    title: '농사로 식물 이름',
    author: {
      name: '이름',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
  {
    image: 'https://www.nongsaro.go.kr/cms_contents/1122/204870_MF_BIMG_01.jpg',
    description: '농사로 식물 관련 설명',
    title: '농사로 식물 이름',
    author: {
      name: '이름',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
  {
    image: 'https://www.nongsaro.go.kr/cms_contents/1122/204870_MF_BIMG_01.jpg',
    description: '농사로 식물 관련 설명',
    title: '농사로 식물 이름',
    author: {
      name: '이름',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
];
// 박스 구성
const LastStories = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            다양한 반려 식물을 만나보세요
          </Typography>
          <Typography color={'text.secondary'}>
            식물 종류, 잎의 색상 등 다양하게 검색이 가능합니다.
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
      <Grid container spacing={4}>
        {/* mock 데이터를 갖고옴 */}
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}  //? 0.8 이나..1?
              height={0.7}
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
                height={1}
                boxShadow={7}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
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
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Avatar
                        src={item.author.avatar}
                        sx={{ marginRight: 1 }}
                      />
                      <Typography color={'text.secondary'}>
                        {item.author.name}
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastStories;
