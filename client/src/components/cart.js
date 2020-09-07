import React, {Component, useState} from "react";
import PropTypes from 'prop-types';

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
    itemsInCart: [{
        quantity: 1,
        totalPrice: 16.5, // PRICES ARE FLOATS
        modifiers: [{ // ARRAY OF PRODUCT ADD ONS
            name: "blueberries", 
            price: .50
        }],
        data: {
            "id": 37,
            "uri": "product/37",
            "title": "Health Nut",
            "price": "15.5",
            "category": {
                "id": "24",
                "title": "Acai Bowls"
            },
            "description": "Delicia Acai blend topped with granola, coconut flakes, banana, honey, strawberries, mixed nuts, goji berries, chia seeds, nut butter",
            "imageUrl": "http://takeaway.nightfallstudios.com.au/assets/_440x320_crop_center-center_50_none/basic-acai-bowl.jpg"
        } // INDIVIDUAL PRODUCT DATA FROM API
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