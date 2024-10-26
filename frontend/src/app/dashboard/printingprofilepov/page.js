"use client";
import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, IconButton, Avatar } from '@mui/material';
import { Star as StarIcon, StarHalf as StarHalfIcon, Message as MessageIcon, ArrowBackIos, ArrowForwardIos, Edit as EditIcon, Person as PersonIcon, CameraAlt as CameraIcon, Phone as PhoneIcon, AccessTime as AccessTimeIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';

const StarRating = () => (
  <div className="flex items-center">
    <StarIcon className="text-yellow-500" />
    <StarIcon className="text-yellow-500" />
    <StarIcon className="text-yellow-500" />
    <StarIcon className="text-yellow-500" />
    <StarHalfIcon className="text-yellow-500" />
    <Typography variant="body2" className="ml-2">4.0</Typography>
  </div>
);

const PortfolioCarousel = () => {
  const images = [
    { src: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg', alt: 'Leveria' },
    { src: 'https://png.pngtree.com/png-clipart/20230324/original/pngtree-modern-demo-logo-design-vector-file-png-image_9002366.png', alt: 'Arterial Coffee' },
    { src: '/path/to/supastar.png', alt: 'Supastar' },
    { src: '/path/to/blackburgh.png', alt: 'Blackburgh' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <IconButton
        size="small"
        style={{ position: 'absolute', top: -40, right: 8 }}
      >
        <EditIcon /> Edit post
      </IconButton>
      <div className="flex items-center">
        <IconButton onClick={handlePrev}>
          <ArrowBackIos />
        </IconButton>
        <div className="w-[600px] h-[400px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="h-full object-contain" />
        </div>
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </div>
    </div>
  );
};

const AboutMeCard = () => (
  <Card className="mb-6 w-full flex justify-center items-center" style={{ marginTop: '50px', position: 'relative' }}>
    <CardContent>
      <div className="flex items-center justify-center mb-4">
        <PersonIcon className="mr-2" />
        <Typography variant="h6">About us</Typography>
        <IconButton size="small" style={{ position: 'absolute', top: 0, right: 0 }}>
          <EditIcon />
        </IconButton>
      </div>
      <div className="flex items-center mb-2">
        <Typography variant="body1" className="mt-2">
          Printing Services: Business Cards, Brochure/Flyer, Banners, Posters, Clothing.
        </Typography>
      </div>
      <div className="flex items-center mt-4">
        <PhoneIcon className="mr-2" />
        <Typography variant="body2">091234567891</Typography>
      </div>
      <div className="flex items-center mt-2">
        <AccessTimeIcon className="mr-2" />
        <Typography variant="body2">8:00 AM - 8:00 PM</Typography>
      </div>
      <div className="flex items-center mt-2">
        <LocationOnIcon className="mr-2" />
        <Typography variant="body2">Marigondon, Lapu-Lapu City</Typography>
      </div>
      <Typography variant="body2" className="mt-4 text-justify">
        Hello, I am a perfectionist having more than 10 years of professional experience specialized in minimalism and simplicity.
      </Typography>
    </CardContent>
  </Card>
);

const MainContent = () => (
  <div className="mt-16 p-8 bg-gray-50">
    <div className="relative mb-6">
      <div className="relative h-72 w-full">
        <img src="https://timelinecovers.pro/facebook-cover/download/beautiful_sunset-facebook-cover.jpg" alt="cinema background" className="object-cover w-full h-full rounded-t-lg" />
        <div className="absolute bottom-4 right-4">
          <Button variant="contained" color="primary" startIcon={<CameraIcon />}>
            Edit cover photo
          </Button>
        </div>
      </div>
      <div className="absolute left-3 -bottom-14 flex items-center">
        <Avatar
          alt="MT Printing Services"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 120, height: 120, border: '3px solid white' }}
          className="shadow-lg"
        />
      </div>
    </div>
    <div className="flex items-center mb-4" style={{ marginLeft: '140px', marginTop: '-16px' }}>
      <div>
        <Typography variant="h5" className="font-bold ">MT Printing Services</Typography>
        <div className="flex items-center mt-1">
          <Typography variant="body2" className="mr-1">4.8</Typography>
          <StarRating />
        </div>
      </div>
      <div className="ml-auto mr-8">
        <Button variant="outlined" startIcon={<EditIcon />} color="primary">
          Edit Profile
        </Button>
      </div>
    </div>
    <div className="flex justify-between items-start mb-6">
      <div className="w-1/3 pr-4 flex justify-center">
        <AboutMeCard />
      </div>
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <Typography variant="h6" className="mb-4">Portfolio</Typography>
        <PortfolioCarousel />
      </div>
    </div>
  </div>
);

const printingprofilepov = () => (
  <div>
    <MainContent />
  </div>
);

export default printingprofilepov;
