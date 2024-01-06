import React from "react";
import ResponsiveAppBar from "../component/Navbar";
import CircularChart from "../component/CircularChart";
import "../styles/Dashboard.css";
import BarGraph from "../component/BarGraph";
import { useState } from "react";

const Dashboard = () => {
  const [addPopup, setAddPopup] = useState(false);
  const [getGoal, setGetGoal] = useState(false);

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
      <div className="charts">
        {details.map((detail, index) => (
          <div className="chartBox">
            <CircularChart completed={detail} total={goal[index]} />
            <p>{activity[index]}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button type="submit" className="button" onClick={()=>{
          setAddPopup(true);
        }}>
          Add logs
        </button>
        <button type="submit" className="button" onClick={()=>{
          setGetGoal(true);
        }}>
          Set goals
        </button>
      </div>
      <BarGraph />
    </>
  );
};

export default Dashboard;
