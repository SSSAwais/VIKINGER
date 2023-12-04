import React from "react";
import "./AbsExperienceHistory.css";
import Image from "next/image";
const AbsExperienceHistory = (props) => {
  const { icon, exp, detail, timeago } = props;
  return (
    <>
      <li className="exp_list_wrapper">
        <div className="exp_left_side">
          <Image src={icon} alt="" />
          <p className="tags_exp mb-0">
            <span>
              <i class="fa-solid fa-plus"></i>
            </span>
            {exp}
          </p>
          <p className="detail_exp">{detail}</p>
        </div>
        <div>
          <p className="mb-0 timeAgo">{timeago}</p>
        </div>
      </li>
    </>
  );
};

export default AbsExperienceHistory;
