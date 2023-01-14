import "./description.css";
import {Gallery, ProductInfo} from "../../components";

const ProductDescription = ({quantity, addQuantity, minusQuantity, addToCart, togglePopup}) => {
    return (
        <div className="product__description">
            <Gallery togglePopup={togglePopup} />
            <ProductInfo quantity={quantity} addQuantity={addQuantity} addToCart={addToCart} minusQuantity={minusQuantity} />
        </div>
    )
}

export default ProductDescription;