import "./productInfo.css";
import {plus, minus, cart} from "../../assets";

const ProductInfo = ({quantity, minusQuantity, addQuantity, addToCart}) => {
    return (
        <div className="product__info">
            <h3 className="seller">Sneaker Company</h3>
            <h2 className="product-name">Fall Limited Edition Sneakers</h2>
            <p>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable leather sole, they'll handle everything the weather has to offer.
            </p>
            <div className="product__pricing">
                <div className="current__pricing">
                    <h3>$125.00</h3>
                    <p>-50%</p>
                </div>
                <div className="old_pricing">
                    <p>$250.00</p>
                </div>
            </div>
            <div className="product__adding-cart">
                <div className="product__quantity">
                    <div className="product__controls" onClick={minusQuantity}>
                        <img src={minus} alt=""/>
                    </div>
                    <p>{quantity}</p>
                    <div className="product__controls" onClick={addQuantity}>
                        <img src={plus} alt="" />
                    </div>
                </div>
                <button onClick={addToCart}><img src={cart} alt=""/> Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductInfo;