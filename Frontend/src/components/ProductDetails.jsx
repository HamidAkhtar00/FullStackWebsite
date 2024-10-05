import React, { useState } from 'react';
import { Grid, Typography, Box, Button, IconButton, Radio, RadioGroup, FormControlLabel, TextField, Icon } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'; // <-- Add `useParams` import
import { Add, Remove } from '@mui/icons-material';

const ProductDetails = () => {
  const { id } = useParams(); // <-- This retrieves the `id` from the URL
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('56/18/135/140');
  const [selectedColor, setSelectedColor] = useState('Gold/Black');

  const handleAddToCart = () => {
    // Navigate to shopping cart on add to cart click
    navigate('/shopping-cart');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Section: Product Image and Thumbnails */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <img 
              src="" 
              alt="Product" 
              style={{ width: '100%', borderRadius: 8 }} 
            />
            {/* Add navigation for images */}
            <IconButton sx={{ position: 'absolute', left: 0, top: '50%' }}>
              <Icon>chevron_left</Icon>
            </IconButton>
            <IconButton sx={{ position: 'absolute', right: 0, top: '50%' }}>
              <Icon>chevron_right</Icon>
            </IconButton>
          </Box>
          {/* Thumbnails */}
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
            <img src="path_to_thumbnail1" alt="Thumbnail" width="50" />
            <img src="path_to_thumbnail2" alt="Thumbnail" width="50" />
            {/* Add more thumbnails */}
          </Box>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5">OVision 1009 Aviator Eyeglasses</Typography>
          <Typography variant="h6" sx={{ textDecoration: 'line-through' }}>Rs. 2,650.00</Typography>
          <Typography variant="h5" color="error">Rs. 2,120.00 (Save 20%)</Typography>

          {/* Product Features */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Product Features:</Typography>
            <Typography variant="body2">Vendor: OVision</Typography>
            <Typography variant="body2">Frame Type: Full Rim</Typography>
            <Typography variant="body2">Frame Shape: Aviator</Typography>
            <Typography variant="body2">Frame Material: Metal</Typography>
          </Box>

          {/* Size Selector */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">SELECTED SIZE:</Typography>
            <RadioGroup row value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <FormControlLabel value="56/18/135/140" control={<Radio />} label="56/18/135/140" />
              <FormControlLabel value="54/18/135/140" control={<Radio />} label="54/18/135/140" />
              <FormControlLabel value="52/18/135/140" control={<Radio />} label="52/18/135/140" />
            </RadioGroup>
          </Box>

          {/* Color Selector */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">COLOR:</Typography>
            <RadioGroup row value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              <FormControlLabel value="Gold/Black" control={<Radio />} label="Gold/Black" />
              <FormControlLabel value="Silver/Black" control={<Radio />} label="Silver/Black" />
            </RadioGroup>
          </Box>

          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <IconButton onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
              <Remove />
            </IconButton>
            <TextField 
              value={quantity} 
              size="small" 
              inputProps={{ min: 1, style: { textAlign: 'center' } }} 
              sx={{ width: 50 }} 
            />
            <IconButton onClick={() => setQuantity(quantity + 1)}>
              <Add />
            </IconButton>
          </Box>

          {/* Add to Cart Button */}
          <Button 
            variant="contained" 
            sx={{ mt: 4, backgroundColor: '#006064', '&:hover': { backgroundColor: '#004d40' } }} 
            onClick={handleAddToCart}
          >
            ADD TO CART
          </Button>

          {/* Stock Info */}
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>HURRY! ONLY 13 LEFT IN STOCK.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
