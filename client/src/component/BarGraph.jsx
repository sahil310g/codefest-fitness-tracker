import React from 'react';
import '../styles/BarGraph.css'; 

const BarGraph = () => {
  const data = [2, 4, 1, 5, 3, 6, 2];

  return (
    <div className="bar-graph">
      <h2>Goals completed in previous days</h2>
      <div className="bars">
        {data.map((value, index) => (
          <div className="bar" key={index} style={{ height: `${(value / 6) * 100}%` }}>
            <span className="label">{value}</span>
          </div>
        ))}
      </div>
      <div className="scale">
        <span>Day 1</span>
        <span>Day 2</span>
        <span>Day 3</span>
        <span>Day 4</span>
        <span>Day 5</span>
        <span>Day 6</span>
        <span>Day 7</span>
      </div>
    </div>
  );
};

export default BarGraph;
