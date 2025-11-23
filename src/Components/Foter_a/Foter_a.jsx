import scss from "./Foter_a.module.scss";
import long_right from "../../assets/long_right.svg";
import A_list from "./Foter_adate";

function Foter_a() {
  return (
    <section className={scss.Foter_a}>
      <h1>Tweakful</h1>
      <div className={scss.container}>
        <div className={scss.contai_title}>
          <h3>About Tweakful</h3>
          <span>
            Tweakful is HubSpot Theme Based On Engagement <br /> Design
            Framework, designed & developed by Openthrive.
          </span>
          <a href="">
            Button Text
            <img src={long_right} alt="" />
          </a>
        </div>
        <div className={scss.contai_a}>
          {A_list.map((item, index) => (
            <div className={scss.contai} key={index}>
              {item.ingirdiens &&
                item.ingirdiens.map((ing, i) => (
                  <a key={i} href="">
                    {ing.a}
                  </a>
                ))}
              {item.ingirdiens_2 &&
                item.ingirdiens_2.map((step, b) => (
                  <a key={b} href="">
                    {step.a}
                  </a>
                ))}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className={scss.contai_foter}>
        <span>
          B2B website and engagement design solution that transform <br />{" "}
          marketing and sales performance like never before.
        </span>
        <p>© 2015-2020 Openthrive. All right reserved.</p>
      </div>
    </section>
  );
}

export default Foter_a;
