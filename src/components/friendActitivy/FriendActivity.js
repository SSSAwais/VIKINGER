import React, { useState } from "react";
import "./FrindsActivity.css";
import user1 from "../../assets/images/user1.png";
import AbsFriendsActivityList from "./absFriendActivity/AbsFriendsActivityList";
import user from "../../assets/images/user.png";
const FriendActivity = () => {
  const [freindsActData, setFriendsActData] = useState([
    {
      image: user1,
      friendNAme: "Nick Grissom",
      date: "Friended: Jan 14, 2017",
      reaction: 1569,
      comments: 750,
      share: 109,
      replies: 223,
      value: 89,
      percent__: 89,
      number: 10,
      userImg: user,
    },
    {
      image: user1,
      friendNAme: "Destroy Dex",
      date: "Friended: May 22, 2017 ",
      reaction: 1036,
      comments: 803,
      share: 97,
      replies: 126,
      value: 74,
      percent__: 74,
      number: 10,
      userImg: user,
    },
    {
      image: user1,
      friendNAme: "Neko Bebop",
      date: "Friended: Sep 19, 2018 ",
      reaction: 860,
      comments: 662,
      share: 102,
      replies: 91,
      value: 53,
      percent__: 53,
      number: 10,
      userImg: user,
    },
    {
      image: user1,
      friendNAme: "Sarah Diamond",
      date: "Friended: Aug 6, 2017",
      reaction: 742,
      comments: 401,
      share: 77,
      replies: 64,
      value: 49,
      percent__: 49,
      number: 10,
      userImg: user,
    },
    {
      image: user1,
      friendNAme: "The Green Goo",
      date: "Friended: Dec 27, 2019",
      reaction: 421,
      comments: 200,
      share: 34,
      replies: 22,
      value: 21,
      percent__: 21,
      number: 10,
      userImg: user,
    },
  ]);
  return (
    <>
      <div className="top_activity_friends_wrapper">
        <h6>Top Friends Activity</h6>
        <table className="table">
          <thead>
            <tr>
              <th className="frind_heading">FRIEND</th>
              <th className="frind_heading ree">REACTIONS</th>
              <th className="frind_heading ree">COMMENTS</th>
              <th className="frind_heading ree">SHARES</th>
              <th className="frind_heading ree">REPLIES</th>
              <th className="frind_heading" colSpan={3}>
                POST ENGAGEMENT
              </th>
              <th className="frind_heading"></th>
            </tr>
          </thead>
          <tbody>
            {freindsActData.map((e, idx) => {
              return (
                <AbsFriendsActivityList
                  key={idx}
                  image={e.image}
                  friendNAme={e.friendNAme}
                  date={e.date}
                  reaction={e.reaction}
                  comments={e.comments}
                  share={e.share}
                  replies={e.replies}
                  value={e.value}
                  percent__={e.percent__}
                  userImg={e.userImg}
                  number={e.number}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FriendActivity;
