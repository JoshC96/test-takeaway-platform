import React, { useState, useEffect } from "react";
import Cart from "./cart"
import CheckoutItem from "../components/checkout-item"

class CheckoutProducts extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
    }

    state = {
        productsInCart: Cart.itemsInCart
    }

    productsList = this.state.productsInCart.map((productObj,index) => {
        return (
            <CheckoutItem product={productObj} />
        );
    })  

    
    render() {
        return (
            <>
                <h3>Cart</h3>
                {this.productsList.length ? (
                    <>
                        {this.productsList}
                    </>
                    ) : (
                    <>
                        {/* ERROR LOG HERE */}
                    </>
                )}

            </>
        )
    }
}
  
export default CheckoutProducts
