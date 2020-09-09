// MODULES
import React from 'react';
import Cart from "../components/cart"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"

const Receipt = () => {

    return (
        <>
        {Cart.itemsInCart.map((productObj,index) => {   
            return (
                <div className="cart-item checkout-item">
                <div>
                    <h4>{productObj.data.title}</h4>
                    {productObj.modifiers.length && (
                        <h6>Add-ons: 
                        <>
                            {productObj.modifiers.map((addon,index) => {
                                return(
                                    ", " + addon.name
                                )
                            })}
                        </>
                        </h6>
                    )}
                    <p>{productObj.data.description}</p>
                </div>
                <div>
                    <h4>${parseFloat(productObj.totalPrice).toFixed(2)}</h4>
                    <p>Qty: {productObj.quantity}</p>
                </div>
            </div>
            )         
        })}
        </>
    );
}

const OrderConfirmed = () => {

    // Cart.resetCart();

    return (
        <Layout>
            <SEO title="Thank you" />
            <div>
                <h1>Order Confirmed - Thank you! </h1>
                <p>Thank you for your purchase, your receipt is below:</p>
                <Receipt />
            </div>
        </Layout>
    )
}

export default OrderConfirmed;