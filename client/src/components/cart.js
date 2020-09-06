import React, {Component, useState} from "react";
import PropTypes from 'prop-types';

class Cart extends Component {

    constructor(props){
        this.priceTotal = 0.0; // PRICES SHOULD BE FLOATS
        this.state = useState([]);
        this.location = "";
        this.pickUpTime = "";
        this.itemsInCart = props.itemsInCart; // ARRAY FROM DEFAULT PROPS
        this.customer = props.customer; // OBJECT FROM DEFAULT PROPS
    }

    // THIS WILL BE RUN EVERY TIME THE CART CHANGES TO UPDATE THE FINAL CART
    cartUpdated = new CustomEvent("cartUpdated", {
        bubbles: true,
        content: {
            location: "", // NEEDS TO BE SET TO COMPONENT.STATE.LOCATION
            items: [], // NEEDS TO BE SET TO COMPONENT.STATE.ITEMS
            pickUpTime: "" // NEEDS TO BE SET TO COMPONENT.STATE.PICKUPTIME
        }
    });

    // attachCartUpdateEvent() - ADDS EVENT LISTENER TO ELEMENT TO WATCH FOR CART CHANGES
    // ARGS:
    // ELEMENT - HTML element that should listener for cart update event
    attachCartUpdateEvent = function(element){
        element.addEventListener('cartUpdated', e => console.log(e.content));
    }

    // triggerCartUpdateEvent() - ADDS TRIGGER TO ELEMENT ON ELEMENT CHANGE 
    // ARGS:
    // ELEMENT - HTML <INPUT> element that should TRIGGER cart update event
    triggerCartUpdateEvent = function(element){
        element.addEventListener('onChange', e => (
            e.target.dispatchEvent(this.cartUpdated)
        ))
    };

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
Cart.propTypes = {
    itemsInCart: PropTypes.array,
    customer: PropTypes.object
};



// IF LOCALSTORAGE CART EXISTS:
// THESE DEFAULTS SHOULD BE SET TO THE EXISTING LOCALSTORAGE CART
Cart.defaultProps = {
    itemsInCart: [{
        quantity: 1,
        totalPrice: 16.5, // PRICES ARE FLOATS
        modifiers: [{ // ARRAY OF PRODUCT ADD ONS
            name: "blueberries", 
            price: .50
        }],
        data: {} // PRODUCT DATA FROM API
    }], 
    customer: {
        name: "John Smith",
        phone: "+614 1324 5798",
        email: "test@test.com"
    }
};

export default Cart;