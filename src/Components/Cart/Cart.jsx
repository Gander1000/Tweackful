import scss from "./Cart.module.scss";
import Carta from "./Cartdate";
import long_right from "../../assets/long_right.svg";

function Cart() {
  return (
    <section className={scss.Cart}>
      <div className={scss.cart_list}>
        {Carta.map((item, index) => (
          <div className={scss.contai_cart} key={index}>
            <img src={item.image} alt="" />
            <div className={scss.title_cart}>
              <h3>{item.h3}</h3>
              {item.span.map((img, i) => (
                <span key={i}>
                  {img} <br />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={scss.contai_title}>
        <h1>
          Headline of Modern <br /> and Digital Lending <br /> Platform Seconds
        </h1>
        <span>
          Nowadays, it isn’t uncommon to see lenders <br /> rapidly adopting a
          digital lending strategy
        </span>
        <button>
          Learn More About <img src={long_right} alt="" />
        </button>
      </div>
    </section>
  );
}

export default Cart;
