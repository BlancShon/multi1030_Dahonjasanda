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


const title = [
  {
    careNm: '이기영수의과병원',  // 보호수 이름
    careTel: '02-2202-3131', //보호소 전화번호
    careaddr: '충청남도 공주시 감영길 7 (반죽동)', //보호소 주소
  }
]


const mock33 = [
  {
    label: 'Phone',
    careTel: '보호소 전화번호 02-2202-3131',
  },
  {
    label: 'Email',
    value: 'hi@maccarianagency.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Via Venini 33, 20147',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const mock = [
  {
    image: 'https://previews.123rf.com/images/shmakova/shmakova2111/shmakova211100113/178616023-%ED%86%A0%EB%A7%88%ED%86%A0-%EC%84%B1%EC%9E%A5-%EB%8B%A8%EA%B3%84-%EC%A0%95%EC%9B%90-%EC%8B%9D%EB%AC%BC-%EC%9E%AC%EB%B0%B0-%EC%8B%9D%EB%AC%BC-%EA%B4%80%EB%A6%AC-%ED%94%8C%EB%9E%AB-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%98-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4.jpg',
    description:
      '이런 저런 내용',
    title: '물 관리 주기',
    // watercycleSummerCode , lighttdemanddoCodeNm, postngplaceCodeNm:, grwhTpCodeNm, winterLwetTpCodeNm, frtlzrInfo등 다양한 데이터 끌고오기
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   title: '성장 및 관리 정보',
  //   tags: ['UX', 'Design', 'Themes', 'Photography'],
  //   author: {
  //     name: 'Jhon Anderson',
  //     avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  //   },
  //   date: '12 Sep',
  // },
];

const mock2 = [
  {
    image: 'https://img.freepik.com/premium-vector/flowers-store-and-plants-shop-with-florists-care-organic-natural-products-for-home-garden-green-decoration-in-flat-background-vector-illustration_2175-2809.jpg?w=360',
    description:
      'dlfjs wjㅋ.',
    title: '성장 및 관리 정보',
    // watercycleSummerCode , lighttdemanddoCodeNm, postngplaceCodeNm:, grwhTpCodeNm, winterLwetTpCodeNm, frtlzrInfo등 다양한 데이터 끌고오기
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   title: 'Consectetur adipiscing elit',
  //   tags: ['UX', 'Design', 'Themes', 'Photography'],
  //   author: {
  //     name: 'Jhon Anderson',
  //     avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  //   },
  //   date: '12 Sep',
  // },
];
const PopularNews = () => {
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
                  {item.careNm}, 위치 안내
                </Typography>
              <br />
            
              <Box marginBottom={1}>

              </Box>
                <Typography
              variant="h6"
              color={'text.secondary'}
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
