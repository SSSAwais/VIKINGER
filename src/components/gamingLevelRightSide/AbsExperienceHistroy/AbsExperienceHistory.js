import React from "react";
import "./AbsExperienceHistory.css";
import Image from "next/image";
const AbsExperienceHistory = (props) => {
  const { icon, exp, detail, timeago } = props;
  return (
    <>
      <li className="exp_list_wrapper">
        <div className="exp_left_side">
          <div className="resp_version d-flex justify-content-between w-100">
            <Image src={icon} alt="" />
            <p className=" tags_exp_2 mb-0">
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              {exp}
            </p>
          </div>
          <Image src={icon} alt="" className="web_version" />

          <p className="tags_exp mb-0">
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            {exp}
          </p>
          <p className="detail_exp">{detail}</p>
          <div>
            <p className="mb-0 timeAgo time_ago2">{timeago}</p>
          </div>
        </div>
        <div>
          <p className="mb-0 timeAgo">{timeago}</p>
        </div>
      </li>
    </>
  );
};

export default AbsExperienceHistory;
