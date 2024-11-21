// src/components/Dashboard/Profile.jsx
import React from 'react';
import { Typography, Paper, Box, TextField, Button } from '@mui/material';

function Profile() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Profile Information</Typography>
      <Box sx={{ mt: 2 }}>
        <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
        <Button variant="contained" color="primary">Update Profile</Button>
      </Box>
    </Paper>
  );
}

export default Profile;
