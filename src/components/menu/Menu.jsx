import { useState } from "react";
import {logo, menu} from "../../assets";
import "./menu.css";


const MenuItems = () => {
    return (
        <>
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
        </>
    )
}


const Menu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(prev => !prev)
    }
    return (
        <div className="product__menu">
            <div className="logo">
                <img onClick={toggleMenu} className="menu__icon" src={menu} alt="product-menu" />
                <img className="logo__image" src={logo} alt="product-page" />
            </div>
            <div className="product__menu-items">
                <MenuItems />
            </div>
            {mobileMenu ? 
                <div className="menu__items-mobile">
                    <MenuItems />
                </div> :
                null 
            }
        </div>
    )
}

export default Menu;