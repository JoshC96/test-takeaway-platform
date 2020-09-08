import React, { useState, useEffect } from 'react';
import CartFunc from "../functions/cart-functions"
import API from "../routes/api";

import CartItem from "./cart-item";
import Cart from './cart';

const CartView = (props) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      getCartProducts()
    }, [])
  
    const getCartProducts = () => {
        setCartItems(Cart.itemsInCart)
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
                    {cartItems.map((item, index) => {
                        return (
                        <CartItem
                            key={index}
                            item={item}
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