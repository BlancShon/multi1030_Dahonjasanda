import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Pagination from '@mui/material/Pagination'; // MUI Pagination 컴포넌트를 사용하기 위해 추가
import Button from '@mui/material/Button'; // 버튼 컴포넌트 추가
import Link from "next/link";

import Container from "components/Container";
// import bankimage from "../../../../src/images/banks/wr_bank.png";
// import cardimage from "../../../../src/images/cards/wr_card.jpg";

// Import the Axios service functions at the top of your component file
import { findDepositList, findCompanyList, findTopInterestRateSavings, findTopInterestRateTermDeposits } from "../../DepositsApiService";


const VerticalMinimalDesignedBlogCards = ({ category }) => {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // 페이지당 항목 수, 필요에 따라 조정 가능
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수

  const [sortField, setSortField] = useState('intrRate'); // Default sorting by intrRate
  const [sortOrder, setSortOrder] = useState('desc'); // Default sorting order

  const getImageUrl = (finCoNo) => {
    return `/images/deposit/banks/${finCoNo}.png`;
  };

  // Function to handle sort field change
  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };

  // Sorting function based on selected field and order
  const sortProducts = (products) => {
    return products.sort((a, b) => {
      const valueA = sortOrder === 'asc' ? a[sortField] : b[sortField];
      const valueB = sortOrder === 'asc' ? b[sortField] : a[sortField];
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    });
  };

  // 예금 상품 데이터를 가져옵니다.
  useEffect(() => {
    const fetchDefaultProducts = async () => {
      try {
        // Fetch high interest rate savings and term deposits
        const savingsResponse = await findTopInterestRateSavings();
        const termDepositsResponse = await findTopInterestRateTermDeposits();
    
        // Assuming both savingsResponse and termDepositsResponse contain more than 5 items each,
        // and you want to limit the total to 10, taking as many as possible from each up to 5.
        // Adjust the slice number if you prefer a different distribution.
        const maxItemsPerCategory = 5;
        const combinedProducts = [
          ...savingsResponse.data.content.slice(0, maxItemsPerCategory), 
          ...termDepositsResponse.data.content.slice(0, maxItemsPerCategory)
        ];
    
        // If the total combinedProducts is still more than 10, slice it to limit to 10
        setProducts(combinedProducts.slice(0, 10));
        // totalPages might not be relevant here since we're manually limiting the number of items.
      } catch (error) {
        console.error("Error fetching default high interest rate products:", error);
        setProducts([]);
      }
    };

    if (!category) {
      // 카테고리가 선택되지 않았을 때 기본 추천 상품 불러오기
      fetchDefaultProducts();
    } else {
      const fetchDeposits = async () => {
        try {
          // 현재 페이지와 페이지 사이즈 정보를 포함하여 데이터 요청
          const response = await findDepositList(`/${category}?page=${currentPage}&size=${pageSize}`);
          const { content, totalPages } = response.data;
          setProducts(content);
          setTotalPages(totalPages); // 총 페이지 수 설정
        } catch (error) {
          console.error("Error fetching deposits data:", error);
          setProducts([]);
        }
      };

      fetchDeposits();
    }
  }, [category, currentPage, pageSize]);

  // 페이지 변경 핸들러
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // 회사 목록 데이터를 가져옵니다.
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await findCompanyList();
        console.log("Companies data:", response.data);
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies data:", error);
      }
    };

    fetchCompanies();
  }, []); // 의존성 배열을 빈 배열로 두어 컴포넌트 마운트 시에만 실행됩니다.


  return (
    <Container>
      <Grid container spacing={4}>
            <Box sx={{ marginBottom: 1, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" marginRight={2}>정렬</Typography>
              <select value={sortField} onChange={handleSortFieldChange}>
                <option value="intrRate">기본 금리순</option>
                <option value="intrRate2">최고 우대 금리순</option>
              </select>
            </Box>
        {products.map((product, index) => (
          <Grid item xs={12} key={index}>
            {/* <Link href={`/deposit/${index}`} passHref> */}
            <Card
              sx={{
                width: 1,
                height: 1,
                boxShadow: 4,
                display: "flex",
                flexDirection: "row", // Change to row
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: "20%", // 이미지와 같은 너비 설정
                  display: "inline-block", // 인라인 블록으로 설정하여 텍스트와 올바르게 정렬
                  boxSizing: "border-box", // 패딩을 포함한 총 너비 유지
                }}
              >
                <CardMedia
                  component="img"
                  src={getImageUrl(product.finCoNo)}
                  alt={`${product.korCoNm} 로고`}
                  onError={(e) => (e.target.src = "../images/deposit/banks/Citi.png")}
                  sx={{
                    width: "100%", // 감싸는 컨테이너에 맞게 너비 조정
                    height: "100%", // 필요한 경우 높이 조정
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  width: "80%", // 전체 카드 대비 내용 영역의 너비 설정
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* ProductName을 상단에 배치 */}
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ marginBottom: "1px" }}
                >
                  {product.finPrdtNm}
                </Typography>
                {/* 상품 이름과 상세 정보를 구분하는 선 */}
                <Divider sx={{ marginBottom: "16px" }} />

                <Grid container spacing={2} alignItems="flex-start">
                  {/* 각 항목에 대한 라벨 */}

                  {!category && (
                    <Grid item xs={3} sx={{ paddingRight: "24px" }}>
                      {" "}
                      {/* 여기에 오른쪽 패딩 추가 */}
                      <Typography color="text.secondary">기본 금리</Typography>
                      <Typography color="text.secondary">최고 우대 금리</Typography>
                      <Typography color="text.secondary">저축 기간</Typography>
                      <Typography color="text.secondary">만기후 이자율</Typography>
                    </Grid>
                  )}
                  {category === 'term-deposits' && (
                    <Grid item xs={3} sx={{ paddingRight: "24px" }}>
                      {" "}
                      {/* 여기에 오른쪽 패딩 추가 */}
                      <Typography color="text.secondary">기본 금리</Typography>
                      <Typography color="text.secondary">최고 우대 금리</Typography>
                      <Typography color="text.secondary">저축 기간</Typography>
                      <Typography color="text.secondary">만기후 이자율</Typography>
                    </Grid>
                  )}
                  {category === 'savings' && (
                    <Grid item xs={3} sx={{ paddingRight: "24px" }}>
                      {" "}
                      {/* 여기에 오른쪽 패딩 추가 */}
                      <Typography color="text.secondary">기본 금리</Typography>
                      <Typography color="text.secondary">최고 우대 금리</Typography>
                      <Typography color="text.secondary">저축 기간</Typography>
                      <Typography color="text.secondary">만기후 이자율</Typography>
                    </Grid>
                  )}
                  {category === 'annuity-savings' && (
                    <Grid item xs={3} sx={{ paddingRight: "24px" }}>
                      {" "}
                      {/* 여기에 오른쪽 패딩 추가 */}
                      <Typography color="text.secondary">월 납입금액</Typography>
                      <Typography color="text.secondary">납입 기간</Typography>
                      <Typography color="text.secondary">연금 수령 금액</Typography>
                      <Typography color="text.secondary">수령 시작 나이</Typography>
                    </Grid>
                  )}

                  {/* 라벨과 데이터 사이의 수직 구분선 대신 패딩 또는 테두리 사용 */}

                  {/* 데이터 값 */}
                  {!category && (
                    <Grid
                      item
                      xs={8}
                      sx={{
                        borderLeft: 2, // 테두리 두께 설정
                        borderColor: "divider", // 테두리 색상 설정, 'divider'는 테마에서 정의된 기본 구분선 색상
                        paddingLeft: "24px", // 내용과 테두리 사이에 간격 추가
                      }}
                    >
                      <Typography color="text.primary">
                        {product.intrRate}%
                      </Typography>
                      <Typography color="text.primary">
                        {product.intrRate2}%
                      </Typography>
                      <Typography color="text.primary">
                        {product.saveTrm}개월
                      </Typography>
                      <Typography color="text.primary">
                        {product.mtrtInt}
                      </Typography>
                    </Grid>
                  )}
                  {category === 'term-deposits' && (
                    <Grid
                      item
                      xs={8}
                      sx={{
                        borderLeft: 2, // 테두리 두께 설정
                        borderColor: "divider", // 테두리 색상 설정, 'divider'는 테마에서 정의된 기본 구분선 색상
                        paddingLeft: "24px", // 내용과 테두리 사이에 간격 추가
                      }}
                    >
                      <Typography color="text.primary">
                        {product.intrRate}%
                      </Typography>
                      <Typography color="text.primary">
                        {product.intrRate2}%
                      </Typography>
                      <Typography color="text.primary">
                        {product.saveTrm}개월
                      </Typography>
                      <Typography color="text.primary">
                        {product.mtrtInt}
                      </Typography>
                    </Grid>
                  )}
                  {category === 'savings' && (
                    <Grid
                      item
                      xs={8}
                      sx={{
                        borderLeft: 2, // 테두리 두께 설정
                        borderColor: "divider", // 테두리 색상 설정, 'divider'는 테마에서 정의된 기본 구분선 색상
                        paddingLeft: "24px", // 내용과 테두리 사이에 간격 추가
                      }}
                    >
                      <Typography color="text.primary">
                        {product.intrRate}%
                      </Typography>
                      <Typography color="text.primary">
                        {product.intrRate2}%
                      </Typography>
                      <Typography color="text.primary">
                        {product.saveTrm}개월
                      </Typography>
                      <Typography color="text.primary">
                        {product.mtrtInt}
                      </Typography>
                    </Grid>
                  )}
                  {category === 'annuity-savings' && (
                    <Grid
                      item
                      xs={8}
                      sx={{
                        borderLeft: 2, // 테두리 두께 설정
                        borderColor: "divider", // 테두리 색상 설정, 'divider'는 테마에서 정의된 기본 구분선 색상
                        paddingLeft: "24px", // 내용과 테두리 사이에 간격 추가
                      }}
                    >
                      <Typography color="text.primary">
                        {product.monPaymAtmNm}
                      </Typography>
                      <Typography color="text.primary">
                        {product.paymPrdNm}
                      </Typography>
                      <Typography color="text.primary">
                        {product.pnsnRecpAmt}
                      </Typography>
                      <Typography color="text.primary">
                        {product.pnsnStrtAgeNm}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
            {/* </Link> */}
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={4}>
        {/* 페이지네이션 컴포넌트 추가 */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined" 
          shape="rounded"
          size="large"
        />
      </Box>
    </Container>
  );
};

export default VerticalMinimalDesignedBlogCards;
