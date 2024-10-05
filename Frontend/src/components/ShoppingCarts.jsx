import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Typography, Button, Divider } from '@mui/material';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  
  // Temporary discount and total calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.discountPrice * item.quantity, 0);
  const totalSavings = cartItems.reduce((acc, item) => acc + (item.price - item.discountPrice) * item.quantity, 0);

  return (
    <Box sx={{ display: 'flex', padding: 4, gap: 4 }}>
      {/* Left: Cart Items */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Shopping Cart</Typography>
        {cartItems.map((item) => (
          <Box 
            key={item.id} 
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, borderBottom: '1px solid #ddd', paddingBottom: 2 }}
          >
            <img src={item.image} alt={item.name} style={{ width: 100, height: 100, marginRight: 20 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray' }}>
                Rs. {item.price}
              </Typography>
              <Typography variant="h6" color="error">
                Rs. {parseFloat(item.discountPrice).toFixed(2)}
              </Typography>
              <Typography variant="body2">Quantity: {item.quantity}</Typography>
            </Box>
            <Box>
              <Button 
                variant="outlined" 
                onClick={() => removeFromCart(item.id)} 
                sx={{ borderColor: 'red', color: 'red' }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right: Order Summary */}
      <Box 
        sx={{ width: '300px', border: '1px solid #ddd', padding: 3, borderRadius: '8px' }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>Order Summary</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">Rs. {subtotal.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">You Save</Typography>
          <Typography variant="body1" color="green">Rs. {totalSavings.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">Rs. {(subtotal).toFixed(2)}</Typography>
        </Box>
        <Button 
          variant="contained" 
          sx={{ mt: 3, width: '100%', backgroundColor: '#d32f2f', color: 'white' }}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
