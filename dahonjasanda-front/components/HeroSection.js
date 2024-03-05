import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, ThemeProvider, createTheme } from '@mui/material';

const defaultTheme = createTheme();

const HeroSection = ({ backgroundImage, title }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    console.log(searchInput); // Implement your search logic here or pass this function down as a prop
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed', // Simulate parallax effect
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '65vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          pt: '5rem',
          pb: '4rem',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', maxWidth: '856px' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: '3rem', px: '1rem' }}>
            {title}
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 3,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
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
  );
};

export default HeroSection;