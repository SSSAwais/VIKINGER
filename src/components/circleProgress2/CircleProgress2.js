import React from "react";
import { CircleProgress } from "react-gradient-progress";
import "./CircleProgress2.css";
const CircleProgress2 = () => {
  return (
    <>
      <div className="CircleProgress2 ">
        <div className="cirlce_pro2">
          <CircleProgress
            percentage={42}
            strokeWidth={5}
            secondaryColor=" #E8E8EE"
            width={80}
            // primaryColor={["#3479FB", "#845adf"]}
          />
        </div>
      </div>
    </>
  );
};

export default CircleProgress2;
