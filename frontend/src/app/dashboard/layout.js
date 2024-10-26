"use client";
import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Avatar, Drawer, List, ListItem,
  ListItemIcon, ListItemText, ListItemButton, CssBaseline
} from '@mui/material';
import {
  Menu as MenuIcon, Notifications, Dashboard, Chat, ShoppingCart,
  DesignServices, Store, Logout, Mail as MailIcon, MoveToInbox as InboxIcon
} from '@mui/icons-material';

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const itemsList = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'Chats', icon: <Chat /> },
    { text: 'My Purchases', icon: <ShoppingCart /> },
    { text: 'Designer', icon: <DesignServices /> },
    { text: 'Printing Shops', icon: <Store /> },
    { text: 'Mail', icon: <MailIcon /> },
    { text: 'Inbox', icon: <InboxIcon /> },
    { text: 'Logout', icon: <Logout /> }
  ];

  return (
    <div className="flex bg-white"> {/* Changed inline style to Tailwind */}
      <CssBaseline />
      <AppBar position="fixed" className="bg-gray-100"> {/* Changed AppBar color */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className="text-gray-400" // Ensuring icon is white
          >
            <MenuIcon />
          </IconButton>
          <Avatar src="https://i.pravatar.cc/150?img=3" className="mr-2" />
          <Typography variant="h6" noWrap component="div" className="flex-grow text-gray-400">
            CustMe
          </Typography>
          <IconButton color="inherit" className="text-gray-400">
            <Notifications />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: 'w-72 bg-gray-800 text-white' }} // Set width and background color
      >
        <List className="pt-20"> {/* Added padding top to push content down */}
          {itemsList.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className="flex-grow p-6 mt-16 ml-0 bg-gray-100"> 
        {children}
      </main>
    </div>
  );
};

export default Layout;

