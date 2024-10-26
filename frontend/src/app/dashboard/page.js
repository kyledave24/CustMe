import { Avatar, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import { Message, PersonAdd, Visibility } from '@mui/icons-material';

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-100 flex-grow">
      <div className="relative bg-gray-800 h-48 rounded-lg mb-8 overflow-hidden">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20210819/pngtree-abstract-simple-rectangle-gray-background-image_765112.jpg"
          alt="Cover Photo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center mb-8">
        <Avatar
          alt="Ivan Camus"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuD7HB1oETJVdBwsBsZh4N8FVuGCDjNcdsg&s"
          sx={{ width: 80, height: 80, border: '4px solid white' }} 
          className="mr-4"
        />
        <div className="text-gray-800">
          <Typography variant="h5" component="div" className="font-bold">
            Ivan Camus
          </Typography>
          <div className="space-x-2 mt-2">
            <Button variant="contained" color="success" startIcon={<Message />}>
              Message
            </Button>
            <Button variant="contained" color="success" startIcon={<PersonAdd />}>
              Follow
            </Button>
            <Button variant="contained" color="success" startIcon={<Visibility />}>
              View Profile
            </Button>
          </div>
        </div>
      </div>

      <Grid container spacing={2}>   
        <Grid item xs={12} md={6}>
          <Card className="shadow-md rounded-lg overflow-hidden h-64">
            <CardContent className="p-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31ZuHK8wKem7WBQyNInB5MMyKY4biFHu1wQ&s"
                alt="Portfolio Item 1"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card className="shadow-md rounded-lg overflow-hidden h-32">
                <CardContent className="p-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuD7HB1oETJVdBwsBsZh4N8FVuGCDjNcdsg&s"
                    alt="Portfolio Item 2"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="shadow-md rounded-lg overflow-hidden h-32">
                <CardContent className="p-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8hRgdyteIqJDapkBcCBYbpIw3b9qKuw5sg&s"
                    alt="Portfolio Item 3"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="shadow-md rounded-lg overflow-hidden h-32">
                <CardContent className="p-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8hRgdyteIqJDapkBcCBYbpIw3b9qKuw5sg&s"
                    alt="Portfolio Item 4"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="shadow-md rounded-lg overflow-hidden h-32">
                <CardContent className="p-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuD7HB1oETJVdBwsBsZh4N8FVuGCDjNcdsg&s"
                    alt="Portfolio Item 5"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
