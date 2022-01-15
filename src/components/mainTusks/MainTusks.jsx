import firstTuskImg from "../../images/main-tusks-img1.jpg";
import secondTuskImg from "../../images/main-tusks-img2.jpg";
const MainTusks = () => {
  return (
    <div className="container">
      <div className="TitleTusk">Основные задачи</div>
      <div className="tusksContainer">
        <div className="firstTusk">
          <img src={firstTuskImg} alt="countTusk" />
          <p className="TuskText">
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </p>
        </div>
        <div className="secondTusk">
          <img src={secondTuskImg} alt="countTusk" />
          <p className="TuskText">
            Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainTusks;
