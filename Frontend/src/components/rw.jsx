// import React from 'react';
// import { AppBar, Toolbar, Typography, InputBase, IconButton, MenuItem, Menu, Select, Box, Button, Badge } from '@mui/material';
// import { ShoppingCart, Search, FavoriteBorder, Phone } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';

// const Header = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
//         {/* Logo and Departments */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
//             OGANI
//           </Typography>
//           <Button variant="contained" color="success" startIcon={<MenuIcon />} sx={{ marginLeft: 2 }}>
//             All departments
//           </Button>
//         </Box>

//         {/* Navigation Links */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>HOME</Typography>
//           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>SHOP</Typography>
//           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>PAGES</Typography>
//           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>BLOG</Typography>
//           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>CONTACT</Typography>
//         </Box>

//         {/* Search and Contact */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <Select defaultValue="All Categories" variant="standard">
//             <MenuItem value="All Categories">All Categories</MenuItem>
//             {/* Add more categories as needed */}
//           </Select>
//           <InputBase
//             placeholder="What do you need?"
//             sx={{
//               backgroundColor: 'white',
//               padding: '5px 10px',
//               borderRadius: '5px',
//               width: '200px'
//             }}
//           />
//           <Button variant="contained" color="success" startIcon={<Search />}>
//             SEARCH
//           </Button>
//         </Box>

//         {/* Icons and Contact Info */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton color="default">
//               <Badge badgeContent={1} color="error">
//                 <FavoriteBorder />
//               </Badge>
//             </IconButton>
//             <IconButton color="default">
//               <Badge badgeContent={3} color="success">
//                 <ShoppingCart />
//               </Badge>
//             </IconButton>
//             <Typography variant="body1" sx={{ marginLeft: 1 }}>
//               item: $150.00
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton color="success">
//               <Phone />
//             </IconButton>
//             <Box sx={{ marginLeft: 1 }}>
//               <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//                 +65 11.188.888
//               </Typography>
//               <Typography variant="caption">support 24/7 time</Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
