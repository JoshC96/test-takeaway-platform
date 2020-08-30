import React, { useState } from 'react';

import CartItem from "./cart-item"

const Cart = () => {

    let getCartItems = function(){
        let cartItems = [
            {   
                id: "001",
                title: "Tropic Thunder",
                price: 6.5,
                quantity: "2"
            },
            {
                id: "002",
                title: "The Original",
                price: 9.8,
                quantity: "1"
            }
        ]
        return cartItems;
    }

    const cartItems = getCartItems();
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }

    return(
        <>
            <div className="cart-button" onClick={toggle} >
                <img className="cart-icon" src="/images/icon-cart.svg" alt="Cart icon" />
            </div>
            {isOpened && (
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
            )}
            
        </>
    )
}

export default Cart;