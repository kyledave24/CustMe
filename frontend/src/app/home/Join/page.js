import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PrintIcon from '@mui/icons-material/Print';

const Join = () => {
  return (
    <>
    
      <div className="min-h-screen bg-white pt-24 flex flex-col items-center">
        
        <div className="text-center mb-1 mt-5">
          <Button variant="text" className="text-black font-extrabold text-4xl">
            <span className="text-blue-500">C</span>
            <span className="text-blue-500">u</span>
            <span className="text-blue-500">s</span>
            <span className="text-yellow-500">t</span>
            <span className="text-blue-500">M</span>
            <span className="text-yellow-500">e</span>
          </Button>
        </div>

        <Container maxWidth={false} className="flex items-center justify-center">
          <div className="bg-blue-400 p-6 rounded-lg shadow-lg w-[600px] h-[350px]">
                <Typography variant="h4" className=" font-bold text-center mt-10 -mb-10">
                  Join Our Community
                </Typography>
            <div className="flex justify-evenly items-center h-full">
              <Button
                variant="contained"
                className="bg-white text-black rounded-lg shadow-md hover:bg-gray-200 flex flex-col items-center justify-center w-[45%] h-[120px] p-4"
              >
                <DesignServicesIcon fontSize="inherit" className="text-4xl mb-2" />
                <Typography variant="h5" className="text-xl font-bold text-center">
                  I AM A DESIGNER
                </Typography>
              </Button>
              <Button
                variant="contained"
                className="bg-white text-black rounded-lg shadow-md hover:bg-gray-200 flex flex-col items-center justify-center w-[45%] h-[120px] p-4"
              >
                <PrintIcon fontSize="inherit" className="text-4xl mb-2" />
                <Typography variant="h5" className="text-xl font-bold text-center">
                  I AM A PRINTING PROVIDER
                </Typography>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Join;
