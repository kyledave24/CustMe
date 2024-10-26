import React from 'react';
import { Avatar, Button, Card, CardContent, IconButton } from '@mui/material';
import { MoreVert, Search } from '@mui/icons-material';

const RequestCard = ({ name, time, message, avatar }) => {
  return (
    <Card className="shadow-lg rounded-lg p-4 mb-4 flex items-start relative">
      <Avatar src={avatar} alt={name} className="mr-4" />
      <CardContent className="flex-grow">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-sm text-gray-500">{time} ago</p>
          </div>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <p className="mt-2 text-sm text-gray-700">{message}</p>
        <div className="mt-4 flex space-x-4">
          <Button variant="contained" color="success" className="bg-green-600 text-white">
            Apply
          </Button>
          <Button variant="contained" color="error" className="bg-red-600 text-white">
            Ignore
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const RequestList = () => {
  const requests = [
    {
      name: 'Nadiye Ainara',
      time: '1m',
      message: 'I need a custom logo design for my new business. Looking forward to collaborating!',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHp4HQQXzr1TR5MW3geJWmjClmlibJjPCZgg&s',  // Real link
    },
    {
      name: 'Mairenn LaToya',
      time: '1m',
      message: 'Looking for a designer to create a unique wedding invitation. Please reach out!',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuDNOLfOw0BlcEoeDbCfo-vhVRCCGsS9HKQ&s',  // Real link
    },
    {
      name: 'Epa Mireille',
      time: '1m',
      message: 'I need a custom T-shirt design for our upcoming family reunion. Please message me with your portfolio!',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc93ObuJNNtC-D4yZL_SlCdgTqPNuJspU7w&s',  // Real link
    },
  ];

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-end items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none"
          />
          <Search className="absolute top-2 left-3 text-gray-500" />
        </div>
      </div>

      {/* Request Cards */}
      {requests.map((request, index) => (
        <RequestCard
          key={index}
          name={request.name}
          time={request.time}
          message={request.message}
          avatar={request.avatar}
        />
      ))}
    </div>
  );
};

export default RequestList;
