import React, {Component, setState} from "react";
import PropTypes from 'prop-types';
import Storage from '../functions/cart-functions';
import CartSection from "./cart-section"

class CartClass extends Component {

    constructor(props){
        super(props);
        this.priceTotal = 0.0; // PRICES SHOULD BE FLOATS
        this.location = "";
        this.locationId = "";
        this.stateLocation = ""; // DEFAULT STATE LOCATION
        this.pickUpTime = "";
        this.itemsInCart = props.itemsInCart; // ARRAY FROM DEFAULT PROPS
        this.customer = props.customer; // OBJECT FROM DEFAULT PROPS

        this.state = {
            priceTotal: this.priceTotal,
            location: this.location,
            locationId: this.locationId,
            stateLocation: this.stateLocation,
            pickUpTime: this.pickUpTime,
            itemsInCart: this.itemsInCart,
            customer: this.customer
        }

        this.loadCart();
    }


    // THIS WILL BE RUN EVERY TIME THE CART CHANGES TO UPDATE THE FINAL CART
    updateCart = function(){

        // window.location.reload(false);        

        // SET TEMP TOTAL
        let newTotal = 0.0;

        // LOOP THROUGH ITEMS AND ADD PRICES
        if(typeof this.itemsInCart !== "undefined"){
            this.itemsInCart.forEach(element => {
                newTotal +=  parseFloat(element.totalPrice) * parseFloat(element.quantity);
            });
        }

        // SET PRICE
        this.priceTotal = newTotal;

        this.saveCart();

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
    // quantity - INT - number of items that should be EXACTLY this item
    // productData - OBJ - product data from Craft API
    // modifiers - ARRAY - add ons or extra related to the product
    addToCart(quantity, productData, modifiers){
        let newProduct = this.createCartItem(quantity, productData, modifiers)
        this.itemsInCart.push(newProduct);
        // RUN UPDATE CART
        Cart.updateCart();
        window.location.reload(false);
    }

    // removeFromCart() - REMOVES A PRODUCT FROM this.itemsInCart
    // ARGS:
    // itemToRemove - INT - cart item ID
    removeFromCart(itemToRemove){        
        this.itemsInCart = this.itemsInCart.filter(product => product.id !== itemToRemove)

        // RUN UPDATE CART
        Cart.updateCart();
        window.location.reload(false);
    }

    // createCartItem() - CREATES A CART ITEM TO STORE IN this.itemsInCart
    // ARGS:
    // quantity - INT - number of items that should be EXACTLY this item
    // productData - OBJ - product data from Craft API
    // modifiers - ARRAY - add ons or extra related to the product
    createCartItem(quantity, productData, modifiers){

        let productToAdd = {
            id: this.itemsInCart.length + 1,
            quantity: quantity ? quantity : 1,
            totalPrice: 0.0,
            modifiers: modifiers ? modifiers : [],
            data: productData
        } 

        let modifiersTotal = 0;

        // ADD ALL MODIFIERS PRICES
        productToAdd.modifiers.forEach(element => {
            modifiersTotal = parseFloat(modifiersTotal) + parseFloat(element.price);
        });

        // CALCULATE TOTAL PRICE OF ITEM
        productToAdd.totalPrice = (parseFloat(productToAdd.data.price) + parseFloat(modifiersTotal)) * parseFloat(productToAdd.quantity);

        // PARSE TO FLOAT
        productToAdd.totalPrice = parseFloat(productToAdd.totalPrice).toFixed(2)

        return productToAdd;

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

    // saveCart() - SAVES THE CART TO LOCAL STORAGE
    saveCart = function(){
        let savedCartObject = {
            priceTotal:this.priceTotal,
            location: this.location,
            locationId: this.locationId,
            stateLocation: this.stateLocation,
            pickUpTime: this.pickUpTime,
            itemsInCart: this.itemsInCart,
            customer: this.customer
        };
        Storage.saveCart(savedCartObject)
    }

    // loadCart() - LOADS THE CART FROM LOCAL STORAGE IF EXISTS
    loadCart = function(){
        if(Storage.getCart() === null){
            Storage.initCart()
        }
        else{
            let savedCart = JSON.parse(Storage.getCart())
            this.priceTotal = savedCart.priceTotal;
            this.location = savedCart.location;
            this.locationId = savedCart.locationId;
            this.stateLocation = savedCart.stateLocation;
            this.pickUpTime = savedCart.pickUpTime;
            this.itemsInCart = savedCart.itemsInCart;
            this.customer = savedCart.customer;
        }
    }

    resetCart = function(){
        let savedCart = JSON.parse(Storage.getCart())
        this.priceTotal = 0.0;
        this.location = savedCart.location;
        this.locationId = savedCart.locationId;
        this.stateLocation = savedCart.stateLocation;
        this.pickUpTime = "";
        this.itemsInCart = [];
        this.customer = savedCart.customer ? savedCart.customer : {};

        this.saveCart();
    }

    // submitCartOrder() - SUBMITS CART TO KOUNTA ON SUCCESS OF STRIPE
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
    itemsInCart: [], 
    customer: {
        name: "",
        phone: "",
        email: ""
    }
};

let Cart = new CartClass(defaultProps);
Cart.updateCart();


export default Cart;