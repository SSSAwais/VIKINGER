import Image from "next/image";
import React from "react";
import "./AbsFriendActivity.css";
import ProgressBar from "react-bootstrap/ProgressBar";
const AbsFriendsActivityList = (props) => {
  const {
    image,
    friendNAme,
    date,
    value,
    reaction,
    comments,
    share,
    replies,
    percent__,
  } = props;
  return (
    <tr>
      <td>
        <div className="iamge_names">
          <Image src={image} alt="" />
          <div className="name_date_of_friend">
            <h4>{friendNAme}</h4>
            <p>{date}</p>
          </div>
        </div>
      </td>
      <td className="ree">
        <p className="reactionss "> {reaction}</p>
      </td>
      <td className="ree">
        <p className="commetnss ">{comments}</p>
      </td>
      <td className="ree">
        <p className="sharee "> {share}</p>
      </td>
      <td className="ree">
        <p className="repliies "> {replies}</p>
      </td>
      <td className="prog_bar" colSpan={4}>
        {/* <div className="progress_section"> */}
        <ProgressBar now={value} />

        {/* </div> */}
      </td>
      <td>
        <p className="mb-0 percent__">{percent__}%</p>
      </td>
    </tr>
  );
};

export default AbsFriendsActivityList;
