"use client";
import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const purchases = [
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png", 
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Ready for pickup",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png", 
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Processing",
  },
  {
    image: "https://cdn.logo.com/hotlink-ok/logo-social.png", 
    item: "Black Mug",
    price: "₱150",
    quantity: 2,
    status: "Picked Up",
  },
];

const MainContent = () => (
  <div className="mt-16 p-8">
    <Typography variant="h5" gutterBottom>
      My Purchases
    </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="purchases table">
        <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell>Prices</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchases.map((purchase, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center">
                  <img
                    src={purchase.image}
                    alt={purchase.item}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <Typography>{purchase.item}</Typography>
                </div>
              </TableCell>
              <TableCell>{purchase.price}</TableCell>
              <TableCell>{purchase.quantity}</TableCell>
              <TableCell>{purchase.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

const mypurchases = () => (
  <div>
    <MainContent />
  </div>
);

export default mypurchases;
