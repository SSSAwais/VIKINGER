import Image from "next/image";
import React from "react";
import "./PorfileCards.css";
const ProfileCards = (props) => {
  const { bgProfile, number, percent, profile_title, months } = props;
  return (
    <div className="position-relative profile-wrapper_cards">
      <Image src={bgProfile} alt="" className="img-fluid" />
      <div className="content_profile_cards">
        <div className="number_n_percent">
          <h5>{number}</h5>
          <div className="ratio_">
            <div className="icon_border">
              <i className="fa-solid fa-plus"></i>
            </div>
            <span>{percent}%</span>
          </div>
        </div>
        <p className="profile-title">{profile_title}</p>
        <p className="profile-months">{months}</p>
      </div>
    </div>
  );
};

export default ProfileCards;
