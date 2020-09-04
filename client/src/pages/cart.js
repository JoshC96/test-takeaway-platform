// MODULES
import React, { useState, useEffect } from "react";
import API from "../routes/api";
import cartFunc from "../functions/cart-functions";

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"

function Cart() {

    let [cart, setCartItems] = useState([]);
    let cartLocalStorage = cartFunc.getCart();

    useEffect(() => {
        loadCartItems()
    }, []);

    const loadCartItems = () => {
      API.productsInCart(cartLocalStorage)
        .then(function(res){
            setCartItems(res.data)
            console.log(res.data);
        })
        .catch(err => console.log(err));
    };

    const addToCart = (event) =>{
        let id = parseInt(event.currentTarget.getAttribute('data-item-id'));
        cartFunc.addToCart(id);
    }

    const removeFromCart = (event) =>{
        let id = parseInt(event.currentTarget.getAttribute('data-item-id'));
        cartFunc.removeFromCart(id);
    }

    return (
        <Layout>
            <SEO title="Cart" />
            <h1>Your Order</h1>
            <ul>
                {cart.length ? (
                <>
                    {cart.map((item, index) => {
                        return (
                        <li>
                            {item.title} - ${item.price} - 
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

export default Cart;