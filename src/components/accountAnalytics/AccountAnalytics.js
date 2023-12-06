import React from "react";
import "./AccountAnalytics.css";
import acitveuser from "../../assets/images/happyaccount.png";
import visit from "../../assets/images/visitaccount.png";
import session from "../../assets/images/sessionacclount.png";
import returnvisit from "../../assets/images/returnaccount.png";
import Image from "next/image";
const AccountAnalytics = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 card_resp__">
        <div className="account_analytic_wrapper">
          <div className="">
            <div className="d-flex justify-content-end">
              <p className="mb-0 text-end anaytics_icon anaytics_icon_2">
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </p>
            </div>
            <div className="text-center">
              <Image src={acitveuser} alt="" />
            </div>
            <h4 className="count text-center">71</h4>
            <p className="active_users text-center">Active Users</p>
            <p className="account_detail_ text-center">
              Amount of active users visiting your account at this moment
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 card_resp__">
        <div className="account_analytic_wrapper account_analytic_wrapper_2">
          <div className="">
            <div className="d-flex justify-content-end">
              <p className="text-end mb-0 anaytics_icon">
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                3.5%
              </p>
            </div>
            <div className="text-center">
              <Image src={visit} alt="" />
            </div>
            <h4 className="count text-center">262</h4>
            <p className="active_users text-center">Account Visits</p>
            <p className="account_detail_ text-center">
              Times old or new members visited any of your acount pages this
              month
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 card_resp__">
        <div className="account_analytic_wrapper account_analytic_wrapper_3">
          <div className="">
            <div className="d-flex justify-content-end">
              <p className="text-end mb-0 anaytics_icon anaytics_icon_3">
                <span>
                  <i className="fa-solid fa-minus"></i>
                </span>
                2.4%
              </p>
            </div>
            <div className="text-center">
              <Image src={session} alt="" />
            </div>
            <h4 className="count text-center">4:39</h4>
            <p className="active_users text-center">Session Duration</p>
            <p className="account_detail_ text-center">
              Average time in minutes of how much people spend on your pages
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 card_resp__">
        <div className="account_analytic_wrapper account_analytic_wrapper_4">
          <div className="">
            <div className="d-flex justify-content-end">
              <p className="text-end mb-0 anaytics_icon">
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                8.2%
              </p>
            </div>
            <div className="text-center">
              <Image src={returnvisit} alt="" />
            </div>
            <h4 className="count text-center">80%</h4>
            <p className="active_users text-center">Returning Visitors</p>
            <p className="account_detail_ text-center">
              Percentage of visitors that visited your account more than once
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAnalytics;
