import React from "react";

import "./DottedProgressbar.css";
const DottedProgressBar = () => {
  return (
    <>
      {/* <div className="d-flex">
        <div class="progress-4"></div>
      </div> */}
      {/* <div class="progress-container">
        <div class="progress-bar_" style={{ width: "80%" }}></div>
      </div> */}
      <div class="progress-container">
        <div class="progress-bar_"></div>
        <div class="empty-bar"></div>
      </div>
    </>
  );
};

export default DottedProgressBar;
