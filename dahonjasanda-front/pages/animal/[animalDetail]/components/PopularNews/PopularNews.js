/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import Container from 'components/Container';




const PopularNews = ( {data} ) => {
  console.log('데이터 넘어왔나요? 상세데이터 확인@@@', data);
  console.log(typeof data);
  const dataSet = data || {};

  const title = [
    {
      careNm: dataSet.careNm,  // 보호수 이름
      careTel: dataSet.careTel, //보호소 전화번호
      careaddr: dataSet.careAddr, //보호소 주소
    }
  ]
  const theme = useTheme(
  );

  const LeftSide = () => {
    return (
      <Grid container spacing={-13} marginY={-19}>
        {title.map((item, i) => (
          <Grid item xs={12} key={i}>

                <Typography
                marginTop={0}
                  variant="h4"
                  data-aos={'fade-up'}
                  align={'center'}
                  gutterBottom
                  sx={{ fontWeight: 700, }}
                >
                  <EventNoteIcon fontSize='large' sx={{color: "brown" }}>
                    {/* credit: plus icon from https://heroicons.com/ */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                      />
                    </svg>
                  </EventNoteIcon>
                  {dataSet.careNm}, 위치 안내
                </Typography>
              <br />
            
              <Box marginBottom={1}>

              </Box>
                <Typography
              fontSize={17.5}
              color={'black'}
              align={'left'}
              data-aos={'fade-up'}
              fontWeight={'bold'}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보호시설명 <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;[{item.careNm}]<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시설 연락처<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;[{item.careTel}] <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시설 주소 <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;[{item.careaddr}] <br></br>
            </Typography>

          </Grid>
        ))}
      </Grid>

    );
  };
  const RightSide = () => {
    return (
      <iframe
        width="50%"
        height="50%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Milan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === 'dark'
              ? 'grayscale(0.5) opacity(0.7)'
              : 'none',
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container marginY={-0} paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            width={1}
            order={{ xs: 1, md: 2 }}
          >
            <Container>
              <LeftSide/>
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '100%' },
              minHeight: { xs: 100, md: 50 },
              order: { xs: 1, md: 2 },
            }}
          >
            <RightSide />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularNews;
