// MODULES
import React, { useState, useEffect } from "react";
import Cart from "../components/cart"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"

function CartPage() {

    let [cart, setCartItems] = useState([]);

    useEffect(() => {
        loadCartItems()
    }, []);

    const loadCartItems = () => {
        setCartItems(Cart.itemsInCart)
    };

    const addToCart = (event) =>{

    }

    const removeFromCart = (event) =>{
        
    }

    return (
        <Layout>
            <SEO title="Cart" />
            <h1>Your Order</h1>
            <ul>
                {cart.length ? (
                <>
                    {cart.map((item, index) => {
                        console.log(item)
                        return (
                        <li>
                            {item.data.title} - ${item.totalPrice} - 
                            <button onClick={addToCart} data-item-id={item.id} >Add 1</button> - 
                            <button onClick={removeFromCart} data-item-id={item.id} >Remove 1</button>
                        </li>
                        )
                    })}
                </>
                ) : (
                    <>
                        <h3>Empty</h3>
                    </>
                )}
            </ul>
            <a href="/checkout" className="btn">Checkout</a>
        </Layout>
    )
}

export default CartPage;