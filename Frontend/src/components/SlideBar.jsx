import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import FeatureBar from './FeatureBar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Include carousel styles
import img1 from '../assets/images/slide1.jpg'; // Adjust path accordingly
import img2 from '../assets/images/vdo2.mp4'; // Adjust path accordingly
import img3 from '../assets/images/vdo1.mp4'; // Adjust path accordingly
import img4 from '../assets/images/vdo3.mp4'; // Adjust path accordingly


const slides = [
    {
        id: 1,
        type: 'image',
        image: img1,
        caption: "Capture the world as you see it",
    },
    {
        id: 2,
        type: 'video', 
        video: img3,
        caption: "The New Way To Capture!",
    },
    {
        id: 3,
        type: 'video',
        video: img2,
        caption: "The New Way To Capture!",
    },
    {
        id: 4,
        type: 'video',
        video: img4,
        caption: "The New Way To Capture!",
    }
];



const SlideBar = () => {
    return (
        <Box>
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showIndicators={true}>
                {slides.map(slide => (
                    <div key={slide.id}>
                        {slide.type === 'video' ? (
                            <video
                                src={slide.video}
                                autoPlay
                                muted
                                loop
                                style={{ height: "500px", width: "100%", objectFit: "cover" }}
                            />
                        ) : (
                            <img
                                src={slide.image}
                                alt={slide.caption}
                                style={{ height: "500px", objectFit: "cover" }}
                            />
                        )}
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
                        </Box>
                    </div>
                ))}
            </Carousel>
            
            {/* Categories Section */}
            <FeatureBar />
        </Box>
    );
};

export default SlideBar;
