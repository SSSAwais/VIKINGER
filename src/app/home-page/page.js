"use client";
import React, { useState } from "react";
import bannerimg from "../../assets/images/bannerimg.png";
import Image from "next/image";
import style from "./homepage.module.css";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import bg3 from "../../assets/images/bg3.png";
import bg4 from "../../assets/images/bg4.png";
import ProfileCards from "@/components/profile-cards/ProfileCards";
import profileImg from "../../assets/images/ProfileMainInfo.png";
import comments from "../../assets/images/comments.png";
import comments2 from "../../assets/images/CommentIcon2.png";
import CircleProgress1 from "@/components/circileProgress1/CircleProgress1";
import CircleProgress2 from "@/components/circleProgress2/CircleProgress2";
import GreetingSectionSlider from "@/components/greetingSectionSlider/GreetingSectionSlider";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";
import user6 from "../../assets/images/user6.png";
import commenting from "../../assets/images/commenting.png";
import ProfileActivity from "@/components/profile-activity/ProfileActivity";
import liking from "../../assets/images/liking.png";
import share from "../../assets/images/Share.png";
import chart1 from "../../assets/images/firstchart.png";
import chart2 from "../../assets/images/secoondChart.png";
import EmojiSlider from "@/components/emojiSlider/EmojiSlider";
import TopReactors from "@/components/topReactors/TopReactors";
import userprofile from "../../assets/images/SmallProfileInfo3.png";
import miniuserprofile from "../../assets/images/miniprofileimg.svg";
import moredots from "../../assets/images/moredots_.svg";
import youtube from "../../assets/images/youtube.jpg";
import Link from "next/link";
import funnyemo from "../../assets/images/funnyemo.png";
import loveemo from "../../assets/images/loveemo.png";
import wowemo from "../../assets/images/happyemo.png";
import PersonalActivity from "@/components/personalActivity/PersonalActivity";
import UpdateDataSlider from "@/components/updateDataSlider/UpdateSlider";
import GamificationCard from "@/components/gamification/GamificationCard";
import coffee from "../../assets/images/caffeinated-b.png";
import complete from "../../assets/images/completedq-l.png";
import GameChartDetail from "@/components/gameChartDetail/GameChartDetail";
import GamingLevelTop from "@/components/gamingLevelRightSide/gamingLevelTop/GamingLevelTop";
import GamingLevelBottom from "@/components/gamingLevelRightSide/gamingLevelBottom/GamingLevelBottom";
import AccountAnalytics from "@/components/accountAnalytics/AccountAnalytics";
import MonthlyReportChart from "@/components/monthReportChart/MonthlyReportChart";
import FriendActivity from "@/components/friendActitivy/FriendActivity";
import Engagments from "@/components/friendActitivy/engagments/Engagments";
import TopVisitCountries from "@/components/topVisitCountries/TopVisitCountries";
import WorldMap from "@/components/worldMap/WorldMap";
import YearlyReport from "@/components/yearlyReport/YearlyReport";
const HomePage = () => {
  const [profileData, setProfileData] = useState([
    {
      bgProfile: bg1,
      number: "87.365",
      percent: "3.2",
      profile_title: "Profile Views",
      months: "In the last month",
    },
    {
      bgProfile: bg2,
      number: "294",
      percent: "0.4",
      profile_title: "Posts Created",
      months: "In the last month",
    },
    {
      bgProfile: bg3,
      number: "2.560",
      percent: "1.8",
      profile_title: "Reaction Reveived",
      months: "In the last month",
    },
    {
      bgProfile: bg4,
      number: "947",
      percent: "4.8",
      profile_title: "Comments Reveived",
      months: "In the last month",
    },
  ]);
  const [proActivity, setProActivity] = useState([
    {
      name: "Nick Grissom ",
      usericon: user1,
      reaaction: "posted a comment on your ",
      hightlight: "status update",
      time: "2 minutes ago",
      emoji: commenting,
    },
    {
      name: "Sarah Diamond ",
      usericon: user2,
      reaaction: "posted a comment on your ",
      hightlight: "photo",
      time: "31 minutes ago",
      emoji: liking,
    },
    {
      name: "Destroy Dex ",
      usericon: user2,
      reaaction: "posted a comment on your ",
      hightlight: "photo",
      time: "31 minutes ago",
      emoji: commenting,
    },
    {
      name: "Nick Grissom ",
      usericon: user2,
      reaaction: "posted a comment on your ",
      hightlight: "status update",
      time: "31 minutes ago",
      emoji: share,
    },
    {
      name: "Nick Grissom ",
      usericon: user1,
      reaaction: "posted a comment on your ",
      hightlight: "status update",
      time: "2 minutes ago",
      emoji: commenting,
    },
    {
      name: "Sarah Diamond ",
      usericon: user2,
      reaaction: "posted a comment on your ",
      hightlight: "photo",
      time: "31 minutes ago",
      emoji: liking,
    },
  ]);
  const [reactor, setReactor] = useState([
    {
      reactor: "Reactor",
      alltime: "of last month",
      useprofile: userprofile,
      totalreactions: "94",
      reactionname: "Reactions",
      username: "DESTROY DEX",
    },
    {
      reactor: "Reactor",
      alltime: "of all time",
      useprofile: userprofile,
      totalreactions: "1.569",
      reactionname: "Reactions",
      username: "NICK GRISSOM",
    },
    {
      reactor: "Commenter",
      alltime: "of last month",
      useprofile: userprofile,
      totalreactions: "47",
      reactionname: "Comments",
      username: "NEKO BEBOP",
    },
    {
      reactor: "Commenter",
      alltime: "of all time",
      useprofile: userprofile,
      totalreactions: "803",
      reactionname: "Comments",
      username: "DESTROY DEX",
    },
  ]);
  const [gamificationData, setGamificationData] = useState([
    {
      icon: coffee,
      heading: "Last Badge Unlocked",
      matter: "Caffeinated",
      daysago: " 2 days ago",
      btnName: "Browse All",
    },
    {
      icon: complete,
      heading: "Last Completed Quest",
      matter: "Nothing to Hide",
      daysago: " 7 hours ago",
      btnName: "Browse All",
    },
  ]);
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 ">
              <div className={style.bannerAraa}>
                {/* <Image src={bannerimg} alt="" className="img-fluid" /> */}
                <div className={style.banner_content}>
                  <h4>OverView</h4>
                  <p>Review your account,see stats and more!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={style.profile_section}>
                <h5>Overview</h5>
                <p>My Profile</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            {profileData.map((e, idx) => {
              return (
                <div
                  className={`col-lg-3 col-md-4 col-sm-6 text-start ${style.profilecard_width}`}
                  key={idx}
                >
                  <ProfileCards
                    bgProfile={e.bgProfile}
                    number={e.number}
                    percent={e.percent}
                    profile_title={e.profile_title}
                    months={e.months}
                  />
                </div>
              );
            })}
          </div>
          <div className={`row ${style.third_section}`}>
            <div
              className={`col-lg-3 col-md-4 col-sm-12" ${style.welcome_back_resp}`}
            >
              <div className={style.welcome_back}>
                <div className={style.name_n_greeting}>
                  <h5>Welcome Back!</h5>
                  <p>Marina valentine</p>
                </div>
                <div className={style.lower_content_profile}>
                  <div className="profile_iamge">
                    <Image src={profileImg} alt="" />
                  </div>
                </div>
                <div className={style.main_prfoile_gretting}>
                  <div className={style.left_profile_side}>
                    <Image src={comments} alt="" className="img-fluid" />
                    <div className={style.first_profife_detail}>
                      <p className={style.totalcommentss}>28.4</p>
                      <h6>Posts</h6>
                      <p className={style.avgMonth}>Avg month</p>
                    </div>
                  </div>
                  <div className={style.right_profile_side}>
                    <Image src={comments2} alt="" className="img-fluid" />
                    <div className={style.first_profife_detail}>
                      <p className={style.totalcommentss}>69.7</p>
                      <h6>Comments</h6>
                      <p className={style.avgMonth}>Avg month</p>
                    </div>
                  </div>
                </div>
                <div className={style.charts_section}>
                  <div className={style.left_post_chart_side}>
                    <CircleProgress1 />
                    <div className={style.post_engagment}>
                      <h5>Posts</h5>
                      <p>Engagment</p>
                    </div>
                  </div>
                  <div className={style.right_comment_chart_side}>
                    <CircleProgress2 />
                    <div className={style.post_shared}>
                      <h5>Posts</h5>
                      <p>Shared</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-9 col-md-8 col-sm-12 ${style.greeting_section_resp}`}
            >
              <div className={style.sliderSecton}>
                <GreetingSectionSlider />
              </div>
              <div className={style.main_wrap_activity_bars}>
                <div className={style.profile_activity_wrapper}>
                  <div className={style.porfile_activity_content}>
                    <h4>Profile Activity</h4>
                    <div className={style.acitivy___}>
                      {proActivity?.map((e, idx) => {
                        return (
                          <ProfileActivity
                            key={idx}
                            name={e.name}
                            usericon={e.usericon}
                            reaaction={e.reaaction}
                            hightlight={e.hightlight}
                            time={e.time}
                            emoji={e.emoji}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className={style.activity_chart}>
                  <div className={style.post_engagment_in_chart}>
                    <div className={style.increment}>
                      <i className="fa-solid fa-plus"></i>
                      <p className={`mb-0 ${style.percent}`}>
                        <span>5.3%</span>
                      </p>
                    </div>
                    <div className={style.post_totlasss}>
                      <h6 className={style.totalpost}>33</h6>
                      <p className={style.engagment}>Post Engagements</p>
                      <p className={style.todayyy}>TODAY</p>
                    </div>
                  </div>
                  <div className={style.profile_views}>
                    <div className={style.posrt_tot}>
                      <i className="fa-solid fa-minus"></i>
                      <p className={`mb-0 ${style.percent}`}>
                        <span>4.7%</span>
                      </p>
                    </div>
                    <div className={style.post_totlasss}>
                      <h6 className={style.totalpost}>126</h6>
                      <p className={style.engagment}>Profile Views</p>
                      <p className={style.todayyy}>TODAY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={style.sliderSecton2}>
                <GreetingSectionSlider />
              </div>
              <div className={style.activity_chart2}>
                <div className={style.post_engagment_in_chart}>
                  <div className={style.increment}>
                    <i className="fa-solid fa-plus"></i>
                    <p className={`mb-0 ${style.percent}`}>
                      <span>5.3%</span>
                    </p>
                  </div>
                  <div className={style.post_totlasss}>
                    <h6 className={style.totalpost}>33</h6>
                    <p className={style.engagment}>Post Engagements</p>
                    <p className={style.todayyy}>TODAY</p>
                  </div>
                </div>
                <div className={style.profile_views}>
                  <div className={style.posrt_tot}>
                    <i className="fa-solid fa-minus"></i>
                    <p className={`mb-0 ${style.percent}`}>
                      <span>4.7%</span>
                    </p>
                  </div>
                  <div className={style.post_totlasss}>
                    <h6 className={style.totalpost}>126</h6>
                    <p className={style.engagment}>Profile Views</p>
                    <p className={style.todayyy}>TODAY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <EmojiSlider />
            </div>
          </div>
          <div className={`row ${style.topReactor_section}`}>
            {reactor?.map((e, idx) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={idx}>
                  <TopReactors
                    reactor={e.reactor}
                    alltime={e.alltime}
                    useprofile={e.useprofile}
                    totalreactions={e.totalreactions}
                    reactionname={e.reactionname}
                    username={e.username}
                  />
                </div>
              );
            })}

            <div className=""></div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className={style.popular_post_wrapper}>
                <div className={style.popular_top}>
                  <div className="d-flex align-items-center">
                    <Image src={miniuserprofile} alt="" />
                    <div className={style.name_timeeee}>
                      <h4 className="mb-0">Marina Valentine</h4>
                      <p className="mb-0">17 hours ago</p>
                    </div>
                  </div>
                  <Image src={moredots} alt="" />
                </div>
                <div className={style.content_user_popular}>
                  <p className={style.detailusers}>
                    Tomorow I&#39;ll be livestreaming along with{" "}
                    <span> @DestroyDex</span> on my Youtube channel. We are
                    gonna do a spedrun of Super Mochi Bros 3!
                  </p>
                  <div className={style.youtube_section}>
                    <Link href="#">
                      <Image src={youtube} alt="" className="img-fluid" />
                      <div className={style.youtube_detail}>
                        <h6>Youtube.com</h6>
                        <h4>
                          GameHuntress on <span> Youtube</span>
                        </h4>
                        <p>
                          Watch the GameHuntress play all the greatest games
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className={style.tags}>
                    <Link href="#">Stream</Link>
                    <Link href="#">Youtube</Link>
                    <Link href="#">Gaming</Link>
                    <Link href="#">Retra</Link>
                  </div>
                  <div className={style.reaction_participates_comments}>
                    <div className={style.totalITems___}>
                      <div className="">
                        <div className={style.emo_area}>
                          <Image
                            src={funnyemo}
                            alt=""
                            className={style.first_emo}
                          />
                          <Image
                            src={loveemo}
                            alt=""
                            className={style.second_emo}
                          />
                          <Image
                            src={wowemo}
                            alt=""
                            className={style.third_emo}
                          />
                          <p>22</p>
                        </div>
                        <div className={style.participants_}></div>

                        <div className={style.total_contents}></div>
                      </div>
                      <div className={style.sharecomments}>
                        <p className={style.commentsss}> 12 Comments</p>
                        <p>0 Shares</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.personal_activity}>
                <p className={style.perosnalAcitivtyHeading}>
                  Personal Activity
                </p>
                <div>
                  <PersonalActivity />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <UpdateDataSlider />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={style.gamification}>
                <p>overview</p>
                <h5>Gamification</h5>
              </div>
            </div>
          </div>
          <div className={`row `}>
            {gamificationData.map((e, idx) => {
              return (
                <div
                  className={`col-lg-6 col-md-6 col-sm-12 ${style.game_cards_wrapper}`}
                  key={idx}
                >
                  <GamificationCard
                    icon={e.icon}
                    heading={e.heading}
                    matter={e.matter}
                    daysago={e.daysago}
                    btnName={e.btnName}
                  />
                </div>
              );
            })}
          </div>
          <div className={`row ${style.charting_row_gaming}`}>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <GameChartDetail />
            </div>
            <div
              className={`col-lg-9 col-md-12 col-sm-12 ${style.gaming_resp}`}
            >
              <GamingLevelTop />
              <GamingLevelBottom />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={style.overview_accounts_}>
                <p className="mb-0">Overview</p>
                <h5 className="mb-0">Account Analytics</h5>
              </div>
            </div>
          </div>
          <div>
            <AccountAnalytics />
          </div>
          <div className="row">
            <div className="col-12">
              <div className={style.monthlyReport}>
                <div className="d-flex justify-content-between">
                  <h5>Monthly Report</h5>
                  <div className="d-flex">
                    <div className={style.headings}>
                      <span></span>
                      Visits
                    </div>
                    <div className={style.engagments_geadin}>
                      <span></span>
                      Engagments
                    </div>
                  </div>
                </div>
                {/* <div>
                  <MonthlyReportChart />
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="top_friend_activity">
                <FriendActivity />
              </div>
            </div>
            <div className="col-lg-3">
              <Engagments />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <TopVisitCountries />
            </div>
            <div className="col-lg-9 col-md-12">
              <WorldMap />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <YearlyReport />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
