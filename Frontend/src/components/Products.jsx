import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, CardActions, Box, Rating, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { MaterialReactTable } from 'material-react-table';
import productImg from '../assets/images/img2.png'; // Sample image

const Products = ({ selectedCategory }) => {
  const navigate = useNavigate();

  const productsData = [
    { id: 1, image: productImg, name: "Lenskart Air", category: "men", price: "$120", discountPrice: "$100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 2, image: productImg, name: "John Jacobs", category: "women", price: "$150", discountPrice: "$130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 3, image: productImg, name: "Vincent Chase", category: "kids", price: "$50", discountPrice: "$40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
    { id: 4, image: productImg, name: "Lenskart Air", category: "men", price: "$120", discountPrice: "$100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 5, image: productImg, name: "John Jacobs", category: "women", price: "$150", discountPrice: "$130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 6, image: productImg, name: "Vincent Chase", category: "kids", price: "$50", discountPrice: "$40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
    { id: 7, image: productImg, name: "Lenskart Air", category: "men", price: "$120", discountPrice: "$100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 8, image: productImg, name: "John Jacobs", category: "women", price: "$150", discountPrice: "$130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 9, image: productImg, name: "Vincent Chase", category: "kids", price: "$50", discountPrice: "$40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
    { id: 10, image: productImg, name: "Lenskart Air", category: "men", price: "$120", discountPrice: "$100", rating: 4.6, reviews: 615, sizes: ["M", "L", "XL"] },
    { id: 11, image: productImg, name: "John Jacobs", category: "women", price: "$150", discountPrice: "$130", rating: 4.2, reviews: 200, sizes: ["S", "M"] },
    { id: 12, image: productImg, name: "Vincent Chase", category: "kids", price: "$50", discountPrice: "$40", rating: 4.8, reviews: 24, sizes: ["XS", "S"] },
  ];

  // Filter products based on selectedCategory
  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  // Navigate to ProductDetails when the shopping cart icon is clicked
  const handleCartClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  // Splitting products into rows, with 4 cards per row
  const rows = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    rows.push(filteredProducts.slice(i, i + 4));
  }

  // Define table columns
  const columns = [
    {
      accessorKey: 'cards',
      header: 'Product Cards',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {row.original.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: '100%',
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
                <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>{product.price}</Typography>
                <Typography variant="h6" color="primary">{product.discountPrice}</Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: 'space-between', padding: '0 16px 16px' }}
              >
                <IconButton aria-label="like">
                  <FavoriteIcon color="error" />
                </IconButton>
                <IconButton aria-label="add to cart" onClick={() => handleCartClick(product.id)}>
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
        pageSizeOptions={[5]} // You can adjust page size here
      />
    </Box>
  );
};

export default Products;
