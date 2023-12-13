"use client";
import React, { useState } from "react";
import "./RightSidebar.css";
import Image from "next/image";
import right1 from "../../assets/images/right1.svg";
import right2 from "../../assets/images/right2.svg";
import right3 from "../../assets/images/right3.svg";
import RightSidebarIcons from "@/components/rightSidebarIcons/RightSidebarIcons";
import side01 from "../../assets/images/side01.jpeg";
import side02 from "../../assets/images/side02.jpeg";
import user1 from "../../assets/images/user.png";
const RightSidebar = () => {
  const [rightSideUser, setRightSideUser] = useState([
    {
      color: "greeen",
      number: 14,
      userImg: user1,
    },
    {
      number: 20,
      color: "greeen",
      userImg: user1,
    },
    {
      number: 12,
      color: "greyy",
      userImg: user1,
    },
    {
      number: 10,
      color: "reed",
      userImg: user1,
    },
    {
      number: 19,
      color: "greeen",
      userImg: user1,
    },
    {
      number: 22,
      color: "greyy",
      userImg: user1,
    },
    {
      number: 23,
      color: "reed",
      userImg: user1,
    },
    {
      number: 40,
      color: "greyy",
      userImg: user1,
    },
    {
      number: 42,
      color: "greeen",
      userImg: user1,
    },
    {
      number: 44,
      color: "greeen",
      userImg: user1,
    },
  ]);
  return (
    <aside className="right_side_bar_">
      {/* <div className="right_sidebar_content">
        <Image src={right1} alt="" />
      </div> */}
      {/* <div className="other_users">
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
      </div> */}
      {rightSideUser.map((e, idx) => {
        return (
          <RightSidebarIcons
            number={e.number}
            key={idx}
            items={e}
            userImg={e.userImg}
          />
        );
      })}
    </aside>
  );
};

export default RightSidebar;
