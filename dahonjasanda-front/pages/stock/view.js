import React from 'react';
import { useState, useEffect } from 'react';

import Main from "layouts/Main";
import Container from "components/Container";
import { useRouter } from 'next/router';

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import vi from '../../public/assets/stockview.json';
import ti from '../../public/assets/stocktime.json';
import ViewTitle from './components/title/stockviewtitle';
import ViewInfo from './components/viewinfo/stockviewinfo';
import Consensus from './components/consensus/consensus';
import Trends from './components/trend/trend';
import HeroSection from './components/hero/herosection';
import Candle from './components/candlechart/candlchart';
import candleData from '../../public/assets/candle.json';

var stockdata = 
        {
            "sno": 5935,
            "sdate": 20240313,
            "scode": "005930",
            "sname": "삼성전자",
            "clpr": "----",
            "mkp": "----",
            "hipr": "----",
            "lopr": "----",
            "code": "005930",
            "price": 74100,
            "yprice": 73300,
            "open": 73700,
            "high": 74100,
            "low": 73500,
            "volume": "15,152,545",
            "amount": "1,119,515 백만",
            "total": "442조 3,609 억원",
            "foreignapb": "54.46%",
            "investinfo": "4.00 매수",
            "targetprice": 94130,
            "topprice": 79800,
            "bottomprice": 59100,
            "per": "34.77배",
            "eps": "2,131원",
            "content": "반도체 회사",
            "sellname1": "미래에셋증권",
            "sellname2": "이베스트",
            "sellname3": "NH투자증권",
            "sellname4": "키움증권",
            "sellname5": "삼성증권",
            "sell1": "2,299,933",
            "sell2": "1,503,819",
            "sell3": "1,223,160",
            "sell4": "1,170,276",
            "sell5": "282,698",
            "buyname1": "삼성증권",
            "buyname2": "이베스트",
            "buyname3": "미래에셋증권",
            "buyname4": "신한투자증권",
            "buyname5": "CLSA",
            "buy1": "2,460,949",
            "buy2": "1,743,594",
            "buy3": "1,723,305",
            "buy4": "909,126",
            "buy5": "601,802",
            "foreignsell": "118,324",
            "foreigngap": "+1,229,783",
            "foreignbuy": "1,348,107",
            "date1": "03/13",
            "date2": "03/12",
            "date3": "03/11",
            "date4": "03/08",
            "date5": "03/07",
            "date6": "03/06",
            "valueprice1": "74100",
            "valuegap1": "+800",
            "valueforeigner1": "+3,311,618",
            "valueorgan1": "+930,910",
            "valueprice2": "73300",
            "valuegap2": "+900",
            "valueforeigner2": "-2,414,262",
            "valueorgan2": "+2,950,142",
            "valueprice3": "72400",
            "valuegap3": "-900",
            "valueforeigner3": "-1,684874",
            "valueorgan3": "-469,163",
            "valueprice4": "73300",
            "valuegap4": "+1100",
            "valueforeigner4": "-1,584,036",
            "valueorgan4": "+3,346,510",
            "valueprice5": "72200",
            "valuegap5": "-700",
            "valueforeigner5": "-4,314,162",
            "valueorgan5": "+86,490",
            "valueprice6": "72900",
            "valuegap6": "-800",
            "valueforeigner6": "-3,191,375",
            "valueorgan6": "-683,981"
        };

export default function View() {
    const theme = useTheme();

    const router = useRouter();
    const [page, setPage] = useState(null);
    const [view, setView] = useState(null);
    const [tim, setTim] = useState(null);
    

    useEffect(() => {
        let clist = [];
        for(let i = 0; i < 5; i++){
            let obj = {};
            obj['buyer'] = stockdata['buyname' + (i+1)];
            obj['bid'] = stockdata['buy' + (i+1)];
            obj['seller'] = stockdata['sellname' + (i+1)];
            obj['ask'] = stockdata['sell' + (i+1)];
            clist[i] = obj;
        }

        let flist = [];
        for(let i = 0; i < 6; i++){
            let obj = {};
            obj['date'] = stockdata['date' + (i+1)];
            obj['close'] = stockdata['valueprice' + (i+1)];
            obj['gap'] = stockdata['valuegap' + (i+1)];
            obj['foreigner'] = stockdata['valueforeigner' + (i+1)];
            obj['organ'] = stockdata['valueorgan' + (i+1)];
            flist[i] = obj;
        }

        stockdata['clist'] = clist;
        stockdata['flist'] = flist;
        console.log("viewpage(main)",stockdata);
        
        if (!router.isReady) {
            return;
        }
        
        const { page } = router.query;
        setPage(page);

        setView(stockdata);

        if(ti && ti.stocktime && ti.stocktime.length >0) {
            setTim(ti.stocktime[0]);
        }
    }, [router.isReady]);

    const { candle_day_x, candle_day_m, candle_day_h, candle_day_l, candle_day_c } = candleData;
    const data = candleData.candle_day_x.map((dateString, index) =>{
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
    
        const formattedDateString = `${year},${month},${day}`;
        return {
            x: formattedDateString,
            o: candleData.candle_day_m[index],
            h: candleData.candle_day_h[index],
            l: candleData.candle_day_l[index],
            c: candleData.candle_day_c[index],
        };
    });
    console.log("viewpage(main)",data);
    return (
        <Main colorInvert={true}>
            <Box>
                <HeroSection imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSArpdqfkhN75nrhWCbHxmvFiY7Ot0SujcbQ&usqp=CAU"/>
                <ViewTitle list={view} list1={tim}/>
                <Candle list={data}/>
                <ViewInfo list={view} />
                <Consensus list={view} list1={tim}/>
                <Trends stockdata={stockdata}/>
            </Box>
        </Main>
    );
}
