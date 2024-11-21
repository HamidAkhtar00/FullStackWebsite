// src/components/Dashboard/DashboardLayout.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content for mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Eyewear Dashboard
      </Typography>
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard/orders">
          <ListAltIcon sx={{ mr: 1 }} />
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/wishlist">
          <FavoriteBorderIcon sx={{ mr: 1 }} />
          <ListItemText primary="Wishlist" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/profile">
          <PersonIcon sx={{ mr: 1 }} />
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Eyewear Dashboard
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              color="inherit"
              component={Link}
              to="/dashboard/orders"
              startIcon={<ListAltIcon />}
              sx={{ mr: 1 }}
            >
              Orders
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/dashboard/wishlist"
              startIcon={<FavoriteBorderIcon />}
              sx={{ mr: 1 }}
            >
              Wishlist
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/dashboard/profile"
              startIcon={<PersonIcon />}
            >
              Profile
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardLayout;