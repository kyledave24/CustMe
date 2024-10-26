import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const items = [
  { title: "T-Shirt", description: "Customize your T-shirt with unique designs, logos, or text. Choose from a variety of colors and styles.", img: "https://images.stockcake.com/public/1/e/2/1e2576ee-5e67-47f9-ba6a-470f167c3eb1_large/elegant-t-shirts-displayed-stockcake.jpg" },
  { title: "Cap", description: "Design your own cap with custom embroidery or printing. Perfect for branding or personal style.", img: "https://images.stockcake.com/public/0/4/e/04ecbf75-c92e-41ec-981f-108d42e4d067_large/caps-for-sale-stockcake.jpg" },
  { title: "Mug", description: "Create personalized mugs for gifts or promotions with your logo, photos, or artwork.", img: "https://images.stockcake.com/public/5/5/d/55de3964-c30b-40cf-95a0-648db4efbae4_large/colorful-mug-array-stockcake.jpg" },
  { title: "Tarpaulin", description: "Get high-quality tarpaulin prints for events, advertising, or special occasions.", img: "https://images.stockcake.com/public/1/0/5/10525864-4a29-4c1b-9a2a-169e9c96f7f4_large/forest-camping-shelter-stockcake.jpg" },
  { title: "Logo Design", description: "Work with our designers to create a unique logo that represents your brand.", img: "https://images.stockcake.com/public/1/5/c/15c2587d-7d2e-4768-9f63-dd5686451726_large/dog-cooking-logo-stockcake.jpg" },
  { title: "Jeans", description: "Customize your jeans with embroidery, patches, or custom fittings for a personalized look.", img: "https://images.stockcake.com/public/d/f/0/df0cdcc0-9986-4375-9216-cf99d21b54f5_large/denim-jeans-display-stockcake.jpg" },
  { title: "Hoodie", description: "Design your own hoodie with custom prints or embroidery. Great for teams, businesses, or personal use.", img: "https://images.stockcake.com/public/4/9/4/494f9874-f5e9-435e-b132-82c14ce3ce36_large/hoodie-on-display-stockcake.jpg" },
  { title: "Shoes", description: "Personalize your shoes with unique designs, colors, and materials for a one-of-a-kind style.", img: "https://images.stockcake.com/public/f/a/3/fa3569dd-a933-4426-b7b4-a8dc969837a2_large/assorted-leather-shoes-stockcake.jpg" }
];

const MainContent = () => (
  <div className="max-w-screen-lg mx-auto -mt-15 p-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden shadow-lg style={{ width: '600px', height: '400px' }}">
          <img className="w-full h-40 object-cover" src={item.img} alt={item.title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="font-bold">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="flex justify-center space-x-2 mt-8">
      <Button variant="outlined">«</Button>
      <Button variant="contained" color="primary">1</Button>
      <Button variant="outlined">2</Button>
      <Button variant="outlined">3</Button>
      <Button variant="outlined">»</Button>
    </div>
  </div>
);

export default MainContent;
