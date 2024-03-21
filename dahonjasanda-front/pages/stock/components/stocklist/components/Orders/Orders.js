import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'; 
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';


const Orders = ({ list }) => {
  const theme = useTheme();

  const handleDeleteItem =(index)=>{
  }


  return (
    <Box>
      {list.map((item, i) => (
        <Box key={i}>
          <Box 
            display={'block'}
            justifyContent={'space-between'}
          >
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column', sm: 'row' }}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              style={{ marginRight: 10}}
            >
              <Avatar
                src={item.symbol}
                alt={item.name}
                sx={{
                  width: 60,
                  height: 60,
                  marginRight: 10,
                }}
              />
              <Box sx={{ justifyContent:'center'}}>
                <Typography fontWeight={'900'} gutterBottom>
                  {item.name}
                </Typography>
                <Typography
                    color={'text.secondary'}
                    variant={'subtitle2'}
                    fontWeight={'300'}
                    gutterBottom
                  >
                    보유수량 : 
                    <Typography
                      variant={'inherit'}
                      component={'span'}
                      color={'inherit'}
                      fontWeight={'900'}
                    > {item.amount}
                    </Typography>
                  </Typography>
              </Box>
              <Stack
                spacing={2}
                direction="column"
                style={{ marginRight: 30, marginLeft: 60}}
              >
                <Box sx={{ justifyContent: 'center'}}>
                  <Typography
                    color={'text.secondary'}
                    variant={'subtitle2'}
                    fontWeight={'300'}
                    gutterBottom
                  >
                    자산가치 :
                    <Typography
                      variant={'inherit'}
                      component={'span'}
                      color={'inherit'}
                      fontWeight={'900'}
                    > {'₩ '+(item.stockprice * item.amount).toLocaleString()}
                    </Typography>
                  </Typography>
                  <Typography
                    color={((item.stockprice - item.purchaseprice) * item.amount) >= 0 ? 'red' : 'blue'}
                    variant={'subtitle2'}
                    gutterBottom
                    fontWeight={'300'}
                  >
                    수익 : 
                    <Typography
                      variant={'inherit'}
                      component={'span'}
                      color={'inherit'}
                      fontWeight={'900'}
                    > {'₩ '+((item.stockprice - item.purchaseprice) * item.amount).toLocaleString()}
                      ({(((item.stockprice - item.purchaseprice) / item.purchaseprice) * 100) >= 0 ? '▲' : '▼'}
                        {(((item.stockprice - item.purchaseprice) / item.purchaseprice) * 100).toFixed(2)}%)
                    </Typography>
                  </Typography>
                </Box>
              </Stack>
              <Stack
                spacing={2}
                direction={'column'}
                style={{ marginLeft: 20, marginRight: 30}}
              >
                <Box>
                  <Typography
                    color={item.stockprice >= item.purchaseprice ? 'red' : 'blue'}
                    variant={'subtitle2'}
                    gutterBottom
                    fontWeight={'300'}
                  >
                    현재가 : 
                    <Typography
                      variant={'inherit'}
                      component={'span'}
                      color={'inherit'}
                      fontWeight={'900'}
                    > {'₩ '+item.stockprice.toLocaleString()}
                    ({(((item.stockprice - item.purchaseprice) / item.purchaseprice)*100).toFixed(2)}%)
                    </Typography>
                  </Typography>
                  <Typography
                    color={'text.secondary'}
                    variant={'subtitle2'}
                    fontWeight={'300'}
                    noWrap={true}
                    gutterBottom
                  >
                    구매가:
                    <Typography
                      variant={'inherit'}
                      component={'span'}
                      color={'inherit'}
                      fontWeight={'900'}
                    > {'₩ '+item.purchaseprice.toLocaleString()}
                    </Typography>
                  </Typography>
                </Box>
              </Stack>
              <Fab size="small" color="secondary" onClick={()=> handleDeleteItem(i)}>
                <DeleteIcon />
              </Fab>
            </Box>
          </Box>
          <Divider
            sx={{
              marginY: { xs: 2, sm: 4 },
              display: i === list.length - 1 ? 'none' : 'block',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Orders;
