import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Pagination, Typography } from "@mui/material";
import ProductTable from './ProductTable'; // 각 상품 카드를 렌더링하는 컴포넌트
import { findDepositList, findTopInterestRateSavings, findTopInterestRateTermDeposits } from '../../DepositsApiService';

const ViewProducts = ({ category, searchTerm, checked, setChecked }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // 카테고리에 따른 텍스트 매핑
  const categoryTitles = {
    default: '최고금리 TOP 10 상품',
    'term-deposits': '예금',
    savings: '적금',
    'annuity-savings': '연금'
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let response;
        if (category === 'default') {
          const savingsResponse = await findTopInterestRateSavings();
          const termDepositsResponse = await findTopInterestRateTermDeposits();
          console.log("Savings response:", savingsResponse);
          console.log("Term deposits response:", termDepositsResponse);

          const savingsProducts = savingsResponse.data.content || [];
          const termDepositsProducts = termDepositsResponse.data.content || [];
          const combinedProducts = [...savingsProducts.slice(0, 5), ...termDepositsProducts.slice(0, 5)].slice(0, 10);

          console.log("Combined products:", combinedProducts);
          setProducts(combinedProducts);
          setTotalPages(1);
        } else {

          // 체크된 상태를 쿼리 파라미터로 변환
          const searchParams = Object.entries(checked).reduce((acc, [key, values]) => {
            if (values.length) {
              acc.append(key, values.join('&'));
            }
            return acc;
          }, new URLSearchParams({
            keyword: searchTerm,
            page: currentPage - 1 // 0-based page index
          }));

          console.log(`Fetching products for category: ${category} with search params: '${searchParams.toString()}'...`);
          response = await findDepositList(`${category}?${searchParams.toString()}`);
          console.log(`Response for category '${category}':`, response);

          setProducts(response.data.content || []);
          setTotalPages(response.data.totalPages || 0);
        }
      } catch (error) {
        console.error(`Error fetching data for ${category}:`, error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category, currentPage, searchTerm, checked]);

  const handlePageChange = (event, newValue) => {
    setCurrentPage(newValue);
    console.log(`Changing page to: ${newValue}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
          {categoryTitles[category]}
        </Typography>
      {/* Optionally, display loading/error states here */}
      <ProductTable products={products} category={category} />
      
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
          color="primary"
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Box>
    </Container>
  );
};

export default ViewProducts;