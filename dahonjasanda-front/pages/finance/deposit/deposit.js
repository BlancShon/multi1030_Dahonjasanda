import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';

import { 
    SimpleHeroWithSearchBox, 
    Search 
} from "./components";

const Deposit = () => {
    return (
        <Main>
            <Box>
                <SimpleHeroWithSearchBox />
                <Container>
                    <Search />
                </Container>
            </Box>
        </Main>
    );
}

export default deposit;