import React from "react";
import "./TopReactors.css";
import Image from "next/image";
import cardhexa from "../../assets/images/card_one.png";
const TopReactors = (props) => {
  const {
    reactor,
    alltime,
    useprofile,
    totalreactions,
    reactionname,
    username,
    userImg,
    number,
  } = props;
  return (
    <>
      <div className="reactor_container">
        <div className="top_reaction_item">
          <h6 className="top_reactorrs">Top {reactor}</h6>
          <p className="alltime_reactor">{alltime}</p>
        </div>
        <div className="reactor_detail text-center">
          <div className="image_section_reactor">
            <div className="right_sidebar_content_2 position-relative">
              <Image src={cardhexa} alt="" className="hexa_frame2" />

              <Image src={userImg} alt="" className="userSidebarImg_ hexaimg" />

              <div className="number_sidebar_ onlyyy">
                <p>{number}</p>
              </div>
            </div>
            {/* <Image src={useprofile} alt="" /> */}
          </div>
          <h5 className="reactor_total_reaction">{totalreactions}</h5>
          <p className="reactor_reaction">{reactionname}</p>
          <p className="user_name_reactor">{username}</p>
        </div>
      </div>
    </>
  );
};

export default TopReactors;
