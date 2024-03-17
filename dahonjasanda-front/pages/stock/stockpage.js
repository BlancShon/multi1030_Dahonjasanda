import React, { useState } from "react";

import Main from "layouts/Main";
import HeroSection from "./components/hero/herosection";
import SearchBox from "./components/searchbox";
import CardWithAddButton from "./components/CardWithAddButton";
import WithAvatarsAndMultilineContent from "./components/WithAvatarsAndMultilineContent";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Container from "components/Container";
import st from '../../public/assets/stock.json';

const stocks = st.stocks;

function StockPage() {
    const theme = useTheme();

    const [filteredList, setFilteredList] = useState([]);
    
    return (
        <Main colorInvert={true}>
            <Box bgcolor={"alternate.main"} position={"relative"}>
                <HeroSection imageUrl="https://img.hankyung.com/photo/202308/01.34142085.1.jpg"/>
                <Container>
                    <Box sx={{
                        borderBottom: '1px solid #ddd',
                        marginBottom: '20px',
                    }}>
                        <Typography variant="h4" sx={{ mb: 2}}>지수 정보</Typography>
                    </Box>
                    <CardWithAddButton />
                    <Box sx={{
                        borderBottom: '1px solid #ddd',
                        marginBottom: '20px',
                    }}>
                        <Typography variant="h4" sx={{ mb: 2}}>주식 정보</Typography>
                    </Box>
                    <SearchBox list={stocks} setFilteredList={setFilteredList}/>
                    <WithAvatarsAndMultilineContent list={filteredList.length > 0 ? filteredList : stocks}/>
                </Container>
            </Box>
        </Main>
    );
}

export default StockPage;