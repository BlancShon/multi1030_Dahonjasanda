import React from "react";

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import adImage from '../../../../src/images/DepositAd.jpg';

const AdvertisementCard = () => {
    return (
        <Card>
            <CardContent>
                <img src={adImage.src} alt="Advertisement" style={{ width: '100%', height: '100%' }} />
            </CardContent>
        </Card>
    );
};

export default AdvertisementCard;

