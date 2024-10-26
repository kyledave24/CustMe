"use client";
import React from 'react';
import { TextField, Button } from '@mui/material';
import { Facebook, Instagram, Pinterest, Twitter, LinkedIn, CreditCard, LocationOn, Phone, Email } from '@mui/icons-material';

const Subscription = () => {
  return (
    <footer className="bg-gray-200 py-16 text-gray-700" id="footer">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <p>Questions? Go ahead.</p>
          <form action="/action_page.php" target="_blank">
            <div className="mb-4">
              <TextField fullWidth label="Name" variant="outlined" required />
            </div>
            <div className="mb-4">
              <TextField fullWidth label="Email" variant="outlined" required />
            </div>
            <div className="mb-4">
              <TextField fullWidth label="Subject" variant="outlined" required />
            </div>
            <div className="mb-4">
              <TextField fullWidth label="Message" variant="outlined" multiline rows={4} required />
            </div>
            <Button type="submit" variant="contained" fullWidth color="primary">
              Send
            </Button>
          </form>
        </div>

        {/* About Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">About us</a></li>
            <li><a href="#" className="hover:text-gray-900">We're hiring</a></li>
            <li><a href="#" className="hover:text-gray-900">Support</a></li>
            <li><a href="#" className="hover:text-gray-900">Find store</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipment</a></li>
            <li><a href="#" className="hover:text-gray-900">Payment</a></li>
            <li><a href="#" className="hover:text-gray-900">Gift card</a></li>
            <li><a href="#" className="hover:text-gray-900">Return</a></li>
            <li><a href="#" className="hover:text-gray-900">Help</a></li>
          </ul>
        </div>

        {/* Store Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Store</h4>
          <p className="flex items-center"><LocationOn className="mr-2" /> Company Name</p>
          <p className="flex items-center"><Phone className="mr-2" /> 0044123123</p>
          <p className="flex items-center"><Email className="mr-2" /> ex@mail.com</p>
          <h4 className="text-lg font-bold mt-6 mb-4">We accept</h4>
          <p className="flex items-center"><CreditCard className="mr-2" /> Credit Card</p>
          
          <div className="flex space-x-4 mt-4">
            <Facebook className="hover:text-gray-900 cursor-pointer" />
            <Instagram className="hover:text-gray-900 cursor-pointer" />
            <Pinterest className="hover:text-gray-900 cursor-pointer" />
            <Twitter className="hover:text-gray-900 cursor-pointer" />
            <LinkedIn className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Subscription;
