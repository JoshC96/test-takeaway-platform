import React from 'react';

import cartIcon from "../images/icon-cart.svg";

const CartButton = () => {

    return(
        <>
            <a href="/cart" className="cart-button">
                <img className="cart-icon" src={cartIcon} alt="Cart icon" />
            </a>            
        </>
    )
}

export default CartButton;