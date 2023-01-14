import "./popup.css";
import { closeIcon, nextIcon, previousIcon } from "../../assets";
import productImages from "../../imagemanager";
import { useState } from "react";

const Popup = ({togglePopup}) => {
    const [mainImage, setMainImage] = useState(0);
    const handleNext = () => {
        if (mainImage < productImages.length-1) {
            setMainImage(prev => prev+1);
        } else {
            setMainImage(prev => prev);
        }
    }
    const handlePrev = () => {
        if (mainImage > 0 ) {
            setMainImage(prev => prev-1);
        } else {
            setMainImage(0);
        }
    }
    const clickThumbnail = (e) => {
        console.log(e.target.id);
        setMainImage(e.target.id);
    }
    return (
        <div className="product__gallery-popup">
            <div className="product__gallery-popup__inner">
                <div className="close-container">
                    <img onClick={togglePopup} src={closeIcon} alt="" />
                </div>
                <div className="popup__images">
                    <div className="popup__main-image">
                        <img className="image__main" src={productImages[mainImage].mainImg} alt="" />
                        <img onClick={handleNext} className="controls next" src={nextIcon} alt="" />
                        <img onClick={handlePrev} className="controls prev" src={previousIcon} alt="" />
                    </div>
                    <div className="popup__thumbnail-images">
                        {productImages.map((image, index) => {
                            return <div className="thumbnail__container" key={image.id}>
                                <img id={index} onClick={clickThumbnail} src={image.thumbnail} alt="" />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Popup;