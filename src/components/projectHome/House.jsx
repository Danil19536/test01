import React, { useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import projectHouse from "../../images/house.jpg";
import SimpleSlider from "../Slider";

const House = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const sliderRef = useRef(null);

  const slideNext = () => {
    setActiveSlide(activeSlide === 1 ? 2 : 1);
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    setActiveSlide(activeSlide === 1 ? 2 : 1);
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container">
      <div className="projectHouse">
        <div className="house-item1">
          <div className="title">
            PROJECT
            <span>HOME</span>
          </div>
          <div className="arrows">
            <div onClick={slidePrev} className="arrow-left">
              {<BsArrowLeft />}
            </div>
            <div onClick={slideNext} className="arrow-right">
              {<BsArrowRight />}
            </div>
          </div>
          <div className="subTitle">
            <span className={activeSlide === 2 ? "active" : ""}>01</span>{" "}
            <span>/</span>{" "}
            <span className={activeSlide === 1 ? "active" : ""}>02</span>
          </div>
        </div>

        <SimpleSlider sliderRef={sliderRef} />

        {/* <div className="house-item2">
          <img src={projectHouse} alt="" />
          <button className="show">
            <span>Взглянуть</span> {<BsArrowRight />}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default House;
