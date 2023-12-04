import Image from "next/image";
import React from "react";
import "./GamingLevelTop.css";
import level from "../../../assets/images/LevelNumber.png";
import { ProgressBar } from "react-bootstrap";
const GamingLevelTop = () => {
  return (
    <>
      <div className="gaming_level_top_wrapper">
        <div className="image_area_gaming_level">
          <Image src={level} alt="" />
        </div>
        <div className="right_gaming_level">
          <div className="top_one d-flex justify-content-between">
            <p className="mb-0 percentDetail_">
              <span>+38 EXP</span> to reach the next level
            </p>
            <p className="mb-0 total_point">13.625 TOTAL EXP POINTS RECEIVED</p>
          </div>
          <div className="gaming_level_progress_bar">
            <ProgressBar variant="bg-custom" now={80} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamingLevelTop;
