import scss from "./Home.module.scss";
import { Link } from "react-router-dom";
import Title from "./Homedate";
import long_right from "../../assets/long_right.svg";
import Sp from "../../assets/Sp.svg";

function Home() {
  return (
    <section className={scss.Home}>
      {Title.map((item, index) => (
        <div className={scss.container} key={index}>
          <div className={scss.contai_title}>
            <div>
              {item.h1.map((line, i) => (
                <h1 key={i}>
                  {line}
                  <br />
                </h1>
              ))}
            </div>
            <div>
              {item.span.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>

            <div className={scss.contai_button_p}>
              <Link to={"/.Home_bleck"}>
                {" "}
                <button>
                  Book A Meeting <img src={long_right} alt="" />
                </button>
              </Link>
              <div>
                {item.p.map((line, i) => (
                  <p key={i}>
                    {line}
                    <br />
                  </p>
                ))}
              </div>
            </div>

            <div className={scss.contai_logo}>
              <img src={Sp} alt="" />
              <img src={Sp} alt="" />
              <img src={Sp} alt="" />
            </div>
          </div>
          <div className={scss.Wumen}>
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Home;
