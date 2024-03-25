import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from './deposit/components';
import { Card, CardContent, Grid, Typography } from '@mui/material';



// 지수
import CardWithAddButton from "./stock/components/CardWithAddButton";
// 금리
import ResultList from "./loan/components/ResultList";
import { findLoanList } from "./loan/LoansApiService";

const indexPage = () => {
    const [topRateProducts, setTopRateProducts] = useState([]);
    const [pageable, setPageable] = useState({});
    const [page, setPage] = useState(0); // 페이지 상태 추가
    
    useEffect(() => {
        const fetchTopRateProducts = async () => {
            try {
                // 예시로 모든 대출 상품을 조회하는 경우
                const response = await findLoanList('/mortgages?page=0'); // 필요한 파라미터에 맞게 수정
                const sortedProducts = response.data.content.sort((a, b) => b.rate - a.rate).slice(0, 2); // 최고 금리 상품 두 개 선택
                
                setTopRateProducts(sortedProducts);
                setPageable({
                    totalPages: response.data.totalPages,
                    totalElements: response.data.totalElements,
                    // 기타 필요한 pageable 정보 설정
                });
            } catch (error) {
                console.error("Error fetching top rate products:", error);
            }
        };

        fetchTopRateProducts();
    }, []);

    const imageName = "main-hero.png";
    
return (
        <Main>
                <Hero backgroundImage={imageName}
                    titleText=""
                    subtitleText=""
                    subtitleText2=""
                    opacity={0}
                    />
                <Box mt={1}>
                    <h1 style={{ textAlign: 'center'}}>혼자를 위한 금융 정보</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <Container>
                        <Box display="flex" justifyContent="center">
                            <Box width="100%">
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            오늘의 주식정보
                                        </Typography>
                                        {/* Add code to display stock information and graphs */}
                                        <CardWithAddButton />
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Box mt={5}>
                    <h1 style={{ textAlign: 'center' }}>혼자를 위한 대출 정보</h1>
                    <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
                    <Container>
                        <Box>
                            <Box>
                            <Container className="mt-3">
                                {/* 최고 금리 상품을 ResultList 컴포넌트로 표시 */}
                                <ResultList resultList={topRateProducts} onChangePageHandler={setPage} pageable={pageable} category={"mortgages"} />
                            </Container>
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
