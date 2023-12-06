import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "./UpdateSlider.css";
import sliderimage1 from "../../assets/images/slidericon1.svg";
import sliderimage2 from "../../assets/images/slidericon2.svg";
import sliderimage3 from "../../assets/images/slidericon3.svg";
import sliderimage4 from "../../assets/images/slidericon4.svg";
const UpdateDataSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="update_slider_bg">
        <Slider {...settings}>
          <div className="slider-content-update">
            <Image src={sliderimage1} alt="" />
            <div className="slider_data_update">
              <h6>LAST FRIEND ADDED</h6>
              <p>5 Days Ago</p>
            </div>
          </div>
          <div className="slider-content-update">
            <Image src={sliderimage2} alt="" />
            <div className="slider_data_update">
              <h6>LAST POST UPDATE</h6>
              <p>1 Days Ago</p>
            </div>
          </div>
          <div className="slider-content-update">
            <Image src={sliderimage3} alt="" />
            <div className="slider_data_update">
              <h6>MOST COMMENTED POST</h6>
              <p>56 Comments</p>
            </div>
          </div>
          <div className="slider-content-update">
            <Image src={sliderimage4} alt="" />
            <div className="slider_data_update">
              <h6>MOST LIKED POST</h6>
              <p>904 Likes</p>
            </div>
          </div>
          <div className="slider-content-update">
            <Image src={sliderimage1} alt="" />
            <div className="slider_data_update">
              <h6>LAST FRIEND ADDED</h6>
              <p>5 Days Ago</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default UpdateDataSlider;
