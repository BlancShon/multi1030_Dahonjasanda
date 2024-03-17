import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import Box from "@mui/material/Box";

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function PieChart({ labels, series}) {
    const [options, setOptions] = useState(null);

    useEffect(() => {
        if (options === null) {
            const newOptions = {
                chart: {
                    width: '100%',
                    height: '600px',
                    type: 'pie',
                },
                labels: labels,
                series: series,
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                }],
            };
            setOptions(newOptions);
        }
    }, []);

    return (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Box style={{ width: '60%' }}>
                {options && <ApexChart options={options} series={options.series} type="pie" />}
            </Box>
        </Box>
    );
}

export default PieChart;
