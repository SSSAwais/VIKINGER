import React from "react";
import Slider from "react-slick";

import "./GreetingSectionSlider.css";
const GreetingSectionSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 7,
  };
  return (
    <>
      <div className="greetig_slider_bg">
        <Slider {...settings}>
          <div className="slider-content-">
            <h5>930</h5>
            <p>Posts</p>
          </div>
          <div className="slider-content-">
            <h5>82</h5>
            <p>Friends</p>
          </div>
          <div className="slider-content-">
            <h5>5.7k</h5>
            <p>Visits</p>
          </div>
          <div className="slider-content-">
            <h5>13</h5>
            <p>badges</p>
          </div>
          <div className="slider-content-">
            <h5>74</h5>
            <p>Photos</p>
          </div>
          <div className="slider-content-">
            <h5>10.6k</h5>
            <p>Reactions</p>
          </div>
          <div className="slider-content-">
            <h5>8.4k</h5>
            <p>Comments</p>
          </div>
          <div className="slider-content-">
            <h5>2.3kk</h5>
            <p>Shares</p>
          </div>
          <div className="slider-content-">
            <h5>2.3kk</h5>
            <p>Shares</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default GreetingSectionSlider;
