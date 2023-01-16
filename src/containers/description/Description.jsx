import "./description.css";
import {Gallery, ProductInfo} from "../../components";
import Popup from "../imagePopup/Popup";

const ProductDescription = ({quantity, addQuantity, minusQuantity, addToCart, togglePopup}) => {
    return (
        <div className="product__description">
            <Gallery togglePopup={togglePopup} />
            <Popup togglePopup={togglePopup} />
            <ProductInfo quantity={quantity} addQuantity={addQuantity} addToCart={addToCart} minusQuantity={minusQuantity} />
        </div>
    )
}

export default ProductDescription;