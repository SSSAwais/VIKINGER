import React from "react";
import "./GameChartDetail.css";
import { CircleProgress } from "react-gradient-progress";
import quest from "../../assets/images/quest.png";
import badge from "../../assets/images/badge.png";
import Image from "next/image";
const GameChartDetail = () => {
  return (
    <>
      <div className="gamer_chart_wrapper">
        <div className="CircleProgress ">
          <div className="cirlce_pro">
            <CircleProgress
              percentage={59}
              strokeWidth={8}
              secondaryColor=" #E8E8EE"
              width={150}
              primaryColor={["#2DECFE", "#5A67F4"]}
            />
          </div>
        </div>
        <div className="chart_name text-center">
          <h5>Profile Completion</h5>
          <p className="chart_profile_name">Marina Valentine</p>
          <p>
            Complete your profile by filling profile info fields, completing
            quests & unlocking badges
          </p>
        </div>
        <div className="quests_bades_section">
          <div className="quests_ text-center">
            <h5>55/30</h5>
            <h6>Quests</h6>
            <p>COMPLETED</p>
            <Image src={quest} alt="" />
          </div>
          <div className="bades_ text-center">
            <h5>22/46</h5>
            <h6>Badges</h6>
            <p>UNLOCKED</p>
            <Image src={badge} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameChartDetail;
