import React, { useState, useEffect } from 'react';
import CartFunc from "../functions/cart-functions"
import API from "../routes/api";

import CartItem from "./cart-item";

const CartView = (props) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      getCartProducts()
    }, [])
  
    const getCartProducts = () => {
      API.productsInCart(CartFunc.getCart())
        .then(res => setCartItems(res.data))
        .catch(err => console.log(err));
    };

    return(
        <div className="cart-view">
            <div style={{
                margin: `0 auto`,
                maxWidth: 960,
                position: `relative`,
            }}>
                <h3>Cart Items</h3>

                {cartItems.length ? (
                    <>
                    {cartItems.map((entry, index) => {
                        return (
                        <CartItem
                            key={index}
                            entry={entry}
                        />
                        )
                    })}
                    </>
                ) : (
                    <>
                        {/* ERROR LOG HERE */}
                    </>
                )}
            </div>
        </div>
    );
}
export default CartView;