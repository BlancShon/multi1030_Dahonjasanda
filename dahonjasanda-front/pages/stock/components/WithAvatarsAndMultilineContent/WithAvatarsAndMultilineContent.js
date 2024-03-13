import React, { useState } from 'react';

import Paging from '../Pagination';
import IndexGraph from '../IndexGraph';
import ImageLinkButton from '../ImgButton/imagelinkbutton';
import Container from 'components/Container';

import { alpha, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';




const graph = [863, 854, 867, 869, 870, 864, 866, 858, 858, 859,
  853, 845, 827, 812, 807, 808, 815, 799, 799, 819,
  819, 837, 824, 836, 840, 840, 843, 840, 833, 855,
  860, 868, 883, 875, 885, 879];

const WithAvatarsAndMultilineContent = ({list}) => {
  const theme = useTheme();

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const Last = page * itemsPerPage;
  const First = Last - itemsPerPage;
  const currentItems = list.slice(First, Last);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handlePageChange = (newPage)=>{
    setPage(newPage);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: 'alternate.main' }}>
            <TableRow>
              <TableCell>
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  #
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  종목명
                </Typography>
              </TableCell>
              <TableCell >
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Symbol
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  추세
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  현재가
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  등락률
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  시가총액
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  거래량ㆍ거래대금
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color={'text.secondary'}
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  MyStock
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow
                key={item.no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <List sx={{ p: 0, m: 0 }}>
                    <ListItem sx={{ p: 0, m: 0 }}>
                      <ListItemText
                        primary={item.no}
                      />
                    </ListItem>
                  </List>
                </TableCell>
                <TableCell align="center">
                  <Typography>{item.name}</Typography>
                </TableCell>
                <TableCell>
                  <List sx={{ p: 0, m: 0 }}>
                    <ListItem sx={{ p: 0, m: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ width: 70, height: 70}} src={item.symbol} alt={item.name}/>
                      </ListItemAvatar>
                      <ListItemText
                      />
                    </ListItem>
                  </List>
                </TableCell>
                <TableCell align="center" sx={{ width : '100px', height: '100px' }}>
                  <IndexGraph data={graph} />
                </TableCell>
                <TableCell align="center">
                  <Typography>{item.price1}</Typography>
                  <Typography color={item.price2.startsWith('-') ? 'red' : 'blue'} variant={'subtitle2'}>
                    {item.price2}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button
                    href={`/stockview=${item.no}`}
                    style={{ backgroundColor: parseFloat(item.gap.replace('%', ''))
                       < 0 ? 'red' : 'blue', color: 'white'}}>
                        {item.gap}
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    color={'primary'}
                    variant={'subtitle2'}
                    fontWeight={700}
                    sx={{ cursor: 'pointer' }}
                  >
                    {item.tot}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                <Typography>{item.trade}</Typography>
                  <Typography
                    color={'primary'}
                    variant={'subtitle2'}
                    fontWeight={700}
                    sx={{ cursor: 'pointer' }}
                  >
                    {item.trade2}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: '70px', height: '70px' }} >
                  <ImageLinkButton
                    src="/images/stock/icon/wallet.png"
                    alt="Edit"
                    to="/mystock"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paging count={totalPages} currentPage={page} onPageChange={handlePageChange}/>
    </Container>
  );
};

export default WithAvatarsAndMultilineContent;
