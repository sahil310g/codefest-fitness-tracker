import React from "react";
import "../styles/Exercises.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "../component/Navbar";

const Exercises = () => {
  const ex = ["Running", "Walking", "Swimming", "Dancing"];
  const pics = [
    "https://img.freepik.com/free-photo/pretty-young-woman-running-city_1301-4119.jpg?w=1800&t=st=1704531086~exp=1704531686~hmac=290c2f7131e08856adfc6d81d10e315b39f35a0ea5ce4c7c328a25bfd24c226f",
    "https://images.pexels.com/photos/3779751/pexels-photo-3779751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6173840/pexels-photo-6173840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  const data = [
    "Running is a dynamic cardiovascular exercise that improves heart health, boosts endurance, and burns calories. It enhances mental well-being by reducing stress and promoting a positive mood. Additionally, running engages various muscle groups.",
    "Walking is a great way to improve or maintain your overall health. Just 30 minutes every day can increase cardiovascular fitness, strengthen bones, reduce excess body fat, and boost muscle power and endurance.",
    "Swimming is a full-body workout that enhances cardiovascular fitness, builds muscle strength, and improves flexibility. It is a low-impact exercise, making it gentle on joints and suitable for all fitness levels. Additionally, swimming can help reduce stress, promote relaxation, and boost overall mental well-being.",
    "Dancing is a joyful and effective cardiovascular workout that improves heart health and stamina. It enhances coordination, balance, and flexibility, promoting overall physical fitness. Beyond the physical benefits, dancing is a fun and expressive activity known to reduce stress and uplift mood.",
  ];

  return (
    <div className="exercises-wrapper">
      <ResponsiveAppBar />
      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginRight: 80, marginLeft: 40, marginBottom: 20 }}
      >
        <CardMedia
          sx={{ height: 250, width: 350 }}
          image={pics[0]}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ex[0]}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {data[0]}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Know more</Button>
        </CardActions>
      </Card>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginRight: 80, marginLeft: 40, marginBottom: 20 }}
      >
        <CardMedia
          sx={{ height: 250, width: 350 }}
          image={pics[1]}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ex[1]}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {data[1]}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Know more</Button>
        </CardActions>
      </Card>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginRight: 80, marginLeft: 40, marginBottom: 20 }}
      >
        <CardMedia
          sx={{ height: 250, width: 350 }}
          image={pics[2]}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ex[2]}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {data[2]}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Know more</Button>
        </CardActions>
      </Card>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ marginRight: 80, marginLeft: 40, marginBottom: 20 }}
      >
        <CardMedia
          sx={{ height: 250, width: 350 }}
          image={pics[3]}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ex[3]}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {data[3]}
          </Typography>
        </CardContent>
        <CardActions>
          <a href="/ex:3">
            <Button size="small">Know more</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default Exercises;
