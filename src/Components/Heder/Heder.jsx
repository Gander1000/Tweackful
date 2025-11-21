import scss from "./Heder.module.scss";
import { Link } from "react-router-dom";
import Title from "../../Cartdate";
import long_right from "../../assets/long_right.svg";

const Heder = () => {
  return (
    <section className={scss.Heder}>
      {Title.map((item, index) => (
        <div className={scss.contai_a_logo} key={index}>
          <Link to={"/"}>
            <img src={item.img} alt="" />
          </Link>

          {item.ingirdiens.map((ing, i) => (
            <Link to={ing.path} key={i}>{ing.name}</Link>
          ))}
        </div>
      ))}
      <div className={scss.contai_button}>
        <Link to={"/.Home_bleck"}>
          <button>
            Book A Meeting <img src={long_right} alt="" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Heder;
