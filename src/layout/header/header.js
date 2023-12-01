"use client";
import React, { useState } from "react";
import "./header.css";
import Image from "next/image";
import logo from "../../assets/images/vikiLogo.png";
import Link from "next/link";
import search from "../../assets/images/20- Overview/SearchIcon.png";
import { ProgressBar } from "react-bootstrap";
import toogle from "../../assets/images/toogleisdemenu.svg";
import bell from "../../assets/images/newIconsvgs/NotificationsIcon.svg";
import shoppingbag from "../../assets/images/newIconsvgs/ShoppingBagIcon.svg";
import messageicon from "../../assets/images/newIconsvgs/MessagesIcon.svg";
import smiley from "../../assets/images/newIconsvgs/smiley.svg";
import setting from "../../assets/images/newIconsvgs/SettingsIcon.svg";
import "animate.css";
import CartSection from "@/components/cartSection/CartSection";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";
import four from "../../assets/images/four.jpg";

const Header = () => {
  const [cart, setCart] = useState(false);
  const [friendRequests, setFriendRequests] = useState(false);

  const _handleCart = () => {
    setCart(!cart);
  };
  const _handleRequests = () => {
    setFriendRequests(!friendRequests);
  };
  const [cartData, setCartData] = useState([
    {
      picture: one,
      itemname: "Twitch Stream UI Pack",
      disp: "Regular License",
      itemnum: 12.0,
      qty: 1,
    },
    {
      picture: two,
      itemname: "Gaming Coin Badges Pack",
      disp: "Regular License",
      itemnum: 6.0,
      qty: 1,
    },
    {
      picture: three,
      itemname: "Gaming Coin Badges Pack",
      disp: "Regular License",
      itemnum: 6.0,
      qty: 1,
    },
    {
      picture: four,
      itemname: "Gaming Coin Badges Pack",
      disp: "Regular License",
      itemnum: 6.0,
      qty: 1,
    },
  ]);
  return (
    <>
      <header className="header_wrapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 logo_area">
              <Image src={logo} alt="" className="logo_icon" />
            </div>
            <div className="col-xxl-3 col-xl-1 col-lg-1 col-md-1 col-sm-1 tog_menyu d-flex align-items-center">
              <ul className="links_for_header">
                <li>
                  <Image src={toogle} alt="" />
                </li>
                <li className="linksss">
                  <Link href="#"> Home</Link>
                </li>
                <li className="linksss">
                  <Link href="#">Careers</Link>
                </li>
                <li className="linksss">
                  <Link href="#">Faqs</Link>
                </li>
                <li className="menu-main-item">
                  <p className="menu-main-item-link mb-0">...</p>

                  {/* <ul className="menu-main">
                    <li className="menu-main-item">
                      <a className="menu-main-item-link" href="#">
                        About Us
                      </a>
                    </li>

                    <li className="menu-main-item">
                      <a className="menu-main-item-link" href="#">
                        Our Blog
                      </a>
                    </li>

                    <li className="menu-main-item">
                      <a className="menu-main-item-link" href="#">
                        Contact Us
                      </a>
                    </li>

                    <li className="menu-main-item">
                      <a className="menu-main-item-link" href="#">
                        Privacy Policy
                      </a>
                    </li>
                  </ul> */}
                </li>
                {/* <li className="">






                  <div id="div1">
                    <div id="diva1">
                      <div id="divaa2">
                        ...
                     
                        <input id="btnb1" type="button" value="About Us" />
                        <input id="btnb2" type="button" value="Our Blog" />
                      
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-10 serach_bar_section">
              <div className="search_bar">
                <input
                  className="form-control"
                  placeholder="Search here for people or groups"
                />
                <Image src={search} alt="search" className="search_icon" />
              </div>
            </div>
            <div className="col-xxl-1 col-xl-2 col-lg-2  progress_row">
              <div className="bars">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Next</p>
                  <p className="mb-0">38EXP</p>
                </div>
                <ProgressBar variant="bg-custom" now={60} />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-5 d-flex justify-content-end setting_icon align-items-center">
              <div className="right_side_icons">
                <ul>
                  <li onClick={_handleCart}>
                    <div className="shopping_bags">
                      <Image src={shoppingbag} alt="" />
                      {/* <div
                        className={
                          cart ? "active cart_section_main" : "simple "
                        }
                      >
                        <h5 className="heading mb-0">Shopping Cart</h5>
                        <div className="cart_items_heights">
                          {cart
                            ? cartData.map((e, idx) => {
                                return (
                                  <CartSection
                                    key={idx}
                                    picture={e.picture}
                                    itemname={e.itemname}
                                    disp={e.disp}
                                    itemnum={e.itemnum}
                                    qty={e.qty}
                                  />
                                );
                              })
                            : ""}
                        </div>
                        <div className="total_value">
                          <h4 className="mb-0">Total</h4>
                          <p className="mb-0">
                            <span>$</span>60.00
                          </p>
                        </div>
                        <div className="buttonsss">
                          <button className="shop_cart_btn">
                            Shopping Cart
                          </button>
                          <button className="check_btn">Go to Checkout</button>
                        </div>
                      </div> */}
                    </div>
                  </li>
                  <li onClick={_handleRequests}>
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
      </header>
    </>
  );
};

export default Header;
