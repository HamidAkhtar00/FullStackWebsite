import React from 'react';
import { Box, Button, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import menImg from '../assets/images/men.jpg'; 
import womenImg from '../assets/images/women.jpg'; 
import kidsImg from '../assets/images/kids.jpg'; 

const categories = [
  { id: 1, name: 'Men', image: menImg },
  { id: 2, name: 'Women', image: womenImg },
  { id: 3, name: 'Kids', image: kidsImg },
];

const Categories = ({ onCategoryClick }) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: 'white', marginTop: 2, marginLeft: 7, marginRight: 7 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shop by Category
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map(category => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <Card
              onClick={() => onCategoryClick(category.name.toLowerCase())} // On click, pass the category name in lowercase
              sx={{
                position: 'relative',
                
                background: 'linear-gradient(to right bottom, #0071ff, #f3f0ff,#f3faff)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '&:hover .card-content': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt={category.name}
                height="300"
                image={category.image}
              />
              <CardContent
                className="card-content"
                sx={{
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  transform: 'translateY(20px)',
                }}
              >
                <Typography variant="h5" align="center">
                  {category.name}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    alignSelf: 'center',
                    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                    width: '150px',
                    color: '#fff',
                  }}
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
