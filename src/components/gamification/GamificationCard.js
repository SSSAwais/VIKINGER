import React from "react";
import "./GamificationCard.css";
import Image from "next/image";
const GamificationCard = (props) => {
  const { icon, matter, daysago, heading, btnName } = props;
  return (
    <div className="gamification_card_bg">
      <div className="inner_game_area">
        <div className="left_gamification_side">
          <Image src={icon} alt="" />
          <div className="left_game_data">
            <h6>{heading}</h6>
            <p>
              <span>{matter}</span>
              {daysago}
            </p>
          </div>
        </div>
        <button>{btnName}</button>
      </div>
    </div>
  );
};

export default GamificationCard;
