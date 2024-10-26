import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



const ServicePage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Container maxWidth="md" className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <Typography variant="h3" className="text-center text-gray-800 mb-6 font-bold">
            Service Offered
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6 text-justify">
            The CustMe platform aims to enable greater personalization and customization in retail, 
            supporting freelance designers, small printing businesses, and clients' demands. 
            It advances web and digital printing technologies. 
            This represents an opportunity to boost entrepreneurship and economic 
            productivity by granting businesses and independent professionals access to a 
            broader market, addressing the limitations of traditional retail in meeting 
            the growing consumer demand for personalized items.
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default ServicePage;
