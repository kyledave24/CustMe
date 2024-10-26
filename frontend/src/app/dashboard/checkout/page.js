import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Input,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

export default function ProductCards() {
  return (
    <section style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <Container sx={{ py: 5 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={10}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
              <Typography variant="h4" component="h3" fontWeight="normal" color="textPrimary">
                Shopping Cart
              </Typography>
              <Box>
                <Typography variant="body1" color="textSecondary">
                  <span>Sort by:</span>
                  <Button href="#!" color="inherit" endIcon={<i className="fas fa-angle-down" />}>
                    price
                  </Button>
                </Typography>
              </Box>
            </Box>

            {[...Array(4)].map((_, index) => (
              <Card key={index} sx={{ mb: 4, borderRadius: 3 }}>
                <CardContent>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item md={2} lg={2}>
                      <CardMedia
                        component="img"
                        image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                        alt="Cotton T-shirt"
                        sx={{ borderRadius: 2 }}
                      />
                    </Grid>
                    <Grid item md={3} lg={3}>
                      <Typography variant="h6" fontWeight="normal">
                        Basic T-shirt
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Size: M Color: Grey
                      </Typography>
                    </Grid>
                    <Grid item md={3} lg={3} display="flex" alignItems="center" justifyContent="center">
                      <IconButton color="primary">
                        <Remove />
                      </IconButton>
                      <TextField
                        type="number"
                        defaultValue={2}
                        inputProps={{ min: 0 }}
                        size="small"
                        sx={{ width: 50 }}
                      />
                      <IconButton color="primary">
                        <Add />
                      </IconButton>
                    </Grid>
                    <Grid item md={2} lg={2} sx={{ textAlign: "center" }}>
                      <Typography variant="h6">$499.00</Typography>
                    </Grid>
                    <Grid item md={1} lg={1} textAlign="end">
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}

            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ display: "flex", flexDirection: "row" }}>
                <TextField label="Discount code" fullWidth size="large" />
                <Button variant="outlined" color="warning" size="large" sx={{ ml: 3 }}>
                  Apply
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Button variant="contained" color="warning" fullWidth size="large">
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
