import React from "react";
import "./ProfileActivity.css";
import Image from "next/image";
const ProfileActivity = (props) => {
  const { name, usericon, reaaction, time, emoji, hightlight } = props;
  return (
    <>
      <div className="comments_wrapper">
        <div className=" d-flex align-items-center">
          <Image src={usericon} alt="" />
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
