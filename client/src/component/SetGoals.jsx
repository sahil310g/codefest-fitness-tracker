import React, { useState } from "react";
import axios from "axios";

import {
  Card,
  Typography,
  Button,
  TextField,
  Box,
  AppBar,
  Link,
} from "@mui/material";

const SetGoals = ({ userData, setAddPopup, setGetGoal, name, user }) => {
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0]);
  const token = localStorage.getItem("token");
  let data = {};
  const handleSubmit = async () => {
    data = {
      running: arr[0],
      walking: arr[1],
      calorie: arr[2],
      water: arr[3],
      dancing: arr[4],
      swimming: arr[5]
    };

    let goalData = {
        email : userData.email,
        goals : data
    }

    let addData = {
        date : new Date(),
        email : userData.email,
        activities : data
    }


    if (name === "Set Goals") {
      setGetGoal(false);
      try {
        const response = await axios.post("http://localhost:5000/auth/getdata", goalData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setAddPopup(false);
      try {
        const response = await axios.post("http://localhost:5000/auth/setactivities", addData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <Card
          sx={{
            width: 500,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgb(140, 86, 248)",
              fontSize: "1.2rem",
            }}
          >
            Please Fill out the details
          </Typography>
          <TextField
            label="Running (in Kms)"
            type="text"
            sx={{ width: 300 }}
            // value={arr[ 0 ]}
            onChange={(e) => {
              arr[0] = e.target.value;
              setArr(arr);
            }}
          />

          <TextField
            label="Walking (in Kms)"
            type="text"
            sx={{ width: 300 }}
            // value={arr[ 1 ]}
            onChange={(e) => {
              arr[1] = e.target.value;
              setArr(arr);
            }}
          />
          <TextField
            label="Calories"
            type="text"
            sx={{ width: 300 }}
            // value={arr[ 2 ]}
            onChange={(e) => {
              arr[2] = e.target.value;
              setArr(arr);
            }}
          />
          <TextField
            label="Water (in Liters)"
            type="text"
            sx={{ width: 300 }}
            // value={arr[ 3 ]}
            onChange={(e) => {
              arr[3] = e.target.value;
              setArr(arr);
            }}
          />
          <TextField
            label="Dancing (in minutes)"
            type="text"
            sx={{ width: 300 }}
            // value={arr[ 4 ]}
            onChange={(e) => {
              arr[4] = e.target.value;
              setArr(arr);
            }}
          />
          <TextField
            label="Swimming (in minutes)"
            type="text"
            sx={{ width: 300 }}
            // value={arr[ 5 ]}
            onChange={(e) => {
              arr[5] = e.target.value;
              setArr(arr);
            }}
          />
          <Button
            variant="text"
            sx={{
              ":hover": {
                color: "white",
                backgroundColor: "rgb(124, 60, 240)",
              },
              my: 2,
              display: "block",
              backgroundColor: "rgb(140, 86, 248)",
              color: "white",
              paddingX: "15px",
            }}
            onClick={() => {
              handleSubmit();
            }}
          >
            {name}
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default SetGoals;
