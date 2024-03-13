import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DeadlineCard = () => {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Products with approaching deadline
          </Typography>
          {/* Add code for displaying products */}
        </CardContent>
      </Card>
    );
  };

  export default DeadlineCard;
