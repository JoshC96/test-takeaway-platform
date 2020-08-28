import React from "react"

import CartItem from "./cart-item"

const Cart = () => {

    let getCartItems = function(){
        let cartItems = [
            {
                title: "Tropic Thunder",
                price: 6.5,
                quantity: "2"
            },
            {
                title: "The Original",
                price: 9.8,
                quantity: "1"
            }
        ]
        return cartItems;
    }

    const cartItems = getCartItems();

    return(
        <>
            <div className="cart-button">
                <img className="cart-icon" src="/images/icon-cart.svg" alt="Cart icon" />
            </div>
            <div className="cart-wrap">
                <h3>Your Order</h3>

                {cartItems.map((cartItem, index) => {
                    return (
                        <CartItem
                            key={index}
                            props={cartItem}
                        />
                    )
                })}

                <div className="cart-total">
                    <h4>Total</h4>
                    <span><strong>$18</strong></span>
                </div>

            </div>
        </>
    )
}

export default Cart;