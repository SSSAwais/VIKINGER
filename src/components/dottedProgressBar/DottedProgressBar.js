import React from "react";

import "./DottedProgressbar.css";
const DottedProgressBar = () => {
  return (
    <>
      {/* <div className="d-flex">
        <div className="progress-4"></div>
      </div> */}
      {/* <div className="progress-container">
        <div className="progress-bar_" style={{ width: "80%" }}></div>
      </div> */}
      <div className="progress-container">
        <div className="progress-bar_"></div>
        <div className="empty-bar"></div>
      </div>
    </>
  );
};

export default DottedProgressBar;
