import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderimage from "/assets/sliderimage.png";
import sliderimage2 from "/assets/sliderimage2.png";

import Sidebar from "../Sidebar";
import { useRef, useState } from "react";

export default function SlickSlider() {
  const [currentMenu, setCurrentMenu] = useState(0);
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    centerMode: true,
    slidesToScroll: 1,
  };

  const sliderRef = useRef();

  const slideSwitch = (index) => {
    setCurrentMenu(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="flex py-20">
      <div className="w-1/4">
        <Sidebar currentMenu={currentMenu} slideSwitch={slideSwitch} />
      </div>

      <div className="w-3/4">
        <Slider {...settings} className="slider_custom" ref={sliderRef}>
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
    </div>
  );
}
