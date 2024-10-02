import React from 'react';
import { Box, Container, TextField, Button, Typography, Paper, Grid } from '@mui/material';

const ContactUsComponent = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Contact Us Form */}
      <Typography variant="h4" align="center" gutterBottom>
        CONTACT US
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              margin:'10px',
              flexDirection: 'column',
              gap: 2,
              padding: { xs: 2, md: 4 },
            }}
          >
            <TextField fullWidth label="Name" variant="outlined" />
            <TextField fullWidth label="Subjects" variant="outlined" />
            <TextField fullWidth label="E-mail" variant="outlined" />
            <TextField
              fullWidth
              label="How can we help you?"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
                alignSelf: 'center',
                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                width: '150px',
                color: '#fff',
                width:'100%'
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
            <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-end' },
        alignItems: 'center',
        height: '100%',
        padding: { xs: 2, md: 0 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 5,
          width: { xs: '100%', sm: '300px' },
          background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          color: 'white',
          // Rotate for all screen sizes, apply translate only for medium and larger
          transform: {
            xs: 'rotate(22deg)', // Only rotate on small screens
            md: 'rotate(22deg) translate(-120px, 30px)', // Rotate and translate on medium and larger screens
          },
        }}
      >
        <Typography variant="h6" textAlign={'center'}>
          HAMID OPTICS SHOP
        </Typography>
        <Typography variant="body2" textAlign={'center'}>
          Second Floor, R1, Clifton area, Skardu
        </Typography>
        <Typography variant="body2" textAlign={'center'}>
          Skardu, link alamdar road
        </Typography>
        <Typography variant="body2" textAlign={'center'}>
          Phone: +923554753760
        </Typography>
        <Typography variant="body2" textAlign={'center'}>
          Phone: +92355616238
        </Typography>
        <Typography variant="body2" textAlign={'center'}>
          www.hamidoptics.com
        </Typography>
      </Paper>
    </Box>

        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsComponent;
