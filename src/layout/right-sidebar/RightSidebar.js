import React from "react";
import "./RightSidebar.css";
import Image from "next/image";
import right1 from "../../assets/images/right1.svg";
import right2 from "../../assets/images/right2.svg";
import right3 from "../../assets/images/right3.svg";
const RightSidebar = () => {
  return (
    <aside className="right_side_bar_">
      <div className="right_sidebar_content">
        <Image src={right1} alt="" />
      </div>
      <div className="other_users">
        <div className="imag_area_right">
          <Image src={right2} alt="" />
        </div>
        <div className="imag_area_right">
          <Image src={right3} alt="" />
        </div>
        <div className="imag_area_right">
          <Image src={right1} alt="" />
        </div>
        <div className="imag_area_right">
          <Image src={right3} alt="" />
        </div>
        <div className="imag_area_right">
          <Image src={right2} alt="" />
        </div>
        <div className="imag_area_right">
          <Image src={right3} alt="" />
        </div>
        <div className="imag_area_right">
          <Image src={right1} alt="" />
        </div>
        <div className="imag_area_right">
          <Image src={right3} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
