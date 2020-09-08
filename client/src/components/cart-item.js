import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Cart from './cart';

const CartItem = (props) => {

    const [quantity, setQuantity] = useState([]);
    let formattedPrice = parseFloat(props.item.totalPrice).toFixed(2)
    let addonsString = "";

    props.item.modifiers.map((addon,index) => {
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
        Cart.removeFromCart(props.item.id);
    }

    return(
        <div className="cart-item">
            <div>
                <h4>{props.item.data.title}</h4>
                {addonsString && (
                    <h6>Add-ons: {addonsString}</h6>
                )}
                <p>{props.item.data.description}</p>
            </div>
            <div>
                <h4>${formattedPrice}</h4>
                <input type="number" value={props.item.quantity} onChange={handleChange} min="1" max="5"/>
                <Button variant="danger" onClick={handleRemove}>Remove</Button>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    quantity: PropTypes.number,
};
  
CartItem.defaultProps = {
    quantity: 1,
};

export default CartItem;