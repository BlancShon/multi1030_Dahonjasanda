import React from 'react';
import { useState, useEffect } from 'react';

import Main from "layouts/Main";
import Container from "components/Container";
import { useRouter } from 'next/router';

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function StockView() {
    const theme = useTheme();

    const router = useRouter();
    const [page, setPage] = useState(null);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        console.log('router.query');
        console.log(router.query);
        
        const { page } = router.query;
        setPage(page);
    }, [router.isReady]);

    return (
        <Main>
            <Container>
                <Box>
                    <Typography variant="h1">
                        stockview 페이지
                    </Typography>
                </Box>
            </Container>
        </Main>
    );
}
