import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import projectHouse from "../../images/house.jpg";
const House = () => {
  return (
    <div className="container">
      <div className="projectHouse">
        <div className="house-item1">
          <div className="title">
            PROJECT
            <span>HOME</span>
          </div>
          <div className="arrows">
            <div className="arrow-left">{<BsArrowLeft />}</div>
            <div className="arrow-right">{<BsArrowRight />}</div>
          </div>
          <div className="subTitle">
            01 <span>/</span> 02
          </div>
        </div>
        <div className="house-item2">
          <img src={projectHouse} alt="" />
          <button className="show">
            <span>Взглянуть</span> {<BsArrowRight />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default House;
