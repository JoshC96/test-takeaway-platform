import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cartFunc from "../functions/cart-functions"
import API from "../routes/api"

import CartView from "./cart-view"
import iconClock from "../images/icon-clock.svg"
import iconCart from "../images/icon-cart.svg"
import iconMarker from "../images/icon-map-marker.svg"

const CartSection = (props) => {
    
    let [cartTotal, setTotal] = useState([]);
    let [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        setTotal(props.total);
        getTotal();
    }, [])

    const getTotal = () => { 
        API.productsInCart(cartFunc.getCart())
        .then(function(res){
            // USE CART FUNCTION TO RETURN FLOAT 
            setTotal(cartFunc.getCartTotal(res.data));
        }).catch(function(err){
            console.log("Error getting total")
            console.log(err)
        });
    }


    function toggleCartView() {
        setIsOpened(wasOpened => !wasOpened);
    }

    const handleClick = event => toggleCartView();

    return(
        <>
            <div className="cart-toolbar"
                style={{bottom:"0"}}
            >
                <div style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    position: `relative`,
                }}>

                    
                    <button style={{marginRight: `8px`}}>
                        <img src={iconMarker} alt="Icon Map Marker" />
                        <span>North Adelaide</span>
                    </button>
                    <button> 
                        <img src={iconClock} alt="Icon Clock" /> 
                        <span>9:45am</span>
                    </button>

                    <button onClick={handleClick} style={{float: `right`}}> 
                        <img src={iconCart} alt="Icon Cart" />
                        <span>${cartTotal}</span>
                    </button>

                </div>     
            </div>

            {isOpened && (
                <CartView />
            )}
        </>
    )
}

CartSection.propTypes = {
    total: PropTypes.string,
};
  
CartSection.defaultProps = {
    total: parseFloat('0.00').toFixed(2),
};

export default CartSection;