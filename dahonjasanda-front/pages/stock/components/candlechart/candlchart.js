import React from 'react';
import dynamic from 'next/dynamic';

import Box from "@mui/material/Box";

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


function Candle({list}) {
    console.log("candle",list);
    const options = {
        theme: {
            mode: "dark",
        },
        chart: {
            type: 'candlestick',
            height: 350,
            width: 800,
            toolbar: {
                show: true
            },
            
        },
        xaxis: {
            type: 'datetime',
            categories: list.map(item => item.x),
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
        plotOptions: {
            candlestick: {
                wick: {
                    useFillColor: true,
                },
            },
        }
    };

    const series = list ? [{
        data: list.map(item => ({
            x: item.x,
            y: [item.o, item.h, item.l, item.c]
        }))
    }] : [];

    return(
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Box style={{ width: '80%' }}>
                <ApexChart options={options} series={series} type="candlestick" />
            </Box>
        </Box>
    );
}

export default Candle;