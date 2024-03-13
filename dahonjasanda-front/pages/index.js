import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from './deposit/components';
import { Card, CardContent, Grid, Typography } from '@mui/material';

import customBackgroundImage from '../src/images/main-hero.png';


const indexPage = () => {

return (
        <Main>
                <Hero backgroundImage={customBackgroundImage}
                    titleText=""
                    subtitleText=""
                    subtitleText2=""
                    opacity={0}
                    />
                <Box mt={5}>
                    <h1 style={{ textAlign: 'center' }}>혼자를 위한 금융 정보</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />



                    <Container>
                        <Box display="flex" justifyContent="space-between">
                            <Box width="50%">
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            오늘의 주식정보
                                        </Typography>
                                        {/* Add code to display stock information and graphs */}
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box width="50%">
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    최고 금리 상품 1
                                                </Typography>
                                                {/* Add code to display top interest rate product 1 */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    최고 금리 상품 2
                                                </Typography>
                                                {/* Add code to display top interest rate product 2 */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    최고 금리 상품 3
                                                </Typography>
                                                {/* Add code to display top interest rate product 3 */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    최고 금리 상품 4
                                                </Typography>
                                                {/* Add code to display top interest rate product 4 */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Box mt={5}>
                    <h1 style={{ textAlign: 'center' }}>욜로를 위한 부동산 정보</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <Container>
                        <Box display="flex" justifyContent="space-between">
                            <Box width="50%">
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            부동산 관련 이미지 1
                                        </Typography>
                                        {/* Add code to display 부동산 관련 이미지 1 */}
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box width="50%">
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            부동산 관련 이미지 2
                                        </Typography>
                                        {/* Add code to display 부동산 관련 이미지 2 */}
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                <Box mt={5} display="flex" justifyContent="space-between">
                    <Box width="50%">
                    <h1 style={{ textAlign: 'center' }}>어떤 식물을 찾고 있나요?</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            식물 1
                                        </Typography>
                                        {/* Add code to display top interest rate product 1 */}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            식물 2
                                        </Typography>
                                        {/* Add code to display top interest rate product 2 */}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box width="50%">
                    <h1 style={{ textAlign: 'center' }}>어떤 동물을 찾고 있나요?</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            동물 1
                                        </Typography>
                                        {/* Add code to display top interest rate product 1 */}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            동물 2
                                        </Typography>
                                        {/* Add code to display top interest rate product 2 */}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                    

                </Box>
        </Main>
);
}

export default indexPage;
