import React, { useState } from "react";
import "./GamingLevelBottom.css";
import AbsExperienceHistory from "../AbsExperienceHistroy/AbsExperienceHistory";
import exp1 from "../../../assets/images/exp1.png";
import exp2 from "../../../assets/images/exp2.png";
const GamingLevelBottom = () => {
  const [expData, setExpData] = useState([
    {
      icon: exp1,
      exp: "80 EXP",
      detail: `Keep it up! You reached tier II of the "The Warrior" badge`,
      timeago: "29 minutes ago",
    },
    {
      icon: exp2,
      exp: "66 EXP",
      detail: `Congratz! You have completed the "Nothing to Hide" quest`,
      timeago: "7 hours ago",
    },
    {
      icon: exp1,
      exp: "40 EXP",
      detail: `Great job! You just unlocked the "Caffeinated" badge `,
      timeago: "2 days ago",
    },
    {
      icon: exp1,
      exp: "100 EXP",
      detail: `Amazing! You just unlocked the "Gold User" badge `,
      timeago: "5 days ago",
    },
    {
      icon: exp1,
      exp: "40 EXP",
      detail: `Great job! You just unlocked the "Crazy Scientist" badge `,
      timeago: "1 week ago",
    },
    {
      icon: exp2,
      exp: "20 EXP",
      detail: `Congratz! You have completed the "Press Start" quest `,
      timeago: "2 weeks ago",
    },
    {
      icon: exp2,
      exp: "60 EXP",
      detail: `Congratz! You have completed the "Social King" quest `,
      timeago: "3 weeks ago",
    },
  ]);
  return (
    <>
      <div className="experience_history_wrapper">
        <div className="experience_history_heading">
          <h5>Experience History</h5>
        </div>
        <div className="history_exp_detail">
          <ul className="m-0 p-0">
            {expData.map((e, idx) => {
              return (
                <AbsExperienceHistory
                  key={idx}
                  icon={e.icon}
                  exp={e.exp}
                  detail={e.detail}
                  timeago={e.timeago}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GamingLevelBottom;
