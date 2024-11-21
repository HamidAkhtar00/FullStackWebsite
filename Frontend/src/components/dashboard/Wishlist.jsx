// src/components/Dashboard/Wishlist.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';

function Wishlist() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Your Wishlist</Typography>
      <Typography>No items in your wishlist.</Typography>
    </Paper>
  );
}

export default Wishlist;
