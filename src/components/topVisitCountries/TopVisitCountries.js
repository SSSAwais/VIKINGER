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
import brazil from "../../assets/images/brazil.png";
import DottedProgressBar from "../dottedProgressBar/DottedProgressBar";
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
            <div className="main_countriess ">
              <div className="d-flex ">
                <div>
                  <Image src={ameraica} alt="" />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <h5>United States</h5>
                    <p>25362</p>
                  </div>
                  <div>
                    <DottedProgressBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top_countris">
            <div className="main_countriess ">
              <div className="d-flex ">
                <div>
                  <Image src={india} alt="" />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <h5>India</h5>
                    <p>18201</p>
                  </div>
                  <div>
                    <DottedProgressBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top_countris">
            <div className="main_countriess ">
              <div className="d-flex ">
                <div className="brazil_width">
                  <Image src={brazil} alt="" />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <h5>Brazil</h5>
                    <p>9567</p>
                  </div>
                  <div>
                    <DottedProgressBar />
                  </div>
                </div>
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
