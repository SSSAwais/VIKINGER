import Image from "next/image";
import React from "react";
import loveemo from "../../assets/images/loveemo.png";
import happyemo from "../../assets/images/happyemo.png";
import wowemo from "../../assets/images/Wow.png";
import like from "../../assets/images/Like.png";
import funny from "../../assets/images/funnyemo.png";
import img1 from "../../assets/images/01.png";
import img2 from "../../assets/images/02.png";
import img4 from "../../assets/images/04.png";
import img5 from "../../assets/images/05.png";
import img7 from "../../assets/images/07.png";
import "./PersonalActivity.css";
const PersonalActivity = () => {
  return (
    <>
      <div className="commenting_wrappier">
        {/* first comment */}
        <div className="single_comments">
          <Image src={img1} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span> left
              a love
              <span className="emo_icon">
                <Image src={loveemo} alt="" />
              </span>
              reaction on
              <span className="action_on"> Destroy Dex</span>&#39;s
              <span className="status_update"> status update</span>
            </h6>
            <h6 className="minutesago">3 minutes ago</h6>
          </div>
        </div>
        {/* first comment */}
        {/* second comment */}
        <div className="single_comments">
          <Image src={img2} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span>
              Updated her
              <span className="status_update"> profile picture</span>
            </h6>
            <h6 className="minutesago">11 minutes ago</h6>
          </div>
        </div>

        {/* second comment */}
        {/* third comment */}
        <div className="single_comments">
          <Image src={img1} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span> left
              a happy
              <span className="emo_icon">
                <Image src={happyemo} alt="" />
              </span>
              reaction on
              <span className="action_on"> Neko Bebop</span>&#39;s
              <span className="status_update"> status update</span>
            </h6>
            <h6 className="minutesago">3 minutes ago</h6>
          </div>
        </div>
        {/* third comment */}
        {/* fourth comment */}
        <div className="single_comments">
          <Image src={img4} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span>{" "}
              commented on
              <span className="action_on"> Sarah Diamond</span>&#39;s
              <span className="status_update"> Photo</span>
            </h6>
            <h6 className="minutesago">3 minutes ago</h6>
          </div>
        </div>

        {/* fourth comment */}
        {/* fifith comment */}
        <div className="single_comments">
          <Image src={img5} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span>{" "}
              posted a new
              <span className="action_on"> status update</span>
              &#34;Hi to all Remember&#34;
            </h6>
            <h6 className="minutesago">3 minutes ago</h6>
          </div>
        </div>
        {/* fifith comment */}
        {/* sixth comment */}
        <div className="single_comments">
          <Image src={img4} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span>{" "}
              Replied to a<span className="action_on"> Damian Greyson</span>
              &#39;s
              <span className="status_update"> comment</span>
            </h6>
            <h6 className="minutesago">1 hour ago</h6>
          </div>
        </div>
        {/* sixth comment */}
        {/* seventh comment */}
        <div className="single_comments">
          <Image src={img7} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span>{" "}
              shared
              <span className="action_on"> Destroy Dex</span>&#39;s
              <span className="status_update"> status update</span>
            </h6>
            <h6 className="minutesago">4 hours ago</h6>
          </div>
        </div>
        {/* seventh comment */}
        {/* eight comment */}
        <div className="single_comments">
          <Image src={img1} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span> left
              a love
              <span className="emo_icon">
                <Image src={wowemo} alt="" />
              </span>
              reaction on
              <span className="action_on"> Destroy Dex</span>&#39;s
              <span className="status_update"> status update</span>
            </h6>
            <h6 className="minutesago">2 days ago</h6>
          </div>
        </div>

        {/* eight comment */}
        {/* nine comment */}
        <div className="single_comments">
          <Image src={img2} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span>
              updated her
              <span className="status_update"> cover picture</span>
            </h6>
            <h6 className="minutesago">3 minutes ago</h6>
          </div>
        </div>
        {/* nine comment */}
        {/* 10 comment */}
        <div className="single_comments">
          <Image src={img1} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span> left
              a like
              <span className="emo_icon">
                <Image src={like} alt="" />
              </span>
              reaction on
              <span className="action_on"> Nick Grissom</span>&#39;s
              <span className="status_update"> status update</span>
            </h6>
            <h6 className="minutesago">3 minutes ago</h6>
          </div>
        </div>
        {/* 10 comment */}
        {/* 11 comment */}

        <div className="single_comments">
          <Image src={img1} alt="" />
          <div className="right_side_comments">
            <h6 className="personal_activity">
              <span className="user_name_personal">Marina Valentine </span> left
              a fuuny
              <span className="emo_icon">
                <Image src={funny} alt="" />
              </span>
              reaction on
              <span className="action_on"> Bearded Wonde</span>&#39;s
              <span className="status_update"> status update</span>
            </h6>
            <h6 className="minutesago">2 weeks ago</h6>
          </div>
        </div>
        {/* 11 comment */}
      </div>
    </>
  );
};

export default PersonalActivity;
