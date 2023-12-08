"use client";
import React from "react";
import "./LeftSidebar.css";
import Image from "next/image";
import profile from "../../assets/images/sidebarprofile.png";
import Link from "next/link";
import icon1 from "../../assets/images/sidebar1svg.svg";
import icon2 from "../../assets/images/sidebar2.svg";
import icon3 from "../../assets/images/sidebar3.svg";
import icon4 from "../../assets/images/sidebar4.svg";
import icon5 from "../../assets/images/sidebar5.svg";
import icon6 from "../../assets/images/sidebar6.svg";
import icon7 from "../../assets/images/sidebar7.svg";
import icon8 from "../../assets/images/sidebar8.svg";
import icon9 from "../../assets/images/sidebar9.svg";
import icon10 from "../../assets/images/sidebar10.svg";
import { useRouter, usePathname } from "next/navigation";
const LeftSidebar = ({ isSidebarOpned, _handleClose }) => {
  const pathname = usePathname();

  const _handleconsole = () => {
    // console.log(pathname, "fadfdsafdsa");
  };
  const menuItems = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
  ];

  return (
    <>
      <aside className="left_side_bar_ web_version_sidebar">
        <div className="profile_image">
          <Image src={profile} alt="" />
        </div>
        <div className="menu_items">
          <nav>
            <ul>
              <li
                className={
                  pathname === "/"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleconsole}
              >
                <Link href="/">
                  <Image src={icon1} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/one" ? " activeitem" : "menu_list_item"
                }
              >
                <Link href="/one">
                  <Image src={icon2} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/two" ? " activeitem" : "menu_list_item"
                }
              >
                <Link href="/two">
                  <Image src={icon3} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/three" ? " activeitem" : "menu_list_item"
                }
              >
                <Link href="/three">
                  <Image src={icon4} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/four"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
              >
                <Link href="/four">
                  <Image src={icon5} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/five"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
              >
                <Link href="/five">
                  <Image src={icon6} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/six"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
              >
                <Link href="/six">
                  <Image src={icon7} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/seven"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
              >
                <Link href="/seven">
                  <Image src={icon8} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/eight"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
              >
                <Link href="/eight">
                  <Image src={icon9} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/nine"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
              >
                <Link href="/nine">
                  <Image src={icon10} alt="" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <aside
        className={`left_side_bar_mobile mobile_version_sidebar ${
          isSidebarOpned ? "open" : "close"
        }`}
      >
        <div className="profile_image">
          <Image src={profile} alt="" />
        </div>
        <div className="menu_items">
          <nav>
            <ul>
              <li
                className={
                  pathname === "/"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/">
                  <Image src={icon1} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/one" ? " activeitem" : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/one">
                  <Image src={icon2} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/two" ? " activeitem" : "menu_list_item"
                }
              >
                <Link href="/two">
                  <Image src={icon3} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/three" ? " activeitem" : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/three">
                  <Image src={icon4} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/four"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/four">
                  <Image src={icon5} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/five"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/five">
                  <Image src={icon6} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/six"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/six">
                  <Image src={icon7} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/seven"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/seven">
                  <Image src={icon8} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/eight"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/eight">
                  <Image src={icon9} alt="" />
                </Link>
              </li>
              <li
                className={
                  pathname === "/nine"
                    ? "menu_list_item activeitem"
                    : "menu_list_item"
                }
                onClick={_handleClose}
              >
                <Link href="/nine">
                  <Image src={icon10} alt="" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;
