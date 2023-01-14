import { useState } from 'react';
import './App.css';
import { Header, Description, Popup } from './containers';
import {thumbnail1} from "./assets";

function App() {
  const product = {
    title: "Fall Limited Edition Sneakers",
    price: 125,
    thumbnail: thumbnail1
  }
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const addQuantity = () => {
    setQuantity(prev => {
      if (prev === 0) {
        return 0;
      } else {
        return prev+1;
      }
    });
  }
  const addToCart = () => {
    setCartItems(product);
    setQuantity(prev => {
      if (prev === 0) {
        return prev+1;
      } else {
        return prev
      }
    });
  }
  const removeFromCart = () => {
    if (quantity > 0 ) {
      setQuantity(0);
    }
    setCartItems(false);
  }
  const minusQuantity = () => {
    setQuantity(prev => {
      if(prev === 1) {
        setCartItems(false);
      }
      if (prev === 0) {
        return 0;
      } else {
        return prev-1;
      }
    });
  }
  const togglePopup = () => {
    setShowPopup(prev => !prev);
  }
  return (
    <div className="product-page">
      {showPopup ? <Popup togglePopup={togglePopup} />: null}
      <Header quantity={quantity} cartItems={cartItems} removeFromCart={removeFromCart} />
      <Description togglePopup={togglePopup} quantity={quantity} addQuantity={addQuantity} minusQuantity={minusQuantity} addToCart={addToCart} />
    </div>
  )
}

export default App
