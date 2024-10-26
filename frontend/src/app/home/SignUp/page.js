import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';



const SignIn = () => {
  return (
    <div>   
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24">
        <Button variant="text" className="text-black font-extrabold text-4xl mb-2">
          <span className="text-blue-500">C</span>
          <span className="text-blue-500">u</span>
          <span className="text-blue-500">s</span>
          <span className="text-yellow-500">t</span>
          <span className="text-blue-500">M</span>
          <span className="text-yellow-500">e</span>
        </Button>

        <Container maxWidth="xs" className="bg-sky-300 p-8 rounded-lg shadow-lg">
          <Typography variant="h6" className="text-center text-gray-800 font-bold mb-4">
            Log in to CustMe
          </Typography>
          <Typography variant="subtitle1" className="text-center text-gray-800 mb-6">
            Connect with designers and printing providers
          </Typography>
          
          <div className="flex justify-between space-x-4 mb-6">
            <Button
              startIcon={<GoogleIcon style={{ color: '#4285F4' }} />}
              className="bg-white hover:bg-gray-100 text-black font-bold px-5 py-2 rounded-full whitespace-nowrap"
            >
              <Typography className="text-xs font-bold">Sign up to Google</Typography>
            </Button>
            <Button
              startIcon={<FacebookIcon style={{ color: '#1877F2' }} />}
              className="bg-white hover:bg-gray-100 text-black font-bold px-5 py-2 rounded-full whitespace-nowrap"
            >
              <Typography className="text-xs font-bold">Sign up to Facebook</Typography>
            </Button>
          </div>
          
          <div className="flex items-center justify-between my-4">
            <div className="flex-grow border-t border-white"></div>
            <span className="mx-4 text-white font-semibold">OR</span>
            <div className="flex-grow border-t border-white"></div>
          </div>
          <div className="flex justify-between space-x-4 mb-0">
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              className="bg-white rounded"
            />
            <TextField
              label="Last Name"
              fullWidth
              margin="normal"
              className="bg-white rounded"
            />
          </div>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            className="mb-0 bg-white rounded"
          />

        <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            className="mb-0 bg-white rounded"
          />
         

          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            className="mb-0 bg-white rounded"
          />

        <TextField
            label="ConfirmPassword"
            fullWidth
            margin="normal"
            type="password"
            className="mb-2 bg-white rounded"
          />


         
          <div className="flex justify-between items-center mt-2">
            <Link href="#" underline="hover" className="text-blue-500">
              Forgot Password?
            </Link>
            <Button className="bg-yellow-500 hover:bg-yellow-600 rounded text-white font-semibold px-5 py-2">
              Sign In
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
