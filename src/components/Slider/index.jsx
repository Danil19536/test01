import React from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import projectHouse from "../../images/house.jpg";

const SimpleSlider = ({ sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="slider-item">
          <div className="slider-item-flex">
            <img src={projectHouse} alt="" />
            <button className="show">
              <span>Взглянуть</span> {<BsArrowRight />}
            </button>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-item-flex">
            <img src={projectHouse} alt="" />
            <button className="show">
              <span>Взглянуть</span> {<BsArrowRight />}
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
