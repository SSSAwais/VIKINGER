import React, { useState } from "react";
import "./TopVisitCountries.css";
import { DashedProgress } from "react-dashed-progress";
import flag1 from "../../assets/images/Flag4.png";
import flag2 from "../../assets/images/Flag5.png";
import flag3 from "../../assets/images/Flag6.png";
import flag4 from "../../assets/images/Flag7.png";
import flag5 from "../../assets/images/Flag8.png";
import flag6 from "../../assets/images/argentina2.png";
import Countries from "./countries/Countries";
import Image from "next/image";
import ameraica from "../../assets/images/Flag.png";
import india from "../../assets/images/Flag1.png";
const TopVisitCountries = () => {
  const [countryData, setCountryData] = useState([
    {
      flag: flag1,
      countryname: "Canada",
      totalCountry: "8.922",
    },
    {
      flag: flag2,
      countryname: "Russia",
      totalCountry: "6.303",
    },
    {
      flag: flag3,
      countryname: "Turkey",
      totalCountry: "6.278",
    },
    {
      flag: flag4,
      countryname: "France",
      totalCountry: "4.520",
    },
    {
      flag: flag5,
      countryname: "Germany",
      totalCountry: "3.225",
    },
    {
      flag: flag6,
      countryname: "Argentina",
      totalCountry: "1.744",
    },
  ]);
  return (
    <>
      <div className="top_visit_countries">
        <h5 className="top_country_heading">Top Visited Countries</h5>
        {/* <DashedProgress value={5} orientation="vertical" /> */}
        <div className="countrudata_wrapper">
          <div className="top_countris">
            <div className="d-flex main_countriess justify-content-between">
              <div className="d-flex">
                <Image src={ameraica} alt="" />
                <h5>United States</h5>
              </div>
              <div className="d-flex justify-content-between">
                <p>25362</p>
              </div>
            </div>
          </div>
          <div className="top_countris">
            <div className="d-flex main_countriess justify-content-between">
              <div className="d-flex">
                <Image src={india} alt="" />
                <h5>India</h5>
              </div>
              <div className="d-flex justify-content-between">
                <p>18201</p>
              </div>
            </div>
          </div>
          {countryData.map((e, idx) => {
            return (
              <Countries
                key={idx}
                flag={e.flag}
                countryname={e.countryname}
                totalCountry={e.totalCountry}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopVisitCountries;
