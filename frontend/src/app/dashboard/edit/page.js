"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Grid, Card, CardContent, Avatar, Container } from "@mui/material";

const Settings = () => {
  const [rows, setRows] = useState([]); 
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null ? setRows([...rows, newRow]) : setRows(rows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRow)));
  };

  return (
    <Container maxWidth={false} sx={{ px: 4, py: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <h3>Personal Information</h3>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      fullWidth
                      defaultValue="Luila Cabatas"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      fullWidth
                      defaultValue="+990 3343 7865"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      fullWidth
                      defaultValue="KyleLuilaForever@gmail.com"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Username"
                      fullWidth
                      defaultValue="Luilyle"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Bio"
                      multiline
                      rows={4}
                      fullWidth
                      defaultValue="I am an expert in all kinds of desining. It is my hobby since i was a kid"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
                    <Button variant="outlined">Cancel</Button>
                    <Button variant="contained" color="primary">Save</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h3>Your Photo</h3>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 72, height: 72, mr: 2 }} />
                <div>
                  <p>Edit your photo</p>
                  <Button variant="text">Delete</Button>
                  <Button variant="text">Update</Button>
                </div>
              </Box>
              <Button variant="contained" component="label" fullWidth>
                Upload Photo
                <input hidden accept="image/*" type="file" />
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
