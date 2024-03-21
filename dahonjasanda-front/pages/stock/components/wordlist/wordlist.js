import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function WordList() {
    return(
        <Box>
            <Typography variant="h3">경제 용어</Typography>
            <Typography sx={{ borderBottom: 1, borderColor: 'divider' }}>Lorem ipsum</Typography>
        </Box>
    );
}

export default WordList;