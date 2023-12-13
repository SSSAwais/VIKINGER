import React from "react";
import "./ProfileActivity.css";
import Image from "next/image";
import sidebarimg from "../../assets/images/newsidebarImg.png";
const ProfileActivity = (props) => {
  const {
    name,
    usericon,
    reaaction,
    time,
    emoji,
    hightlight,
    userImg,
    number,
  } = props;
  return (
    <>
      <div className="comments_wrapper">
        <div className=" d-flex align-items-center">
          <div className="right_sidebar_content_ position-relative">
            <Image src={sidebarimg} alt="" className="hexa_frame_" />

            <Image src={userImg} alt="" className="userSidebarImg_" />

            <div className="number_sidebar_">
              <p>{number}</p>
            </div>
          </div>
          {/* <Image src={usericon} alt="" /> */}
          <div className="reaction_time">
            <h6>
              <span className="name"> {name}</span>
              {reaaction}
              <span className="highlight"> {hightlight}</span>
            </h6>
            <p className="time">{time}</p>
          </div>
        </div>
        <Image src={emoji} alt="" />
      </div>
    </>
  );
};

export default ProfileActivity;
