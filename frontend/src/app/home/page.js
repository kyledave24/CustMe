import React from 'react';
import Link from 'next/link';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

function home() {
  return (
    <div className="min-h-screen bg-white">

      <div id="home" className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-16 lg:space-x-40 min-h-screen">
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-black font-extrabold text-5xl lg:text-6xl">Personalize your world with</h1>
          <h1 className="text-black font-extrabold text-5xl lg:text-6xl mt-2">CustMe</h1>
          <p className="text-black font-normal mt-4 text-xl">Connect with Designers and Printing providers.</p>
          <div className="flex space-x-6 mt-7">
            <Link href="/Sign-up" passHref>
              <div className="bg-yellow-500 rounded text-black font-semibold px-4 py-2 cursor-pointer">Get Started</div>
            </Link>
            <div className="bg-white rounded text-black font-semibold px-4 py-2 border border-gray-300 cursor-pointer">Learn More</div>
          </div>
        </div>

        <div className="flex justify-center items-center w-100 h-100 ml-8">
        <img
         src="https://s3-ap-south-1.amazonaws.com/internshala-blog/wp-content/uploads/2021/02/Careers-in-graphic-design.jpg.webp"
         alt="Your Image"
         className="w-[500px] h-[500px] max-w-full max-h-full"
/>

        </div>
      </div>

      <div id="about" className="min-h-screen flex justify-center items-center bg-white p-6">
      <div className="bg-gray-200 text-black rounded-lg p-12 max-w-6xl">
      <div className="mb-6">
      <h1 className="text-4xl font-bold">About CustMe</h1> 
      </div>
      <h6 className="text-2xl font-bold">OUR STORY</h6> 
      <p className="text-black text-justify text-xl mt-4"> 
        CustMe was founded on the belief that everyone deserves personalized products that reflect their unique style. Recognizing a market need for affordable, high-quality customization, we created a platform that connects customers with skilled designers and reliable printing services, ensuring a seamless design and print experience. Today, CustMe isn't just a solution—it's a community built on creativity and quality.
       </p>
      </div>
      </div>


      <div id="services" className="min-h-screen flex flex-col items-center rounded-lg justify-center bg-white">
        <h2 className="text-4xl font-bold mt-10">CustMe Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-20 md:w-auto">
          <ServiceCard
            title="Design Services"
            description="Connect with freelance designers to create unique, personalized designs tailored to your needs."
            buttonText="Explore Design Services"
            imageUrl="https://i.pinimg.com/originals/e5/29/ae/e529ae5785e684063b0ecf58137078b6.png"
          />
          <ServiceCard
            title="Printing Services"
            description="Access a wide range of high-quality printing options to bring your designs to life, from digital prints to eco-friendly solutions."
            buttonText="Explore Printing Options"
            imageUrl="https://image.freepik.com/free-vector/digital-printing-concept-illustration_23-2148470662.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default home;

const ServiceCard = ({ title, description, buttonText, imageUrl }) => {
  return (
    <Card className="shadow-lg w-full md:w-80 min-h-full h-auto flex flex-col">
    <div className="relative w-full h-87 md:h-60 lg:h-99">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
      <CardContent className="flex-grow text-center p-4">
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-2">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="justify-center p-2">
        <Button
          variant="contained"
          className="w-full justify-center rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};