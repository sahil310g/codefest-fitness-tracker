import React, { useState } from "react";
import "../styles/CircularChart.css";

function CircularChart({ completed = 10, total = 100 }) {
  const percentage = (completed / total) * 100;
  const [radius, setRadius] = useState(40); // Radius of the circle
  const [strokeWidth, setStrokeWidth] = useState(10); // Width of the stroke
  const [normalizedRadius, setNormalizedRadius] = useState(
    radius - strokeWidth * 2
  );
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="circle-base"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="circle-progress"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text x={radius} y={radius} textAnchor="middle" fontSize="15">
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircularChart;
