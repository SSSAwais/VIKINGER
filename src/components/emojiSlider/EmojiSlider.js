import React from "react";
import like from "../../assets/images/Like.png";
import love from "../../assets/images/Love.png";
import dislike from "../../assets/images/Dislike.png";
import happy from "../../assets/images/Happy.png";
import funny from "../../assets/images/Funny.png";
import wow from "../../assets/images/Wow.png";
import angry from "../../assets/images/Angry.png";
import sad from "../../assets/images/Sad.png";
import Image from "next/image";
import Slider from "react-slick";

import "./EmojiSlider.css";
const EmojiSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="greetig_slider_bg second_emoji_slider">
        <Slider {...settings}>
          <div className="slider-content-">
            <Image src={like} alt="" />
            <p className="mb-0 first_number">12.642</p>
            <p className="mb-0 second_like">likes</p>
          </div>
          <div className="slider-content-">
            <Image src={dislike} alt="" />
            <p className="mb-0 first_number">945</p>
            <p className="mb-0 second_like">dislikes</p>
          </div>
          <div className="slider-content-">
            <Image src={happy} alt="" />
            <p className="mb-0 first_number">7.034</p>
            <p className="mb-0 second_like">happy</p>
          </div>
          <div className="slider-content-">
            <Image src={funny} alt="" />
            <p className="mb-0 first_number">2.356</p>
            <p className="mb-0 second_like">funny</p>
          </div>

          <div className="slider-content-">
            <Image src={wow} alt="" />
            <p className="mb-0 first_number">5.944</p>
            <p className="mb-0 second_like">wow</p>
          </div>
          <div className="slider-content-">
            <Image src={angry} alt="" />
            <p className="mb-0 first_number">1.706</p>
            <p className="mb-0 second_like">angry</p>
          </div>
          <div className="slider-content-">
            <Image src={sad} alt="" />
            <p className="mb-0 first_number">801</p>
            <p className="mb-0 second_like">sad</p>
          </div>
        </Slider>
      </div>

      <div className="emoji_slider_bg">
        <Slider {...settings}>
          {/* <div className="slider-content-">
            <Image src={like} alt="" />
            <p className="mb-0 first_number">12.642</p>
            <p className="mb-0 second_like">likes</p>
          </div>
          <div className="slider-content-">
            <Image src={love} alt="" />
            <p className="mb-0 first_number">8.913</p>
            <p className="mb-0 second_like"> loves</p>
          </div>
          <div className="slider-content-">
            <Image src={dislike} alt="" />
            <p className="mb-0 first_number">945</p>
            <p className="mb-0 second_like">dislikes</p>
          </div>
          <div className="slider-content-">
            <Image src={happy} alt="" />
            <p className="mb-0 first_number">7.034</p>
            <p className="mb-0 second_like">happy</p>
          </div>
          <div className="slider-content-">
            <Image src={funny} alt="" />
            <p className="mb-0 first_number">2.356</p>
            <p className="mb-0 second_like">funny</p>
          </div>
          <div className="slider-content-">
            <Image src={wow} alt="" />
            <p className="mb-0 first_number">5.944</p>
            <p className="mb-0 second_like">wow</p>
          </div>
          <div className="slider-content-">
            <Image src={angry} alt="" />
            <p className="mb-0 first_number">1.706</p>
            <p className="mb-0 second_like">angry</p>
          </div>
          <div className="slider-content- lastone">
            <Image src={sad} alt="" />
            <p className="mb-0 first_number">801</p>
            <p className="mb-0 second_like">sad</p>
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default EmojiSlider;
