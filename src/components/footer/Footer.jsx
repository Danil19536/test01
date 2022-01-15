import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import footerLogo from "../../images/footer-Logo.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="footerContent">
          <div className="footerLogo">
            <img src={footerLogo} alt="" />
          </div>
          <div className="information">
            <div className="footerTitle">Информация</div>
            <ul className="footerMenu">
              <li className="menuItem">
                <a href=""> Главная </a>
              </li>
              <li className="menuItem">
                <a href=""> Галерея </a>
              </li>
              <li className="menuItem">
                <a href=""> Проекты </a>
              </li>
              <li className="menuItem">
                <a href=""> Сертификаты </a>
              </li>
              <li className="menuItem">
                <a href=""> Контакты </a>
              </li>
            </ul>
          </div>
          <div className="footerContact">
            <div className="footerTitle">Контакты</div>
            <div className="adress">
              <FaMapMarkerAlt />
              <span>
                100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
              </span>
            </div>
            <div className="footerNumber">
              <BsTelephone />
              <span>+38 (000) 000 00 00</span>
            </div>
            <div className="footerMail">
              <HiOutlineMail />
              <span>mail@gmail.com</span>
            </div>
          </div>
          <div className="socialNetworks">
            <div className="footerTitle">Социальные сети</div>
            <div className="socialImg">
              <div className="icons">
                <FaFacebookF />
              </div>
              <div className="icons">
                <GrTwitter />
              </div>
              <div className="icons">
                <FaLinkedin />
              </div>
              <div className="icons">
                <FaPinterestP />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="footerDescr">
        © 2019 Digital Project. Все права защищены.
      </div>
    </div>
  );
};

export default Footer;
