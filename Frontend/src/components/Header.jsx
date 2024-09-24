import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '2px solid #ccc' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginLeft: 1 }}>
            chashmay
          </Typography>
        </div>

        {/* Center Section - Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          <div>
            <Typography
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenu}
              style={{ cursor: 'pointer' }}
            >
              Categories
            </Typography>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Men Glasses</MenuItem>
              <MenuItem onClick={handleClose}>Women Glasses</MenuItem>
              <MenuItem onClick={handleClose}>Kids Glasses</MenuItem>
            </Menu>
          </div>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
          <Link to="/faq" style={{ textDecoration: 'none', color: 'black' }}>FAQ</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
        </div>

        {/* Right Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <InputBase
              placeholder="Search your products…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ border: '1px solid red', borderRadius: 3, paddingLeft: 2, paddingRight: 2 }}
            />
            <IconButton type="submit" sx={{ position: 'absolute', right: 0 }}>
              <SearchIcon sx={{ color: 'red' }} />
            </IconButton>
          </div>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
