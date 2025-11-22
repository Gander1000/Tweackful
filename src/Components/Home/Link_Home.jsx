import Home from "./Home";
import Cart from "../Cart/Cart";
import Cart_1 from "../Cart_1/Cart_1";
import Success from "../Success/Success";
import Cart_2 from "../Cart_2/Cart_2";

function Link_Home () {
    return(
        <>
        <Home/>
        <Cart/>
        <Cart_1/>
        <Success/>
        <Cart_2/>
        </>
    );
}

export default Link_Home;