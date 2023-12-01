import React from "react";
import { CircleProgress } from "react-gradient-progress";
import "./CircleProgress.css";
const CircleProgress1 = () => {
  return (
    <>
      <div className="CircleProgress ">
        <div className="cirlce_pro">
          <CircleProgress
            percentage={87}
            strokeWidth={5}
            secondaryColor=" #E8E8EE"
            width={80}
            primaryColor={["#2DECFE", "#5A67F4"]}
          />
        </div>
      </div>
    </>
  );
};

export default CircleProgress1;
