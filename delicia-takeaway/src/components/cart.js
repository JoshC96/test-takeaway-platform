import React from "react"

import CartItem from "./cart-item"

const Cart = () => {

    getCartItems = function(){
        let cartItems = [{
            title: "Tropic Thunder",
            price: 6.5,
            quantity: "2"
        }]
        return cartItems;
    }

    const cartItems = getCartItems();

    return(
        <>
            <div className="cart-button">
                <img className="cart-icon" src="/images/icon-cart.svg" alt="Cart icon" />
            </div>
            <div className="cart-wrap">
                {cartItems.map(cartItem => {
                    return (
                        <CartItem
                            props={cartItem}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Cart;