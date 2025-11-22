import scss from "./Cart_1.module.scss";
import Cart from "./Cart_1date";
import Cart_1date from "./Cart_1date";

function Cart_1() {
  return (
    <section className={scss.Cart_1}>
      <h1>Benefits of working with us</h1>
      <div className={scss.Cart_list}>
        {Cart.map((item, index) => (
          <div className={scss.carte} key={index}>
            <img src={item.image} alt="" />
            <div className={scss.con_title}>
              <h3>{item.h3}</h3>
              {item.span.map((ing, i) => (
                <span key={i}>
                  {ing}
                  <br />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart_1;
