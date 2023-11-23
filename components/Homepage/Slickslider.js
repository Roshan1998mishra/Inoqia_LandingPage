import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderimage from "/assets/sliderimage.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <Image src={sliderimage} alt="sliderimage"></Image>
        </div>

        <div>
          <Image src={sliderimage} alt="sliderimage"></Image>
        </div>

        <div>
          <Image src={sliderimage} alt="sliderimage"></Image>
        </div>

        <div>
          <Image src={sliderimage} alt="sliderimage"></Image>
        </div>
      </Slider>
    </div>
  );
}
