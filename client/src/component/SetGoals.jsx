import React, { useState } from "react";

import {
  Card,
  Typography,
  Button,
  TextField,
  Box,
  AppBar,
  Link,
} from "@mui/material";

const SetGoals = ({ setAddPopup, setGetGoal, name }) => {
    const handleSubmit = ()=>{
        (name==="Set Goals")? setGetGoal(false) :setAddPopup(false);
    }
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0]);

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
            onClick={() => {handleSubmit()}}
          >
            {name}
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default SetGoals;
