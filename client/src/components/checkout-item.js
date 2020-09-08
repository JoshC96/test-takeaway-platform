import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Cart from './cart';

const CheckoutItem = (props) => {

    const [quantity, setQuantity] = useState([]);
    let formattedPrice = parseFloat(props.product.totalPrice).toFixed(2)

    let addonsString = "";

    props.product.modifiers.map((addon,index) => {
        if(index !== 0){
            addonsString = addonsString + ", " + addon.name
        }
        else{
            addonsString = addonsString + addon.name
        }
    })

    useEffect(() => {
        setQuantity(props.quantity);
    }, [])


    const handleChange = function(event) {
        setQuantity(event.target.value);
    }

    const handleRemove = function(){
        Cart.removeFromCart(props.product.id);
    }

    return(
        <div className="cart-item checkout-item">
            <div>
                <h4>{props.product.data.title}</h4>
                {addonsString && (
                    <h6>Add-ons: {addonsString}</h6>
                )}
                <p>{props.product.data.description}</p>
            </div>
            <div>
                <h4>${formattedPrice}</h4>
                <p>Qty: {quantity}</p>
                {/* <input type="number" value={quantity} onChange={handleChange} min="1" max="5"/> */}
                <Button variant="danger" onClick={handleRemove}>Remove</Button>
            </div>
        </div>
    );
}

CheckoutItem.propTypes = {
    quantity: PropTypes.number,
};
  
CheckoutItem.defaultProps = {
    quantity: 1,
};

export default CheckoutItem;