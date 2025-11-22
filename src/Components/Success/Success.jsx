import scss from "./Success.module.scss";
import Wumen from "../../assets/Wumen_2.svg";
import long_right_blue from "../../assets/long_right_blue.svg";
import Sp from "../../assets/Sp.svg";

function Success() {
  return (
    <section className={scss.Success}>
      <div className={scss.container}>
        <div className={scss.contai_title}>
          <h1>Success Story</h1>
          <span>
            Nowadays, it isn’t uncommon <br /> to see lenders rapidly <br />{" "}
            adopting a digital lending <br /> strategy to streamline the <br />{" "}
            lending process
          </span>
          <div className={scss.contai_spon}>
            <img className={scss.Sp} src={Sp} alt="" />
            <a href="">
              Read Complete Case Study
              <img src={long_right_blue} alt="" />
            </a>
          </div>
          <div className={scss.contai_cnopi}>
            <div className={scss.cnop}></div>
            <div className={scss.cnop}></div>
            <div className={scss.cnop}></div>
          </div>
        </div>
        <div className={scss.Wumen}>
          <img src={Wumen} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Success;
