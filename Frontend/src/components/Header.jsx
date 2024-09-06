import React from 'react';
import { Link } from 'react-router-dom'; // Only import Link, not Router
import { AppBar, Toolbar, Typography, IconButton, Button, Select, MenuItem, InputBase, Box, Badge } from '@mui/material';
import { Email, Facebook, Twitter, LinkedIn, Pinterest, ShoppingCart, Favorite, Search, Phone } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' ,margin:'20px'}}>
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Email fontSize="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>eyewearprotection@gmail.com</Typography>
            <Typography variant="body2" sx={{ mx: 2 }}>|</Typography>
            <Typography variant="body2">Free Shipping for all Order of $99</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton size="small" color="inherit"><Facebook /></IconButton>
            <IconButton size="small" color="inherit"><Twitter /></IconButton>
            <IconButton size="small" color="inherit"><LinkedIn /></IconButton>
            <IconButton size="small" color="inherit"><Pinterest /></IconButton>
            <Select variant="standard" defaultValue="EN" sx={{ ml: 2 }}>
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="ES">Spanish</MenuItem>
            </Select>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Header */}
      <AppBar position="static" sx={{ backgroundColor: '#f8f8f8', color: 'black', boxShadow: 'none' }}>
        <Toolbar sx={{display:'flex',flexDirection:'column',justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{display:'flex',flexDirection:'row'}}>
            <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center',marginRight:'250px'}}>
              <img src="#" alt="Logo" style={{ marginRight: '10px' }} />
              LMSHA
            </Typography>
            {/* Navigation */}
            <Box display="flex" alignItems="center">
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/shop">Shop</Button>
              <Button color="inherit" component={Link} to="/pages">Pages</Button>
              <Button color="inherit" component={Link} to="/blog">Blog</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>

        

            {/* Icons */}
            <Box display="flex" alignItems="center">
              <IconButton color="inherit">
                <Badge badgeContent={1} color="error">
                  <Favorite />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <ShoppingCart />
                </Badge>
              <Typography variant="body1" sx={{ marginLeft: 1 ,margin:'1rem'}}>
                item: $150.00
              </Typography>
              </IconButton>
    
            </Box>
          </Box>
           {/* Search Bar */}
            <Box sx={{ display: 'flex', padding: '2px 4px' }}>
              <Box sx={{ display: 'flex', backgroundColor: 'white', borderRadius: '4px', padding: '2px 4px' }}>
                <Select variant="standard" defaultValue="all" sx={{ mr: 1 }}>
                  <MenuItem value="all">All Categories</MenuItem>
                  {/* Add more categories as needed */}
                </Select>
                <InputBase placeholder="What do you need?" sx={{ ml: 1, flex: 1 }} />
                <IconButton type="submit" sx={{ p: '10px' }}>
                  <Search />
                </IconButton>
                
                </Box>
                <Box display="flex" alignItems="center" sx={{ ml: 2 }}>
                  <Phone fontSize="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>+65 11.188.888</Typography>
                  <Typography variant="caption" display="block">support 24/7 time <br /></Typography>
                </Box>
            </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
