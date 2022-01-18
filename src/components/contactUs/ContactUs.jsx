import contactUsImg from "../../images/contact-us.jpg";
import { BsArrowRight } from "react-icons/bs";
const ContactUs = () => {
  return (
    <div className="container">
      <div className="contactTitle">Связаться с нами</div>
      <div className="contactUsContainer">
        <div className="formsContact">
          <form action="">
            <input
              type="text"
              name="login"
              placeholder="Имя"
              className="name"
            />
            <br />
            <input
              type="text"
              name="number"
              placeholder="Номер телефона*"
              className="number"
            />
            <br />
            <input
              type="text"
              name="email"
              placeholder="E-mail*"
              className="E-mail"
            />
            <br />
            <input
              type="text"
              name="services"
              placeholder="Интересующий товар/услуга"
              className="services"
            />
            <br />
            <textarea
              type="text"
              name="message"
              placeholder="Сообщение*"
              className="message"
            />
          </form>
        </div>
        <div className="contactImage">
          <img src={contactUsImg} alt="contactImg" />
        </div>
      </div>
      <div className="descr">
        <div className="checkbox-wrapper">
          <input id="test2" type="checkbox" />
          <label htmlFor="test2"></label>
        </div>
        Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
      </div>
      <div className="sendBtn">
        <button className="send">
          <span>ОТПРАВИТЬ</span> <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
