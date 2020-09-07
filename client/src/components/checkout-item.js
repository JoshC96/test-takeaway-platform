import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';

const CheckoutItem = (props) => {

    const [quantity, setQuantity] = useState([]);
    let formattedPrice = parseFloat(props.product.totalPrice).toFixed(2)

    useEffect(() => {
        setQuantity(props.quantity);
    }, [])


    const handleChange = function(event) {
        setQuantity(event.target.value);
    }

    console.log(props.product)

    return(
        <div className="cart-item">
            <div>
                <h4>{props.product.data.title}</h4>
                <p>{props.product.data.description}</p>
            </div>
            <div>
                <h4>${formattedPrice}</h4>
                <input type="number" value={quantity} onChange={handleChange} min="1" max="5"/>
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