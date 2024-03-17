import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Orders  from './components/Orders';

import Container from 'components/Container';

const StockList = ({ list }) => {
  return (
    <Container>
      <Box>
        <Typography variant="h6" fontWeight={700} marginBottom={4}>
            보유 종목
        </Typography>
        <Box
            bgcolor={'alternate.main'}
            p={4}
            borderRadius={2}
            display={'flex'}
            justifyContent={'center'}
            >
            <Orders list={list}/>
        </Box>
      </Box>
    </Container>
  );
};

export default StockList;
