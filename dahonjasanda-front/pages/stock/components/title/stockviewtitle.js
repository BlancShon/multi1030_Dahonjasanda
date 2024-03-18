import React from 'react';
import Container from "components/Container";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import Clock from '../clock/clock';
import IndexGraph from '../IndexGraph';
import Card from '@mui/material/Card';

function ViewTitle({ list, list1, list2 }) {

    return(
        <Container>
            <Box borderBottom={1} borderColor="divider">
                <Box>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={8}>
                            <Box>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6" fontSize="1rem">
                                            &nbsp;{list && list.scode}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" fontWeight={200} fontSize="1rem">
                                            코스피
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="h4">
                                    {list && list.sname}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h3">
                                    {list && list.price.toLocaleString()}원
                                </Typography>
                                <Grid container spcaing={3} alignItems="center">
                                    <Grid item>
                                        <CurrencyExchangeRoundedIcon fontSize="small" color={list && (list.price - list.yprice) >= 0 ? 'primary' : 'secondary'}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography color={list && (list.price - list.yprice) >= 0 ? 'blue' : 'red'}>
                                            &nbsp;&nbsp;{list && (list.price - list.yprice) >= 0 ? '▲' : '▼'} {list && (list.price - list.yprice).toLocaleString()}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color={list && ((list.price - list.yprice) / list.yprice) * 100 >= 0 ? 'blue' : 'red'}> 
                                            ({list && ((list.price - list.yprice) / list.yprice) * 100 >= 0 ? '+' : '-'}
                                            {list && (((list.price - list.yprice) / list.yprice) * 100).toFixed(2)}%)
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} alignItems="center" style={{ marginBottom: 10 }}>
                                    <Grid item>
                                        <AccessAlarmRoundedIcon fontSize="small" color={list1 && list1.sdate.includes('장중') ? 'success' : 'action'}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: list1 && list1.sdate.includes('장중') ? 'green' : 'orange' }}>
                                            {list1 && list1.sdate}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Clock />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <IndexGraph data={list2} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default ViewTitle;