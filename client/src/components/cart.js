import React, {Component, setState} from "react";
import PropTypes from 'prop-types';
import Storage from '../functions/cart-functions';

class CartClass extends Component {

    constructor(props){
        super(props);
        this.priceTotal = 0.0; // PRICES SHOULD BE FLOATS
        this.location = "";
        this.stateLocation = "South Australia"; // DEFAULT STATE LOCATION
        this.pickUpTime = "";
        this.itemsInCart = props.itemsInCart; // ARRAY FROM DEFAULT PROPS
        this.customer = props.customer; // OBJECT FROM DEFAULT PROPS

        this.state = {
            priceTotal: this.priceTotal,
            location: this.location,
            stateLocation: this.stateLocation,
            pickUpTime: this.pickUpTime,
            itemsInCart: this.itemsInCart,
            customer: this.customer
        }

        this.loadCart();
    }


    // THIS WILL BE RUN EVERY TIME THE CART CHANGES TO UPDATE THE FINAL CART
    updateCart = function(){

        // ensure single products have exact product totals
        // this.updateProductTotals(); 

        // SET TEMP TOTAL
        let newTotal = 0.0;

        // LOOP THROUGH ITEMS AND ADD PRICES
        this.itemsInCart.forEach(element => {
            newTotal +=  parseFloat(element.totalPrice) * parseFloat(element.quantity);
        });

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
    }

    // removeFromCart() - REMOVES A PRODUCT FROM this.itemsInCart
    // ARGS:
    // itemToRemove - INT - cart item ID
    removeFromCart(itemToRemove){

        console.log(this.itemsInCart)
        console.log(itemToRemove)
        
        this.itemsInCart = this.itemsInCart.filter(product => product.id !== itemToRemove)

        // RUN UPDATE CART
        Cart.updateCart();
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
            this.stateLocation = savedCart.stateLocation;
            this.pickUpTime = savedCart.pickUpTime;
            this.itemsInCart = savedCart.itemsInCart;
            this.customer = savedCart.customer;
        }
    }

    // submitCartOrder() - SUBMITS CART TO KOUNTA ON SUCCESS OF STRIPE
    submitCartOrder = function(){
        let dummyData = {
            "status": "COMPLETE",
            "notes": "Take away, gold member",
            "order_type": "Dine in",
            "guests": 23,
            "customer_id": 3842,
            "site_id": 409,
            "lines": [
              {
                "product_id": 730297,
                "quantity": 6,
                "notes": "Extra hot",
                "unit_price": 1.3636
              },
              {
                "product_id": 5312,
                "quantity": 1,
                "price_variation": 0.9,
                "modifiers": [
                  228,
                  228,
                  -3091
                ]
              }
            ],
            "price_limit": 100,
            "price_variation": 1.15,
            "payments": [
              {
                "method_id": 1,
                "amount": 5.5,
                "ref": "9000768"
              }
            ],
            "callback_uri": "http://third-party.com/update_order_status.json?id=123582936748",
            "complete_when_paid": false,
            "pass_thru_printing": false,
            "lock": [
              "PAYMENTS"
            ],
            "placed_at": "2013-05-29T11:14:06+10:00",
            "fulfil_at": "2013-05-29T13:00:00+10:00"
          }
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
        name: "John Smith",
        phone: "+614 1324 5798",
        email: "test@test.com"
    }
};

let Cart = new CartClass(defaultProps);
Cart.updateCart();


export default Cart;