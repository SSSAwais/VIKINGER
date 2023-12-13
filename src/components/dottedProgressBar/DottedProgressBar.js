import React, { useState } from "react";

import "./DottedProgressbar.css";
const DottedProgressBar = () => {
  const [progress, setProgress] = useState(22);
  return (
    <>
      {/* <div className="d-flex">
        <div className="progress-4"></div>
      </div> */}
      {/* <div className="progress-container">
        <div className="progress-bar_" style={{ width: "80%" }}></div>
      </div> */}
      {/* <div className="progress-container">
        <div className="progress-bar_"></div>
        <div className="empty-bar"></div>
      </div> */}

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <div className="dashed"></div>
        </div>
      </div>
    </>
  );
};

export default DottedProgressBar;
