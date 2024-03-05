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
import HeroSection from '../components/HeroSection';

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
      <HeroSection
        backgroundImage="/images/hero-image-v2.jpg"
        title="다혼자산다. 1인 가구(경제, 금융, 제태크) 솔루션 플랫폼"
      />
      <Footer />
    </>
  )
}
