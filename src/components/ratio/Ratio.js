import React from "react";
import { CircleProgress } from "react-gradient-progress";
import "./Ratio.css";
const RatioCircle = () => {
  return (
    <>
      <div className="CircleProgress2 ratio_chart">
        <div className="cirlce_pro2 main_div_ratio">
          <CircleProgress
            percentage={80}
            strokeWidth={7}
            secondaryColor=" #5B64F3"
            width={80}
            // primaryColor={["#3479FB", "#845adf"]}
          />
        </div>
        <p className="ratio_heading">Ratio</p>
      </div>
    </>
  );
};

export default RatioCircle;
