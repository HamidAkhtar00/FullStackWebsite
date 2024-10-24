import React from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login functionality here
  };

  return (
    <Box 
      sx={{
        width: '300px',
        margin: '100px auto',
        padding: '30px',
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '10px',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: 'orange' }}>
        Login Here
      </Typography>
      
      <TextField
        label="Enter Email Here"
        variant="standard"
        fullWidth
        sx={{ mb: 2, input: { color: 'orange' }, '& .MuiInput-underline:before': { borderBottomColor: 'orange' } }}
        InputLabelProps={{ style: { color: '#fff' } }}
      />
      
      <TextField
        label="Enter Password Here"
        type="password"
        variant="standard"
        fullWidth
        sx={{ mb: 2, input: { color: 'orange' }, '& .MuiInput-underline:before': { borderBottomColor: 'orange' } }}
        InputLabelProps={{ style: { color: '#fff' } }}
      />
      
      <Button
        variant="contained"
        fullWidth
        onClick={handleLogin}
        sx={{
          backgroundColor: 'orange',
          color: '#fff',
          fontWeight: 'bold',
          mb: 2,
          '&:hover': { backgroundColor: '#ff9933' },
        }}
      >
        Login
      </Button>
      
      <Typography variant="body2" sx={{ color: '#fff' }}>
        Don't have an account?
      </Typography>
      
      <Link
        href="/signup"
        onClick={() => navigate('/signup')}
        sx={{ color: 'orange', textDecoration: 'none', fontWeight: 'bold', '&:hover': { textDecoration: 'underline' } }}
      >
        Sign Up Here
      </Link>
    </Box>
  );
};

export default Login;
