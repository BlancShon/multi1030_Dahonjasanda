import React, { useState, useEffect } from "react";

import Main from "layouts/Main";
import Container from "components/Container";
import { useRouter } from 'next/router';

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import PieChart from "./components/piechart";
import LabTabs from "./components/tabpanel/tabpanel";
import HeroSection from "./components/hero/herosection";
import sto from '../../public/assets/mystock.json';

export const stock = sto.stock;

const Stocks = stock.filter(item => item.amount !== 0);

const presentPrice = Stocks.reduce((total, item)=> total + item.stockprice * item.amount, 0);
const pastPrice = Stocks.reduce((total, item)=> total + item.purchaseprice * item.amount, 0);
const fmtTPrice = presentPrice.toLocaleString();

const Income = presentPrice - pastPrice;
const fmtIncome = Income >= 0 ? `+₩${Income.toLocaleString()}` : `-₩${Math.abs(Income).toLocaleString()}`;

const profitRate = (presentPrice - pastPrice) / pastPrice * 100;
const profitIcon = Income >=0 ? "▲" : "▼";
const profitColor = Income >=0 ? "blue" : "red";

function MyStock() {
    const theme = useTheme();
    const labels = Stocks.map(item=>item.name);
    const series = Stocks.map(item=>item.amount);

    const router = useRouter();
    const [page, setPage] = useState(null);

    useEffect(() => {
      
      if (!router.isReady) {
          return;
      }
      
      const { page } = router.query;
      setPage(page);

  }, [router.isReady]);
    
    return(
        <Main colorInvert={true}>
          <HeroSection imageUrl="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVeNAZ%2FbtrOvf3iz2z%2FyWLsUt3j2QKEW6yWzoDlt1%2Fimg.png"/>
          <Container>
            <Box sx={{ borderBottom: '1px solid #ccc', mb: 2 }}>
              <Box bgcolor={"alternate.main"} position={"relative"} sx={{ pb: 2 }}>
                  <Typography variant="h4">나의 총 자산</Typography>
                  <Typography variant="h2">₩{fmtTPrice}</Typography>
                  <Typography variant="h5" 
                              style={{ color: profitColor}}
                  >평가손익 {fmtIncome}({profitIcon}{profitRate.toFixed(2)}%)</Typography>
              </Box>
            </Box>
            <Box sx={{ borderBottom: '1px solid #ccc', pb: 2, mb: 3 }}>
              <Box>
                <PieChart labels={labels} series={series}/>
              </Box>
            </Box>
            <Box>
              <LabTabs list={Stocks} slist={stock}/>
            </Box>
          </Container>
        </Main>
    );
}

export default MyStock;