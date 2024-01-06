import React from "react";
import '../styles/description.css';
const ExerciseDescription = ({ }) => {
  let imgUrl = 'https://img.freepik.com/free-photo/pretty-young-woman-running-city_1301-4119.jpg?w=1800&t=st=1704531086~exp=1704531686~hmac=290c2f7131e08856adfc6d81d10e315b39f35a0ea5ce4c7c328a25bfd24c226f';
  let Heading = "Running Exercise";
  let data = "Running is a dynamic cardiovascular exercise that improves heart health, boosts endurance, and burns calories. It enhances mental well-being by reducing stress and promoting a positive mood. Additionally, running engages various muscle groups, contributing to overall strength and fitness.";
  return <div className="outer-container">
    <div style={{ backgroundImage: `url(${imgUrl})` }} className="description-container">
      <div className="heading">
        {Heading}
      </div>
      <div className="data">
        {data}
      </div>
    </div>

  </div>
};

export default ExerciseDescription;