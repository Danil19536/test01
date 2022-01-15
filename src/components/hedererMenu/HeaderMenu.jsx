import Logotip from "../../images/header-logo.jpg";

const HeaderMenu = () => {
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
    </div>
  );
};

export default HeaderMenu;
