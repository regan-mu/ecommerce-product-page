import logo from "../../assets/logo.svg";
import "./menu.css";

const Menu = () => {
    return (
        <div className="product__menu">
            <div className="logo">
                <img src={logo} alt="product-page" />
            </div>
            <div className="product__menu-items">
                <p>Collections</p>
                <p>Men</p>
                <p>Women</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Menu;