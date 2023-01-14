import Menu from "../../components/menu/Menu";
import HeaderIcons from "../../components/headerIcons/HeaderIcons";
import "./header.css";

const Header = ({quantity, cartItems, removeFromCart}) => {
    return (
        <div className="product__header">
            <Menu />
            <HeaderIcons quantity={quantity} cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    )
}
export default Header;