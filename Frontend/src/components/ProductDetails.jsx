import React, { useState, useContext } from 'react';
import { Grid, Typography, Box, Button, IconButton, Radio, RadioGroup, FormControlLabel, TextField } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { Add, Remove } from '@mui/icons-material';
import { CartContext } from '../context/CartContext'; // Import the CartContext

const ProductDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();  
  const { product } = state;        

  const { addToCart } = useContext(CartContext); // Access addToCart from context

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('56/18/135/140');
  const [selectedColor, setSelectedColor] = useState('Gold/Black');

  const handleAddToCart = () => {
    const productData = {
      id: product.id, // Assuming each product has a unique id
      name: product.name,
      image: product.image, // Ensure this is a valid URL
      price: product.price, // Ensure this is a number or string representing a number
      discountPrice: product.discountPrice, // Ensure this is a number or string representing a number
      quantity: quantity,
    };
     
    addToCart(productData);
    navigate('/shopping-cart');
  };
  

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Section: Product Image and Thumbnails */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', borderRadius: 8 }} 
            />
          </Box>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h6" sx={{ textDecoration: 'line-through' }}>
            Rs. {product.price} 
          </Typography>
          <Typography variant="h5" color="error">
            Rs. {product.discountPrice}
          </Typography>
          <Typography variant="h5" color="error">
            (Save {((product.price.replace(/[^\d.-]/g, '') - product.discountPrice.replace(/[^\d.-]/g, '')) / product.price.replace(/[^\d.-]/g, '') * 100).toFixed(0)}%)
          </Typography>

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
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            HURRY! ONLY 13 LEFT IN STOCK.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
