import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';

const CartItem = (props) => {

    const [quantity, setQuantity] = useState([]);
    let formattedPrice = parseFloat(props.entry.price).toFixed(2)

    useEffect(() => {
        setQuantity(props.quantity);
    }, [])


    const handleChange = function(event) {
        setQuantity(event.target.value);
    }

    return(
        <div className="cart-item">
            <div>
                <h4>{props.entry.title}</h4>
                <p>{props.entry.description}</p>
            </div>
            <div>
                <h4>${formattedPrice}</h4>
                <input type="number" value={quantity} onChange={handleChange} min="1" max="5"/>
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