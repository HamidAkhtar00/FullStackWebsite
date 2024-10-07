import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, CardActions, Box, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { MaterialReactTable } from 'material-react-table';
import productImg1 from '../assets/productImage/p1.jpg';
import productImg2 from '../assets/productImage/p2.jpg';
import productImg3 from '../assets/productImage/p3.jpg';
import productImg4 from '../assets/productImage/p4.jpg';
import productImg5 from '../assets/productImage/p5.jpg';
import productImg6 from '../assets/productImage/p6.jpg';
import productImg7 from '../assets/productImage/p7.jpg';
import productImg8 from '../assets/productImage/p8.jpg';
import productImg9 from '../assets/productImage/p9.jpg';
import productImg10 from '../assets/productImage/p10.jpg';
import productImg11 from '../assets/productImage/p11.jpg';
import productImg12 from '../assets/productImage/p12.jpg';

const Products = ({ selectedCategory }) => {
const navigate = useNavigate();


  const productsData = [
    { id: 1, image: productImg1, name: "Lenskart Air", category: "men", price: "120", discountPrice: "100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 2, image: productImg2, name: "John Jacobs", category: "women", price: "150", discountPrice: "130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 3, image: productImg3, name: "Vincent Chase", category: "kids", price: "50", discountPrice: "40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
    { id: 4, image: productImg4, name: "Lenskart Air", category: "men", price: "120", discountPrice: "100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 5, image: productImg5, name: "John Jacobs", category: "women", price: "150", discountPrice: "130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 6, image: productImg6, name: "Vincent Chase", category: "kids", price: "50", discountPrice: "40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
    { id: 7, image: productImg7, name: "Lenskart Air", category: "men", price: "120", discountPrice: "100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 8, image: productImg8, name: "John Jacobs", category: "women", price: "150", discountPrice: "130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 9, image: productImg9, name: "Vincent Chase", category: "kids", price: "50", discountPrice: "40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
    { id: 10, image: productImg10, name: "Lenskart Air", category: "men", price: "120", discountPrice: "100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 11, image: productImg11, name: "John Jacobs", category: "women", price: "150", discountPrice: "130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 12, image: productImg12, name: "Vincent Chase", category: "kids", price: "50", discountPrice: "40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
  ];
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
  };//------------------------------

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  // Handle navigation to product details page
  const handleCartClick = (product) => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  // Splitting products into rows of 4
  const rows = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    rows.push(filteredProducts.slice(i, i + 4));
  }

  const columns = [
    {
      accessorKey: 'cards',
      header: 'Product Cards',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {row.original.map((product) => (
            <Card
              key={product.id}
              onClick={() => handleCartClick(product)}
              sx={{
                width: '100%',
                background: 'linear-gradient(to right bottom, #f3f0ff,#f3faff)',
                maxWidth: 280,
                margin: '16px auto',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ borderRadius: '16px 16px 0 0' }}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Rating value={product.rating} precision={0.1} readOnly size="small" />
                  <Typography variant="body2" color="textSecondary">({product.reviews})</Typography>
                </Box>
                <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>Rs. {product.price}</Typography>
                <Typography variant="h6" color="primary">Rs. {product.discountPrice}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', padding: '0 16px 16px' }}>
                <IconButton aria-label="like">
                  <FavoriteIcon color="error" />
                </IconButton>
                <IconButton aria-label="add to cart" onClick={handleAddToCart}>
                  <ShoppingCartIcon color="primary" />
                </IconButton>
              </CardActions>
            </Card>
            
          ))}
          
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <MaterialReactTable
        columns={columns}
        data={rows} // Pass the rows as the data
        muiTablePaperProps={{
          elevation: 0,
          sx: { padding: '16px' },
        }}
        pageSizeOptions={[5]} // Adjust page size as needed
      />
    </Box>
  );
};

export default Products;
