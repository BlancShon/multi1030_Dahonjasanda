import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';

const Hero = ({
  children,
  backgroundImage,
  titleText = "나에게 맞는 금융 상품을 찾아보세요!",
  subtitleText = "한눈에 금융 정보를 확인하고, 나에게 맞는 상품을 찾아보세요.",
  subtitleText2 = "예금, 적금, 연금, 주택담보대출, 개인신용대출, 전세대출 등 다양한 금융 상품을 비교해보세요.",
  opacity = 0.6
}) => {
  const theme = useTheme();
  const defaultImage = 'https://assets.maccarianagency.com/backgrounds/img3.jpg';
  console.log('Background image URL:', backgroundImage);
  const imageUrl = backgroundImage || defaultImage;

  return (
    <Box
      minHeight={300}
      height={"auto"}
      position={'relative'}
      sx={{
        backgroundImage: `url(${imageUrl.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:after': {
          position: 'absolute',
          content: '" "',
          width: '100%',
          height: '100%',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
          background: '#161c2d',
          opacity: opacity,
        },
      }}
    >
      <Container
        zIndex={3}
        position={'relative'}
        minHeight={{ xs: 300, sm: 400, md: 600 }}
        maxHeight={600}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              align={'center'}
              sx={{
                fontWeight: 700,
                color: theme.palette.common.white,
              }}
            >
            {titleText}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              align={'center'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              {subtitleText}
              <br />
              {subtitleText2}
            </Typography>
          </Box>
          {children}
        </Box>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        width={1}
        maxHeight={120}
        bottom={0}
        position={'absolute'}
        zIndex={2}
      ></Box>
    </Box>
  );
};

export default Hero;
