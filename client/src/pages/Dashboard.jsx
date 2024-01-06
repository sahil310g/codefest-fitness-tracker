import React from "react";
import { useState, useEffect } from "react";
import ResponsiveAppBar from "../component/Navbar";
import CircularChart from "../component/CircularChart";
import "../styles/Dashboard.css";
import BarGraph from "../component/BarGraph";
// import { useState } from "react";
import SetGoals from "../component/SetGoals";
import axios from "axios";

import UserDashboard from "../component/UserDashboard";

const Dashboard = () => {
  const [userData, setuserData] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [getGoal, setGetGoal] = useState(false);

  useEffect(() => {
    const url = "http://localhost:5000/auth/getdata";
    const token = localStorage.getItem("token");
    const dashboardHandler = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("this is response data", response.data);

        setuserData(response.data);
        console.log(userData);
        //   const user_email = localStorage.getItem("email");
      } catch (error) {
        console.log(error);
      }
    };
    dashboardHandler();
  }, []);

  const activity = [
    "Running",
    "Walking",
    "Calorie Intake",
    "Water Intake",
    "Dancing",
    "Swimming",
  ];
  const details = [20, 30, 40, 50, 60, 170];
  const goal = [100, 100, 100, 100, 100, 100, 100];
  return (
    <>
      <ResponsiveAppBar />
      <UserDashboard userD={userData} />
      <div className="charts">
        {details.map((detail, index) => (
          <div className="chartBox">
            <CircularChart completed={detail} total={goal[index]} />
            <p>{activity[index]}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          type="submit"
          className="button"
          onClick={() => {
            setAddPopup(true);
          }}
        >
          Add logs
        </button>
        <button
          type="submit"
          className="button"
          onClick={() => {
            setGetGoal(true);
          }}
        >
          Set goals
        </button>
      </div>
      <BarGraph />
      {getGoal && (
        <SetGoals
          userData={userData}
          setAddPopup={setAddPopup}
          setGetGoal={setGetGoal}
          name={"Set Goals"}
        />
      )}
      {addPopup && (
        <SetGoals
          userData={userData}
          setAddPopup={setAddPopup}
          setGetGoal={setGetGoal}
          name={"Add Logs"}
        />
      )}
    </>
  );
};

export default Dashboard;
