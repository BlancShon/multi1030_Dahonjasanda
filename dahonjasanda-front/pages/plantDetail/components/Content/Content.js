/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Content = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const mock = [
    {
      image: 'https://images.chosun.com/resizer/5E4C922dJtUIZOBr1krGW0DTDsY=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/3FG6AZSKYRWAEHRSJVL62NAJ2Q.jpg',
      description:
        '오버뷰로 식물 상세소개 ',
      title: '농사로 식물 이름',
      author: {
        name: '식물 치료 센터 바로가기 ',
        avatar: 'data:image/jpeg;base64,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',
      },
      // date: '04 Aug',
    }]

  const photos = [
    {
      // 중간 이미지 4컷
      src: 'https://nongsaro.go.kr/cms_contents/301/12963_MF_REPR_ATTACH_01.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://nongsaro.go.kr/cms_contents/301/12963_MF_ATTACH_02.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://www.nongsaro.go.kr/cms_contents/301/14699_MF_REPR_ATTACH_01.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://www.nongsaro.go.kr/cms_contents/301/14699_MF_ATTACH_03.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  return (
    
    <Box>
      <Typography
          variant={'h4'}
          color={'primary'}
          align={'center'}
          fontWeight={'normal'}
        >

{/* 이렇게 활용해서 끌고올수 있나?>?? */}

          “몸과 마음을 위한 힐링 파트너로써 이 식물은 어떨까요?”
        </Typography>
        <Typography variant={'h5'} gutterBottom >
           
        </Typography>
       
        <Box width={1} height={1} marginY={4}>
          <img
            height={'100%'}
            width={'100%'}
            // 오버뷰 아래 메인 이미지
            src={'https://www.nongsaro.go.kr/portal/imgView.do?ep=a5gb/CMEYLclIUPoWw9/DbB57gkFsTGen/BoRw@@FvI1y0fGLKb5X4NQ2uaoJr/oVJfVLXCV1eYyTFHg31nAnw!!'}
            alt="Remote working"
            loading="lazy"
            style={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              objectFit: 'cover',
              borderRadius: 8,
              width: '100%',
              height: '100%',
              maxHeight: 400,
            }}
          />
           {mock.map((item, i) => (
          <Grid item xs={12} key={i}>
          <Box>
             {/* 글 */}
             <Typography
               variant={'h5'}
               margin={2}
               gutterBottom
               sx={{ color: 'common.black' }}
                >
              {/* 제목 */}
             [식물명] <br>
             </br>   {item.title}
             </Typography>
             <Typography
                      color="text.secondary"
                      margin={2}
                      sx={{ color: 'common.black', opacity: .8 }}
                    >
                      {item.description}
                    </Typography>
            </Box>
            </Grid>

          ))}
          {/* 오버뷰 끌고오면 아래는 삭제 */}
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={'subtitle1'}>
          여기는 식물 overview가 들어가야하는데 말이죠
        </Typography>
        </Box>

        <Box marginY={4}>
          <Typography variant={'h5'} gutterBottom>
            Big heading for a new topic
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
          <Box marginTop={2}>
            <ul>
              <li>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </li>
              <li>
                <Typography>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box marginY={4}>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
              <img
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 8,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingBottom={4}>
        <Box>
          <Typography variant={'h5'} gutterBottom>
            Small heading for a smaller transition
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
      </Box>
      {/* <Box
        component={Card}
        boxShadow={2}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row-reverse' }}
        sx={{ backgroundImage: 'none' }}
      >
        <Box
          sx={{
            width: { xs: 1, md: '50%' },
            position: 'relative',
          }}
        >
          <Box
            component={'img'}
            height={1}
            width={1}
            src={'https://assets.maccarianagency.com/backgrounds/img1.jpg'}
            alt="..."
            loading="lazy"
            sx={{
              objectFit: 'cover',
              maxHeight: 360,
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
          <Box
            component={'svg'}
            viewBox="0 0 112 690"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              position: 'absolute',
              bottom: 0,
              top: '-50%',
              left: 0,
              right: 0,
              color: theme.palette.background.paper,
              transform: 'scale(2)',
              height: 1,
              width: 'auto',
              transformOrigin: 'top center',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <path
              d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
              fill="currentColor"
            />
          </Box>
        </Box>
        <CardContent
          sx={{
            position: 'relative',
            width: { xs: 1, md: '50%' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant={'h6'} gutterBottom>
                  Download our sturtup giude
                </Typography>
                <Typography color={'text.secondary'}>
                  Small heading for a smaller transition
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name *"
                  variant="outlined"
                  name={'name'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size={'large'}
                  fullWidth
                  variant={'contained'}
                  type={'submit'}
                  sx={{ height: 54 }}
                >
                  Download
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Box> */}
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingY={4}>
        <Typography color={'text.secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
      </Box>
    </Box>
  );
};

export default Content;
