import "./cart.css";
import {deleteIcon} from "../../assets";

const Cart = ({cartItems, quantity, removeFromCart}) => {
    const totalAmount = cartItems.price * quantity;
    return (
        <div className="product-page__cart">
            <div className="cart-top">
                <h3>Cart</h3>
            </div>
            <div className="cart-body">
                {!cartItems ? <div className="cart-body__empty">
                        <p>Your cart is empty</p>
                    </div> : 
                    <div className="cart-body__with-item">
                        <div className="cart__item">
                            <img className="product__thumbnail" src={cartItems.thumbnail} alt="" />
                            <div className="cart__item-info">
                                <p>{cartItems.title}</p>
                                <p>{`$${cartItems.price} x ${quantity}`} = <span className="cart__amount">{`$${totalAmount}`}</span></p>
                            </div>
                            <img onClick={removeFromCart} className="delete__btn" src={deleteIcon} alt="" />
                        </div>
                        <button>Checkout</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;