import React from 'react';
import { Container, Typography } from '@mui/material';

const OrderStatus = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Your Order Status</Typography>
      <Typography variant="body1">Thank you for your submission! Your order is being processed.</Typography>
      {/* Add more details or status information here */}
    </Container>
  );
};

export default OrderStatus;
