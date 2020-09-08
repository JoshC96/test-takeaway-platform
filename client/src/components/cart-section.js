import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import Cart from "./cart"

import CartView from "./cart-view"
import StoreList from "./store-list"
import iconClock from "../images/icon-clock.svg"
import iconCart from "../images/icon-cart.svg"
import iconMarker from "../images/icon-map-marker.svg"

const CartSection = (props) => {

    let [cartTotal, setTotal] = useState();
    let [isOpened, setIsOpened] = useState(false);
    let formRef = createRef();

    useEffect(() => {
        setTotal(Cart.priceTotal);
        getTotal();
    }, [])

    const getTotal = () => { 
        setTotal(Cart.priceTotal);
    }

    function toggleCartView() {
        setIsOpened(wasOpened => !wasOpened);
    }

    const handlePriceClick = event => toggleCartView();
    const handleSubmit = event => {
        event.preventDefault()
        Cart.updateCart();
        getTotal();
    };

    // SET CART PICKUP TIME TO NEW TIME
    const handleTimeChange = event => {
        Cart.pickUpTime = event.target.value;
    };

    return(
        <form className="app-cart" ref={formRef} onSubmit={handleSubmit}>
            <div className="cart-toolbar"
                style={{bottom:"0"}}
            >
                <div style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    position: `relative`,
                }}>
                    <div className="cart-selector" style={{marginRight: `8px`}}>
                        <img src={iconMarker} alt="Icon Map Marker" />
                        <StoreList />
                    </div>
                    

                    <div className="cart-selector"> 
                        <img src={iconClock} alt="Icon Clock" /> 
                        {/* <span>9:45am</span> */}
                        <select onChange={handleTimeChange}>
                            <option defaultValue value="9:00">9:00am</option>
                            <option value="10:00">10:00am</option>
                            <option value="11:00">11:00am</option>
                            <option value="12:00">12:00pm</option>
                            <option value="13:00">1:00pm</option>
                            <option value="14:00">2:00pm</option>
                            <option value="15:00">3:00pm</option>
                            <option value="16:00">4:00pm</option>
                            <option value="15:00">5:00pm</option>
                        </select>
                    </div>

                    <div className="cart-selector" onClick={handlePriceClick} style={{float: `right`}}> 
                        <img src={iconCart} alt="Icon Cart" />
                        <span>${cartTotal}</span>
                    </div>

                </div>     
            </div>

            {isOpened && (
                <CartView />
            )}
        </form>
    )
}

CartSection.propTypes = {
    total: PropTypes.string,
};
  
CartSection.defaultProps = {
    total: parseFloat('0.00').toFixed(2),
};

export default CartSection;