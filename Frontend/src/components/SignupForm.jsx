import React from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    try {
      const response = await axios.post('/api/users/register', { username, email, password });
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      alert(error.response.data.message || 'Registration failed');
    }
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
        Sign Up Here
      </Typography>
      
      <TextField
        label="Enter Username"
        variant="standard"
        fullWidth
        sx={{ mb: 2, input: { color: 'orange' }, '& .MuiInput-underline:before': { borderBottomColor: 'orange' } }}
        InputLabelProps={{ style: { color: '#fff' } }}
      />
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
      
      <TextField
        label="Confirm Password"
        type="password"
        variant="standard"
        fullWidth
        sx={{ mb: 2, input: { color: 'orange' }, '& .MuiInput-underline:before': { borderBottomColor: 'orange' } }}
        InputLabelProps={{ style: { color: '#fff' } }}
      />
      
      <Button
        variant="contained"
        fullWidth
        onClick={handleSignUp}
        sx={{
          backgroundColor: 'orange',
          color: '#fff',
          fontWeight: 'bold',
          mb: 2,
          '&:hover': { backgroundColor: '#ff9933' },
        }}
      >
        Sign Up
      </Button>
      
      <Typography variant="body2" sx={{ color: '#fff' }}>
        Already have an account?
      </Typography>
      
      <Link
        href="/login"
        onClick={() => navigate('/login')}
        sx={{ color: 'orange', textDecoration: 'none', fontWeight: 'bold', '&:hover': { textDecoration: 'underline' } }}
      >
        Login Here
      </Link>
    </Box>
  );
};

export default SignUp;
