import Home from "./Home";
import Cart from "../Cart/Cart";
import Cart_1 from "../Cart_1/Cart_1";
import Success from "../Success/Success";
import Cart_2 from "../Cart_2/Cart_2";
import Foter_title from "../Foter_title/Foter_title";
import Foter_a from "../Foter_a/Foter_a";

function Link_Home () {
    return(
        <>
        <Home/>
        <Cart/>
        <Cart_1/>
        <Success/>
        <Cart_2/>
        <Foter_title/>
        <Foter_a/>
        </>
    );
}

export default Link_Home;