import React from 'react';
import Container from "components/Container";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import ViewList from '../viewlist/viewlist';
import ViewList2 from '../viewlist2/viewlist2';

function Trends({ stockdata }) {
    return(
        <Container>
            <Box>
                <Typography variant="h4" sx={{ marginBottom: '1rem'}}>
                    투자자별 매매동향
                </Typography>
                <Box sx={{ marginBottom: '40px' }}>
                    <ViewList stockdata={stockdata}/>
                </Box>
                <ViewList2 stockdata={stockdata}/>
            </Box>
        </Container>

    );
}

export default Trends;