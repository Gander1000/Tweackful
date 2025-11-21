import scss from "./Features.module.scss";
import { Link } from "react-router-dom";
import Rectangle from "../../assets/Rectangle.svg";
import long_right from "../../assets/long_right.svg";

function Features() {
  return (
    <section className={scss.Features}>
      <h1>
        We have created a big library <br /> of illustrations with custom <br />{" "}
        style and action types.
      </h1>
      <span>
        “E-commerce Illustration Pack collects different ways to do quick
        shopping, pay in <br /> a second, and get all those stuff you need.
        There are smart delivery and polite <br /> service in the scenes. Each
        of them is realized in cold and warm colors with”
      </span>
      <div className={scss.contai_logo_title}>
        <img src={Rectangle} alt="" />
        <div className={scss.contai_title}>
          <h3>Jesica Kumari</h3>
          <p>CEO Of Acme Limited</p>
        </div>
      </div>
      <button>Explore More About This <img src={long_right} alt="" /></button>
    </section>
  );
}

export default Features;
