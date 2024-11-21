// src/components/Dashboard/Order.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';

function Order() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Your Orders</Typography>
      <Typography>No orders available yet.</Typography>
    </Paper>
  );
}

export default Order;
