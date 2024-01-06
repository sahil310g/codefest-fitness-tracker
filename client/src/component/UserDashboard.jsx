import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  Typography,
  Button,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  backdropClasses,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories) {
  return { name, calories };
}

const UserDashboard = () => {
  //   const [userdata, setuserdata] = useState({});

  useEffect(() => {
    const url = "http://localhost:5000/auth/getdata";
    const token = localStorage.getItem("token");
    const dashboardHandler = async () => {
      try {
        const response = await axios.get(url, {
          header: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("this is response data", response.data);

        const userdata = response.user;
        //   const user_email = localStorage.getItem("email");
      } catch (error) {
        console.log(error);
      }
    };
    dashboardHandler();
  }, []);

  let person = "-";

  const rows = [
    createData("Email ID", "emailID"),
    createData("Username", person),
    createData("Age", person),
    createData("Gender", person),
    createData("Height (in cm)", person),
    createData("Weight (in kg)", person),
    createData("BMI", person),
  ];
  return (
    <>
      <Box sx={{ height: "72vh" }}>
        <Box sx={{ width: "100%", marginY: "1rem", textAlign: "center" }}>
          <Typography variant="h5">User Profile</Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{ width: "35vw", marginX: "auto", marginBottom: "1rem" }}
        >
          <Table
            sx={{ width: "35vw", marginX: "auto" }}
            size="large"
            aria-label="a dense table"
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* <Footer /> */}
    </>
  );
};

export default UserDashboard;
