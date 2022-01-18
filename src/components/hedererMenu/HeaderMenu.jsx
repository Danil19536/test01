import React, { useRef, useState } from "react";
import useOnClickOutside from "../../utils/useOnClickOutSide";
import Logotip from "../../images/header-logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);
  const handelClick = () => {
    setIsOpen(!isOpen);
  };
  useOnClickOutside(formRef, () => {
    setIsOpen(false);
  });
  return (
    <div className="headerMenu">
      <div className="logo">
        <img src={Logotip} alt="" />
      </div>
      <div className="menuContainer">
        <ul className="menu">
          <li className="menu-item ">
            <a href="*" className="firstItemMenu">
              {" "}
              ГЛАВНАЯ{" "}
            </a>
          </li>
          <li className="menu-item">
            <a href="*"> ГАЛЕРЕЯ </a>
          </li>
          <li className="menu-item">
            <a href="*"> ПРОЕКТЫ </a>
          </li>
          <li className="menu-item">
            <a href="*"> СЕРТИФИКАТЫ </a>
          </li>
          <li className="menu-item">
            <a href="*"> КОНТАКТЫ </a>
          </li>
        </ul>
      </div>
      <div className="mobileMenu">
        <GiHamburgerMenu className="burger" onClick={handelClick} />
        <ul className={`mobileMenuList ${isOpen ? "open" : ""}`} ref={formRef}>
          <li className="mobileMenu-item">ГЛАВНАЯ</li>
          <li className="mobileMenu-item">ГАЛЕРЕЯ</li>
          <li className="mobileMenu-item">ПРОЕКТЫ</li>
          <li className="mobileMenu-item">СЕРТИФИКАТЫ</li>
          <li className="mobileMenu-item">КОНТАКТЫ</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
