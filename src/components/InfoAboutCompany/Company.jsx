import { BsArrowRight } from "react-icons/bs";
import ImgAboutUs1 from "../../images/info-about-us-img1.jpg";
import ImgAboutUs2 from "../../images/info-about-us-img2.jpg";
import ImgAboutUs3 from "../../images/info-about-us-img3.jpg";
const Company = () => {
  return (
    <div className="container">
      <div className="companyContainer">
        <div className="companyImages">
          <img src={ImgAboutUs1} alt="" />
          <img src={ImgAboutUs3} className="companyImg" alt="" />
        </div>
        <div className="companyImage">
          <img src={ImgAboutUs2} alt="" />
        </div>
        <div className="infoCompany">
          <div className="titleCompany">О компании</div>
          <div className="subtitle">
            <p className="infoAboutUs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <button className="read">
            <span>Читать</span> <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
