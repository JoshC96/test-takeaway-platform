import React, {Component, useState} from "react";
import PropTypes from 'prop-types';
import LocalStorage from "../functions/cart-functions";

class CartClass extends Component {

    constructor(props){
        super(props);
        this.priceTotal = 0.0; // PRICES SHOULD BE FLOATS
        // this.state = useState([]);
        this.location = "";
        this.pickUpTime = "";
        this.itemsInCart = props.itemsInCart; // ARRAY FROM DEFAULT PROPS
        this.customer = props.customer; // OBJECT FROM DEFAULT PROPS
    }

    // THIS WILL BE RUN EVERY TIME THE CART CHANGES TO UPDATE THE FINAL CART
    updateCart = function(){

        // ensure single products have exact product totals
        this.updateProductTotals(); 

        // SET TEMP TOTAL
        let newTotal = 0.0;

        // LOOP THROUGH ITEMS AND ADD PRICES
        this.itemsInCart.forEach(element => {
            newTotal += element.totalPrice * element.quantity;
        });

        // SET PRICE
        this.priceTotal = newTotal;
        return this.priceTotal;
    };


    updateProductTotals = function(){
        this.itemsInCart.forEach(item => {
            item.modifiers.forEach(product => {
                item.totalPrice += parseFloat(product.price);
            });
        });
    }

    // addToCart() - ADDS A PRODUCT ITEM TO this.itemsInCart
    // ARGS:
    // productToAdd - OBJ - product data from the product page
    addToCart(productToAdd){
        this.itemsInCart.push(productToAdd);
        // RUN UPDATE CART
        Cart.updateCart();
    }

    // updatedProductQuantity() - ADDS OR REMOVES 1 TO QUANTITY
    // ARGS:
    // productInCart - OBJ - a single item from this.itemsInCart
    // operation - OBJ - a single item from this.itemsInCart
    updatedProductQuantity = function(productInCart, operation){
        if(operation === "add"){
            productInCart.quantity += 1;
        }
        else if(productInCart.quantity !== 1){
            productInCart.quantity -= 1;
        }
    }

    // submitCartOrder() - SUBMITS THE CART TO STRIPE, ON SUCCESS SUBMITS IT TO KOUNTA
    submitCartOrder = function(){
        
    }
}


CartClass.propTypes = {
    itemsInCart: PropTypes.array,
    customer: PropTypes.object
};

// IF LOCALSTORAGE CART EXISTS:
// THESE DEFAULTS SHOULD BE SET TO THE EXISTING LOCALSTORAGE CART
const defaultProps = {
    itemsInCart: [{
        quantity: 1,
        totalPrice: 16.5, // PRICES ARE FLOATS
        modifiers: [{ // ARRAY OF PRODUCT ADD ONS
            name: "blueberries", 
            price: .50
        }],
        data: {} // INDIVIDUAL PRODUCT DATA FROM API
    }], 
    customer: {
        name: "John Smith",
        phone: "+614 1324 5798",
        email: "test@test.com"
    }
};

let Cart = new CartClass(defaultProps);
Cart.updateCart();


export default Cart;