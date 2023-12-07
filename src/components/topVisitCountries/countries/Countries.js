import Image from "next/image";
import React from "react";
import "./Countries.css";
const Countries = (props) => {
  const { flag, countryname, totalCountry } = props;
  return (
    <div className="country_wrapper">
      <div className="flag_name_section">
        <Image src={flag} alt="" className="img_ww" />
        <h6>{countryname}</h6>
      </div>
      <h6 className="total_coutnrrry">{totalCountry}</h6>
    </div>
  );
};

export default Countries;
