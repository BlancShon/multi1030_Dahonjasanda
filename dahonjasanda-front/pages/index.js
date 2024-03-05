'use client';


import { Inter } from 'next/font/google'
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider, Container, Box, Typography, TextField, Button } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })
const defaultTheme = createTheme();

export default function Home() {

  // const router = useRouter();
  // const [searchType, setSearchType] = useState(null);
  // const [searchValue, setSearchValue] = useState('');

  // Example state for handling search input (if needed)
  const [searchInput, setSearchInput] = React.useState('');

  // Function to handle search action (if needed)
  const handleSearch = () => {
    console.log(searchInput); // Implement your search logic here
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        {/* Hero section with simulated parallax effect */}
        <Box
          sx={{
            backgroundImage: 'url(/images/hero-image-v2.jpg)',
            backgroundAttachment: 'fixed', // Simulate parallax effect
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '65vh', // Adjusted to match your requirement
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            pt: '5rem', // Added padding top
            pb: '4rem', // Added padding bottom
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: 'center', maxWidth: '856px' }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ mb: '3rem', px: '1rem' }}>
              다혼자산다. 1인 가구(경제, 금융, 제태크) 솔루션 플랫폼
            </Typography>
            {/* Search Bar and Dropdowns simulated */}
            <Box
              component="form"
              sx={{
                mt: 3,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Responsive design
                alignItems: 'center',
                justifyContent: 'space-between', // Distribute space
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{ background: '#fff', borderRadius: 1, mb: { xs: 2, md: 0 } }}
              />
              <Button variant="contained" onClick={handleSearch} sx={{ width: { md: '20%' } }}>
                Go
              </Button>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
      <Footer />
    </>
  )
}
