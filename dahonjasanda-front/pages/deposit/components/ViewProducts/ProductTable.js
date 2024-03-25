import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const ProductTable = ({ products, category }) => {
  const theme = useTheme();

  // Function to return the image URL or a fallback if not available
  const getImageUrl = (finCoNo) => `/images/deposit/banks/${finCoNo}.png`;
  console.log("6. 카테고리 값 from ProductTable:", category);
  console.log("Products data from ProductTable:", products);
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>은행</TableCell>
            <TableCell align="right">상품명</TableCell>
            {category === 'annuity-savings' ? (
              <>
                <TableCell align="right">월 납입금액</TableCell>
                <TableCell align="right">연금 수령 금액</TableCell>
              </>
            ) : (
              <>
                <TableCell align="right">기본금리</TableCell>
                <TableCell align="right">최고금리</TableCell>
              </>
            )}
            <TableCell align="right">상세정보</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <img
                  src={getImageUrl(product.finCoNo)}
                  alt={`${product.korCoNm} 로고`}
                  onError={(e) => (e.target.src = "/images/deposit/banks/Citi.png")}
                  style={{ width: "100px", height: "33px", objectFit: "contain" }}
                />
                {product.korCoNm}
              </TableCell>
              <TableCell align="right">{product.finPrdtNm}</TableCell>
              {category === 'annuity-savings' ? (
                <>
                  <TableCell align="right">{product.monPaymAtmNm}</TableCell>
                  <TableCell align="right">{product.pnsnRecpTrmNm}</TableCell>
                </>
              ) : (
                <>
                  <TableCell align="right">{product.intrRate}%</TableCell>
                  <TableCell align="right">{product.intrRate2}%</TableCell>
                </>
              )}
              <TableCell align="right"><Button variant="outlined">보기</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;