import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar, Rating } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import customer1 from '../assets/images/img1.png'
const feedbacks = [
  {
    name: 'Hamid Akhtar',
    image: customer1,
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptate, nisi ratione consequuntur assumenda obcaecati iste.',
  },
  {
    name: 'Liaqat Ali',
    image: customer1,
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptate, nisi ratione consequuntur assumenda obcaecati iste.',
  },
  {
    name: 'Sam Wilson',
    image: customer1,
    rating: 5,
    description: 'Excellent support and fast delivery! Amazing products! I will order again',
  },
  {
    name: 'Alex Johnson',
    image: customer1,
    rating: 3,
    description: 'Decent quality but could be improved in terms of delivery.',
  },
  {
    name: 'Emily White',
    image: customer1,
    rating: 5,
    description: 'Amazing products! I will order again. Amazing products! I will order again! ',
  },
];

const FeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
    responsive: [
      {
        breakpoint: 1024, // For desktop
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: 5 ,marginY:6}}>
      <Typography
                variant="h4"
                sx={{
                  marginY:'45px',
                  textAlign:'center'
                }}
              >
                What Our Customer Says
              </Typography>
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack the avatar at the top
              marginBottom:'20px',
              alignItems: 'center',
              textAlign: 'left',
              p: 3,
              boxShadow: 3,
              borderRadius: '15px',
              backgroundColor: '#f3fcff', // Light pink background
              mx: 2,
              maxWidth: '70%',
              position: 'relative',
            }}
          >
            {/* Circular Avatar positioned top-left */}
            <Avatar
              src={feedback.image}
              alt={feedback.name}
              sx={{
                width: 60,
                height: 60,
                position: 'absolute',
                top: 30,
                left: 30,
                border: '2px solid white',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                ml: 10, // Move content to the right for alignment with the avatar
                mt: 3, // Spacing for avatar to sit properly
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontStyle: 'italic',
                  color: '#666',
                }}
              >
                {feedback.description}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  color: '#000',
                  mt: 1,
                }}
              >
                {feedback.name}
              </Typography>
              <Rating
                value={feedback.rating}
                readOnly
                sx={{ mt: 1, color: '#f50057' }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FeedbackSlider;
