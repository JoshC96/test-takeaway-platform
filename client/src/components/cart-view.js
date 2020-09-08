import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import CartFunc from "../functions/cart-functions"
import Button from 'react-bootstrap/Button';

import CartItem from "./cart-item";
import Cart from './cart';

import closeView from "../images/chevron-down-solid.svg"

const CartView = (props) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      getCartProducts()
    }, [])

    const handleClose = props.handleClose;
  
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

                <img style={{maxHeight: `30px`}} src={closeView} alt="Close Cart" onClick={handleClose} />

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
                <p style={{
                    margin:0, 
                    textAlign:'right',
                }}><Link className="checkout-button" to="/checkout">Checkout</Link></p>
            </div>
        </div>
    );
}
export default CartView;