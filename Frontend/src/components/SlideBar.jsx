import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Include carousel styles
import img1 from '../assets/images/slide1.jpg'; // Adjust path accordingly
import img2 from '../assets/images/slide2.png'; // Adjust path accordingly
import img3 from '../assets/images/slide3.png'; // Adjust path accordingly
import img4 from '../assets/images/img2.png'; // Adjust path accordingly

const slides = [
    {
        id: 1,
        image: img1,
        caption: "Capture the world as you see it",
    },
    {
        id: 2,
        image: img2,
        caption: "The New Way To Capture!",
    },
    {
        id: 3,
        image: img3,
        caption: "The New Way To Capture!",
    },
    {
        id: 4,
        image: img4,
        caption: "The New Way To Capture!",
    }
    // {
    //     id: 3,
    //     image: img3,
    //     caption: "Use blue cut glasses to prevent light!",
    // },
    // {
    //     id: 4,
    //     image: img4,
    //     caption: "The New Way To Capture!",
    // }
];

const SlideBar = () => {
    return (
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showIndicators={true}>
            {slides.map(slide => (
                <div key={slide.id}>
                    <img src={slide.image} alt={slide.caption} style={{ height: "500px", objectFit: "cover" }} />
                    <Box sx={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: 2,
                        borderRadius: 1,
                    }}>
                        <Typography variant="h5">{slide.caption}</Typography>
                        <Button variant="contained" sx={{ marginTop: 1 }}>
                            Shop Now
                        </Button>
                    </Box>
                </div>
            ))}
        </Carousel>
    );
};

export default SlideBar;
