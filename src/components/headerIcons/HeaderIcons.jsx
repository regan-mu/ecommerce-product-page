import {cart, avatar} from "../../assets/";
import "./headerIcons.css";
import Cart from "../cart/Cart";
import { useState } from "react";
const HeaderIcons = ({quantity, cartItems, removeFromCart}) => {
    const [showCart, setShowCart] = useState(false);
    const displayCart = () => {
        setShowCart(prev => !prev)
    }
    return (
        <div className="product__header-icons">
            <div className="cart-container" onClick={displayCart}>
                <img className="cart" src={cart} alt="" />
                {quantity > 0 ? <div className="product__amount">{quantity}</div>: null }
            </div>
            <div className="avatar-container">
                <img className="avatar" src={avatar} alt="" />
            </div>
            { showCart ? <Cart cartItems={cartItems} quantity={quantity} removeFromCart={removeFromCart} /> : null }
        </div>
    )
}

export default HeaderIcons;