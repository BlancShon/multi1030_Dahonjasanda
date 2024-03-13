import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import bankimage from '../../../../src/images/banks/wr_bank.png'
import cardimage from '../../../../src/images/cards/wr_card.jpg'


const savingsPlanData = [
  {
    image: bankimage,
    ProductName: '우리SUPER 주거래적금',
    SubscriptionPeriodOptions: '1년, 2년, 3년',
    SubscriptionAmountLimits: '최소 50만원 이상',
    InterestRates: '연 2.55%~',
    AccountOpeningChannels: '인터넷뱅킹, 스마트뱅킹, 전국 우리은행 영업점',
    SpecialConditionsorBonuses: '우리은행 주거래고객 1.9%p 추가금리',
  },
  {
    image: cardimage,
    ProductName: '우리SUPER 주거래적금',
    SubscriptionPeriodOptions: '1년, 2년, 3년',
    SubscriptionAmountLimits: '최소 50만원 이상',
    InterestRates: '연 2.55%~',
    AccountOpeningChannels: '인터넷뱅킹, 스마트뱅킹, 전국 우리은행 영업점',
    SpecialConditionsorBonuses: '우리은행 주거래고객 1.9%p 추가금리',
  },
  {
    image: bankimage,
    ProductName: '우리SUPER 주거래적금',
    SubscriptionPeriodOptions: '1년, 2년, 3년',
    SubscriptionAmountLimits: '최소 50만원 이상',
    InterestRates: '연 2.55%~',
    AccountOpeningChannels: '인터넷뱅킹, 스마트뱅킹, 전국 우리은행 영업점',
    SpecialConditionsorBonuses: '우리은행 주거래고객 1.9%p 추가금리',
  },
  {
    image: cardimage,
    ProductName: '우리SUPER 주거래적금',
    SubscriptionPeriodOptions: '1년, 2년, 3년',
    SubscriptionAmountLimits: '최소 50만원 이상',
    InterestRates: '연 2.55%~',
    AccountOpeningChannels: '인터넷뱅킹, 스마트뱅킹, 전국 우리은행 영업점',
    SpecialConditionsorBonuses: '우리은행 주거래고객 1.9%p 추가금리',
  },
  {
    image: bankimage,
    ProductName: '우리SUPER 주거래적금',
    SubscriptionPeriodOptions: '1년, 2년, 3년',
    SubscriptionAmountLimits: '최소 50만원 이상',
    InterestRates: '연 2.55%~',
    AccountOpeningChannels: '인터넷뱅킹, 스마트뱅킹, 전국 우리은행 영업점',
    SpecialConditionsorBonuses: '우리은행 주거래고객 1.9%p 추가금리',
  },
  {
    image: cardimage,
    ProductName: '우리SUPER 주거래적금',
    SubscriptionPeriodOptions: '1년, 2년, 3년',
    SubscriptionAmountLimits: '최소 50만원 이상',
    InterestRates: '연 2.55%~',
    AccountOpeningChannels: '인터넷뱅킹, 스마트뱅킹, 전국 우리은행 영업점',
    SpecialConditionsorBonuses: '우리은행 주거래고객 1.9%p 추가금리',
  },
];

const VerticalMinimalDesignedBlogCards = () => {
  const theme = useTheme();

  // Log the image paths
  console.log(
    "Image paths:",
    savingsPlanData.map((plan) => plan.image)
  );

  return (
    <Container>
      <Grid container spacing={4}>
        {savingsPlanData.map((plan, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                width: 1,
                height: 1,
                boxShadow: 4,
                display: 'flex',
                flexDirection: 'row', // Change to row
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
                height: 200,
              }}
            >
              <CardMedia
                component="img"
                image={plan.image.src}
                alt={`${plan.ProductName} image`}
                sx={{
                  width: '30%', // Set the width to 30%
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <CardContent
                sx={{
                  width: '70%', // Set the width to 70%
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {plan.ProductName}
                </Typography>
                <Typography color="text.secondary">
                  가입 기간: {plan.SubscriptionPeriodOptions}
                </Typography>
                <Typography color="text.secondary">
                  가입 한도: {plan.SubscriptionAmountLimits}
                </Typography>
                <Typography color="text.secondary">
                  이자율: {plan.InterestRates}
                </Typography>
                <Typography color="text.secondary">
                  계좌 개설 채널: {plan.AccountOpeningChannels}
                </Typography>
                <Typography color="text.secondary">
                  특별 조건: {plan.SpecialConditionsorBonuses}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VerticalMinimalDesignedBlogCards;
