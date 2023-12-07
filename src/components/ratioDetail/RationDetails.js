import React from "react";
import "./RatioDetail.css";
const RationDetails = () => {
  return (
    <>
      <div className="ratio_details_list">
        <div className="ratio_itemss">
          <h6>1.067</h6>
          <p>T. VISITS</p>
        </div>
        <div className="ratio_itemss">
          <h6>298</h6>
          <p>T. ENGAGEMENTS</p>
        </div>
        <div className="ratio_itemss">
          <h6>34.4</h6>
          <p>AVG VISITS</p>
        </div>
        <div className="ratio_itemss">
          <h6>9.6</h6>
          <p>AVG ENGAGEMENTS</p>
        </div>
        <div className="ratio_itemss">
          <h6>9.6</h6>
          <p>AVG ENGAGEMENTS</p>
        </div>
        <div className="ratio_itemss">
          <h6>
            <span className="addon">
              <i className="fa-solid fa-plus"></i>
            </span>
            26.3%
          </h6>
          <p>VISITS / JUL 2019</p>
        </div>
        <div className="ratio_itemss">
          <h6>
            <span className="minuson">
              <i className="fa-solid fa-minus"></i>
            </span>
            4.9%
          </h6>
          <p>ENGAGEMENTS / JUL 2019</p>
        </div>
      </div>
    </>
  );
};

export default RationDetails;
