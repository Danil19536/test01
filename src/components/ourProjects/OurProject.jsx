import { BsArrowRight } from "react-icons/bs";
import ourProjectImg1 from "../../images/our-projects-img1.jpg";
import ourProjectImg2 from "../../images/our-projects-img2.jpg";
import ourProjectImg3 from "../../images/our-projects-img3.jpg";
import ourProjectImg4 from "../../images/our-projects-img4.jpg";
import ourProjectImg5 from "../../images/our-projects-img5.jpg";
const OurProject = () => {
  return (
    <div className="container">
      <div className="titleProjects">Наши проекты</div>
      <div className="projectContainer">
        <div className="project-item with-overlay">
          <img src={ourProjectImg1} alt="" />
          <div className="contentFirstItem">
            <div className="flex">
              <span>
                ДОСУГОВЫЙ <br /> ЦЕНТР
              </span>
              <a href="*">
                <span>ПОДРОБНЕЕ</span> <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={ourProjectImg2} alt="*" />
        </div>
        <div className="project-item">
          <img src={ourProjectImg3} alt="*" />
        </div>
        <div className="project-item">
          <img src={ourProjectImg4} alt="*" />
        </div>
        <div className="project-item">
          <img src={ourProjectImg5} alt="*" />
        </div>
      </div>
      <div className="prijectBtn">
        <button className="showAllProject">
          <span>ВСЕ ПРОЕКТЫ</span> <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OurProject;
