import "./gallery.css";
import productImages from "../../imagemanager";

const Gallery = ({togglePopup}) => {
    return (
        <div className="product__images">
            <div className="current__image">
                <img onClick={togglePopup} src={productImages[0].mainImg} alt="img1"/>
            </div>
            <div className="other-images">
                {productImages.map(image => {return <div key={image.id} className="img-container"><img src={image.thumbnail} /></div>})}
            </div>
        </div>
    )
}

export default Gallery;