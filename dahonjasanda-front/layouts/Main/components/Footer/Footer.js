import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="다혼자산다"
            width={120}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? '/images/logo/logo.png'
                  : 'images/logo/logo.png'
              }
              height={1}
              width={1}
            />
          </Box>
          {/* 링크들을 나누는 부분 */}
          {/* 링크들을 나누는 부분 */}
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/* 첫 번째 줄 */}
            <Grid item xs={12} container>
              <Grid item xs={6} container justifyContent="flex-end">
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>금융</Typography>
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>|</Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-start" gap={2}>
                <Link href="/deposit" color="text.primary">DEPOSIT</Link>
                <Link href="/loan" color="text.primary">LOAN</Link>
                <Link href="/stock" color="text.primary">STOCK</Link>
                <Link href="/mystock" color="text.primary">MYSTOCK</Link>
              </Grid>
            </Grid>
            {/* 두 번째 줄 */}
            <Grid item xs={12} container>
              <Grid item xs={6} container justifyContent="flex-end">
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>부동산</Typography>
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>|</Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-start" gap={2}>
                <Link href="/housingFront" color="text.primary">HOUSING</Link>
                <Link href="/calendar" color="text.primary">CALENDAR</Link>
                <Link href="/housing/housingMap" color="text.primary">청약맵</Link>
              </Grid>
            </Grid>
            {/* 세 번째 줄 */}
            <Grid item xs={12} container>
              <Grid item xs={6} container justifyContent="flex-end">
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>동식물</Typography>
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>|</Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-start" gap={2}>
                <Link href="/plant" color="text.primary">PLANT</Link>
                <Link href="/plantDetail" color="text.primary">PLANTDETAIL</Link>
                <Link href="/animal" color="text.primary">ANIMAL</Link>
                <Link href="/animalDetail" color="text.primary">ANIMALDETAIL</Link>
                <Link href="/plantBoard" color="text.primary">PLANTBOARD</Link>
              </Grid>
            </Grid>
            {/* 네 번째 줄 */}
            <Grid item xs={12} container>
              <Grid item xs={6} container justifyContent="flex-end">
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>파티원</Typography>
                <Typography color="text.primary" marginRight={5} fontWeight={"bold"}>|</Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-start" gap={2}>
                <Link href="/party" color="text.primary">소모임</Link>
                <Link href="/party/myparty" color="text.primary">나의 모임</Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; {new Date().getFullYear()} 다혼자산다. All rights reserved.
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
          gutterBottom
        >
          다혼자산다는 1인 가구를 위한 다양한 금융 정보(주식, 은행, 부동산), 식물 및 동물 관련 정보, 그리고 취미와 관심사를 공유할 수 있는 소모임을 제공하는 플랫폼입니다.
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
          gutterBottom
        >
          이용 약관 | 개인정보 처리방침 | 저작권 정책
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          본 사이트를 방문하거나 서비스를 이용함으로써, 당사 또는 당사의 공인 서비스 제공업체가 정보 저장을 위해 쿠키를 사용할 수 있으며, 이는 여러분에게 더 나은, 빠르고 안전한 경험을 제공하고 마케팅 목적으로 활용됩니다.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
