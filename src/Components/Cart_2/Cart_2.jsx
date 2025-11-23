import scss from "./Cart_2.module.scss";
import Cart_2date from "./Cart_2date";


function Cart_2 () {
    return (
      <section className={scss.Cart_2}>
        <h1>The process we follow</h1>
        <div className={scss.container}>
        {Cart_2date.map((item, index) => (
            <div className={scss.cart} key={index}>
                <div className={scss.contai_div_hr}>
                    <div className={scss.cnop}></div>
                    {index !== Cart_2date.length - 1 && <hr/>}
                </div>
                <h3>{item.h3}</h3>
                {item.span.map((ing, i) => (
                    <span key={i}>
                        {ing}
                        <br />
                    </span>
                ))}
            </div>
        ))}
        </div>
      </section>
    );
}

export default Cart_2;