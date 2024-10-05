import React from 'react';
import { Box, Grid, Typography,  List, ListItem, ListItemText, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import visaImg from '../assets/icons/visa.png';  // Add the correct path for your icons
import paypalImg from '../assets/icons/paypal.png';
import mastercardImg from '../assets/icons/mastercard.png';
import maestroImg from '../assets/icons/maestro.png';
import logo from '../assets/images/logo1.png';

const blogs = [
  'Transition Glasses In Winter',
  'Top 5 Myths About Transition Glasses Debunked',
  'How Transition Glasses Can Improve Your Digital Eye Health'
];

const categories = [
  'Transition',
  'New Arrival',
  'Kids',
  'Premium',
  'Sale - Upto 33% Discount',
  'Shop'
];

const quickLinks = [
  'About Us',
  'Blog',
  'Reviews',
  'Terms and Conditions',
  'Privacy Policy',
  'Track Your Order',
  'Contact Us'
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor:'#f3fcff', padding: '40px 20px', marginTop: 'auto' }}>
      <Grid container spacing={4} justifyContent="center">
        
        {/* Logo and Social Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Box>
          <img src={logo} alt="Maestro" width="180px" />
          </Box>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            Complete your Look!
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton href="#" aria-label="Facebook">
              <FacebookIcon style={{ color: 'blue' }}/>
            </IconButton>
            <IconButton href="#" aria-label="YouTube">
              <YouTubeIcon style={{ color: 'blue' }}/>
            </IconButton>
            <IconButton href="#" aria-label="Instagram">
              <InstagramIcon style={{ color: 'blue' }}/>
            </IconButton>
            <IconButton href="#" aria-label="Pinterest">
              <PinterestIcon style={{ color: 'blue' }}/>
            </IconButton>
          </Box>

          {/* Payment Icons */}
          <Box sx={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <img src={visaImg} alt="Visa" width="50px" />
            <img src={paypalImg} alt="PayPal" width="50px" />
            <img src={mastercardImg} alt="MasterCard" width="50px" />
            <img src={maestroImg} alt="Maestro" width="50px" />
          </Box>
        </Grid>

        {/* Blogs Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            BLOGS
          </Typography>
          <List>
            {blogs.map((blog, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={blog} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Categories Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            CATEGORIES
          </Typography>
          <List>
            {categories.map((category, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            QUICK LINKS
          </Typography>
          <List>
            {quickLinks.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={link} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Get in Touch Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            GET IN TOUCH
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <PhoneIcon sx={{ marginRight: '10px' }} />
            <Typography>+923471481947</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon sx={{ marginRight: '10px' }} />
            <Typography>hamidoptics@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ marginRight: '10px' }} />
            <Typography>Second Floor, R1,Clifton area, Skardu</Typography>
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Box sx={{textAlign:'center'}}>
        <Typography variant="body2" sx={{ color: '#555' }}>
            © All rights reserved 2024 | Developer: <strong>Hamid Akhtar</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
