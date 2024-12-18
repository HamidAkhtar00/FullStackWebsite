import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, InputBase, Drawer, List, ListItem, ListItemText,
  Divider, Box, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.png'; // Import the logo

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (page) => {
    handleAccountMenuClose();
    if (page === 'login') {
      navigate('/login'); // Navigate to the login page
    } else if (page === 'profile') {
      navigate('/dashboard/profile'); // Navigate to the profile page on the dashboard
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer content (mobile menu)
  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/faq">
          <ListItemText primary="FAQ" />
        </ListItem>
        <ListItem button component={Link} to="/feedback">
          <ListItemText primary="FeedbackSlider" />
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: '10px 0' }}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton color="inherit">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: '10px' }}>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          sx={{ border: '1px solid red', borderRadius: 3, width: '100%', paddingLeft: 2 }}
          
        />
      </Box>
      
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor:'#f3fcff', color: 'rgb(18, 96, 113)', boxShadow: 'none',borderBottom: '2px solid #ccc',marginTop:0 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Side - Logo */}
        <img src={logo} alt="chashmay logo" style={{ width: '120px' }} />

        {/* Desktop View */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          <Link to="/categories" style={{ textDecoration: 'none', color: 'black' }}>Categories</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
          <Link to="/faq" style={{ textDecoration: 'none', color: 'black' }}>FAQ</Link>
          <Link to="/feedback" style={{ textDecoration: 'none', color: 'black' }}>Feedback</Link>

          <div style={{ position: 'relative' }}>
            <InputBase
              placeholder="Search your products…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ border: '1px solid rgb(18, 96, 113)', borderRadius: 3, paddingLeft: 2, paddingRight: 2 }}
            />
            <IconButton type="submit" sx={{ position: 'absolute', right: 0 }}>
              <SearchIcon sx={{ color: 'rgb(18, 96, 113)' }} />
            </IconButton>
          </div>
          <IconButton color="inherit" onClick={handleAccountMenuOpen}>
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/shopping-cart">
            <ShoppingCartIcon />
          </IconButton>
        </Box>

        {/* Mobile View */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton color="inherit" onClick={handleAccountMenuOpen}>
            <AccountCircle />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Account Dropdown Menu */}
      <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleAccountMenuClose}
>
  <MenuItem onClick={() => handleMenuClick('profile')}>Profile</MenuItem>
  <MenuItem onClick={() => handleMenuClick('login')}>Login</MenuItem>
</Menu>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </AppBar>
  );
};

export default Header;
