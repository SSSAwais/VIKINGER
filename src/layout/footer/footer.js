"use client";
import React from "react";
import "./footer.css";
import { ProgressBar } from "react-bootstrap";
import bell from "../../assets/images/newIconsvgs/NotificationsIcon.svg";
import shoppingbag from "../../assets/images/newIconsvgs/ShoppingBagIcon.svg";
import messageicon from "../../assets/images/newIconsvgs/MessagesIcon.svg";
import smiley from "../../assets/images/newIconsvgs/smiley.svg";
import setting from "../../assets/images/newIconsvgs/SettingsIcon.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="d-flex justify-content-center footer_sec">
                <div className="bars">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Next</p>
                    <p className="mb-0">38EXP</p>
                  </div>
                  <ProgressBar variant="bg-custom" now={60} />
                </div>
                <div className="d-flex align-items-center">
                  <div className="right_side_icons">
                    <ul>
                      <li>
                        <Image src={shoppingbag} alt="" />
                      </li>
                      <li>
                        <Image src={smiley} alt="" />
                      </li>
                      <li>
                        <Image src={messageicon} alt="" />
                      </li>
                      <li>
                        <Image src={bell} alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="last_icon">
                    <Image src={setting} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
