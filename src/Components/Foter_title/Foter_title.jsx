import scss from "./Foter_title.module.scss";
import Sp from "./Foter_titledate";
import long_right from "../../assets/long_right.svg";
import { Link } from "react-router-dom";

function Foter_title() {
  return (
    <section className={scss.Foter_title}>
      <h1>
        The Is Closing Headline To Make A <br /> Impact For Call To Action
      </h1>
      <span>
        Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital
        lending strategy to streamline <br /> the lending process nowadays, it
        isn’t uncommon to see lenders rapidly
      </span>
      <Link to={"/Home_bleck"}>
        <button>
          Book A Meeting <img src={long_right} alt="" />
        </button>
      </Link>
      <hr />
      <div className={scss.container}>
        {Sp.map((item, index) => (
          <div className={scss.contai_img} key={index}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Foter_title;
