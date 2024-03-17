import React from 'react';
import IndexGraph from '../IndexGraph';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import Container from 'components/Container';

export const graph = [863, 854, 867, 869, 870, 864, 866, 858, 858, 859,
                      853, 845, 827, 812, 807, 808, 815, 799, 799, 819,
                      819, 837, 824, 836, 840, 840, 843, 840, 833, 855,
                      860, 868, 883, 875, 885, 879];
export const graph1 = [2652, 2625, 2647, 2668, 2664, 2653, 2658, 2680, 2649, 2614,
                      2620, 2650, 2620, 2610, 2576, 2591, 2615, 2542, 2497, 2499,
                      2501, 2479, 2470, 2470, 2479, 2464, 2473, 2440, 2436, 2498,
                      2526, 2525, 2540, 2542, 2561, 2568];

const CardWithAddButton = () => {
  const theme = useTheme();
  const pvalue = graph1[graph1.length -1];
  const dvalue = graph[graph.length -1];
  const pchangeValue = graph1[graph1.length -2] - pvalue;
  const dchangeValue = graph[graph.length -2] - dvalue;
  const prate = ((pchangeValue / pvalue) * 100).toFixed(2)
  const drate = ((dchangeValue / dvalue) * 100).toFixed(2)
  // const isNegative = pchangeValue.charAt(0) === '-';
  // const isNegative1 = dchangeValue.charAt(0) === '-';

  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Card sx={{ p: { xs: 4, md: 4 }, height: '100%', width: '45%' }}>
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column', sm: 'row' }}
              flex={'1 1 100%'}
              justifyContent={{ sm: 'space-between' }}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              marginBottom={4}
            >
              <Box marginBottom={{ xs: 2, sm: 0 }} flex={'1 1 100%'}>
                <Typography variant={'h3'} fontWeight={400}>
                  코스피
                </Typography>
                <Typography variant={'h4'} color={pchangeValue >= 0 ? 'red' : 'blue'}>
                  {pvalue}
                </Typography>
                <Typography variant={'h6'} color={pchangeValue >= 0 ? 'red' : 'blue'}>
                  {prate}% {pchangeValue}p
                </Typography>
                <IndexGraph data={graph}/>
                <Typography variant={'h6'} fontWeight={100} sx={{ textAlign: 'right' }}>
                  03.06 실시간
                </Typography>
              </Box>
            </Box>
          </Card>
          <Card sx={{ p: { xs: 4, md: 4 }, height: '100%', width: '45%' }}>
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column', sm: 'row' }}
              flex={'1 1 100%'}
              justifyContent={{ sm: 'space-between' }}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              marginBottom={4}
              height={'100%'}
            >
              <Box marginBottom={{ xs: 2, sm: 0 }} flex={'1 1 100%'} >
                <Typography variant={'h3'} fontWeight={400}>
                  코스닥
                </Typography>
                <Typography variant={'h4'} color={dchangeValue >= 0 ? 'red' : 'blue'}>
                  {dvalue}
                </Typography>
                <Typography variant={'h6'} color={dchangeValue >= 0 ? 'red' : 'blue'}>
                  {drate}% {dchangeValue}p
                </Typography>
                <IndexGraph data={graph1} height={100}/>
                <Typography variant={'h6'} fontWeight={100} sx={{ textAlign: 'right'}}>
                  03.06 실시간
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default CardWithAddButton;
