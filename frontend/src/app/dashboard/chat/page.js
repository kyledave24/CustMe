import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Container,
} from "@mui/material";
import { Phone, VideoCall, MoreHoriz, Send, Search as SearchIcon } from "@mui/icons-material";

export default function Messages() {
  const messages = [
    {
      name: "Luila Toledo",
      status: "Online",
      avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
      unread: 5,
      online: true,
    },
    {
      name: "Jrea Divino",
      status: "Online",
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
      unread: 2,
      online: true,
    },
    {
      name: "Lany Nazareno",
      status: "Online",
      avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
      unread: 0,
      online: true,
    },
    {
      name: "Kyle Dave Cabatas",
      status: "Offline",
      avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
      unread: 0,
      online: false,
    },
  ];

  return (
    <main className="flex-1 overflow-hidden">
      <Container maxWidth="xl" className="p-0"> {/* MUI Container used here */}
        <Card className="shadow-sm m-0">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-5 xl:col-span-3 border-r">
              {/* Search input */}
              <div className="p-4 hidden md:block">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              {/* Contacts list */}
              <List>
                {messages.map((msg, index) => (
                  <ListItem
                    key={index}
                    button
                    className="border-b hover:bg-gray-100"
                  >
                    <ListItemAvatar>
                      <Badge
                        color="success"
                        variant="dot"
                        invisible={!msg.online}
                      >
                        <Avatar
                          src={msg.avatar}
                          alt={msg.name}
                          className="rounded-full"
                        />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={msg.name}
                      secondary={
                        msg.online ? (
                          <span className="text-green-500">Online</span>
                        ) : (
                          <span className="text-red-500">Offline</span>
                        )
                      }
                    />
                    {msg.unread > 0 && (
                      <Badge
                        badgeContent={msg.unread}
                        color="success"
                        className="ml-auto"
                      />
                    )}
                  </ListItem>
                ))}
              </List>
            </div>

            <div className="col-span-12 lg:col-span-7 xl:col-span-9">
              {/* Chat header */}
              <div className="py-2 px-4 border-b hidden lg:block">
                <div className="flex items-center">
                  <Avatar
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Sharon Lessman"
                  />
                  <div className="ml-3 flex-grow">
                    <strong>Scammer</strong>
                    <div className="text-gray-500 text-sm">
                      <em>Typing...</em>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <IconButton color="primary">
                      <Phone />
                    </IconButton>
                    <IconButton color="primary">
                      <VideoCall />
                    </IconButton>
                    <IconButton>
                      <MoreHoriz />
                    </IconButton>
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="chat-messages p-4 h-[400px] overflow-y-scroll">
                {/* Message right */}
                <div className="flex justify-end mb-4">
                  <div className="flex items-end">
                    <Avatar
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="You"
                      className="mr-2"
                    />
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="font-bold mb-1">You</div>
                      Hello, how are you?
                    </div>
                  </div>
                </div>

                {/* Message left */}
                <div className="flex justify-start mb-4">
                  <div className="flex items-end">
                    <Avatar
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="Sharon Lessman"
                      className="mr-2"
                    />
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="font-bold mb-1">Scammer</div>
                      Where is my money?
                    </div>
                  </div>
                </div>
              </div>

              {/* Message input */}
              <div className="flex-grow-0 py-3 px-4 border-t">
                <div className="flex">
                  <TextField
                    variant="outlined"
                    placeholder="Type your message"
                    fullWidth
                  />
                  <Button variant="contained" color="primary" className="ml-3">
                    <Send />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}
