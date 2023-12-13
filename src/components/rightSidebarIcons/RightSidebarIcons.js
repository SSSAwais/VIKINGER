import Image from "next/image";
import React from "react";
import "./RightSidebarIcons.css";
import sidebarimg from "../../assets/images/newsidebarImg.png";
const RightSidebarIcons = (props) => {
  const { number, items, userImg } = props;
  console.log(items, "items here");
  return (
    <>
      <div className="right_sidebar_content position-relative">
        <Image src={sidebarimg} alt="" className="hexa_frame" />
        <span
          className={
            items.color === "greeen"
              ? "greeen"
              : items.color === "reed"
              ? "reed"
              : items.color === "greyy"
              ? "greyy"
              : ""
          }
        ></span>

        <Image src={userImg} alt="" className="userSidebarImg" />

        <div className="number_sidebar">
          <p>{number}</p>
        </div>
      </div>
    </>
  );
};

export default RightSidebarIcons;
