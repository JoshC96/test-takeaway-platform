import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import Cart from "./cart"

import CartView from "./cart-view"
import StoreList from "./store-list"
import iconClock from "../images/icon-clock.svg"
import iconCart from "../images/icon-cart.svg"
import iconMarker from "../images/icon-map-marker.svg"

class CartSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formRef: createRef(),
            isOpened: false,
            cartTotal: Cart.priceTotal
        }

        this.forceUpdateHandler = function(){
            this.forceUpdate()
        };
    }

    forceUpdateHandler = () => {this.forceUpdate()}

    getCartTotal(){
        this.setState({
            cartTotal:Cart.priceTotal
        })
    }

    toggleCartView() {
        this.setState({
            isOpened: this.state.isOpened ? false : true
        })
    }

    // handlePriceClick = event => this.toggleCartView();
    handlePriceClick = event => window.location.href = "/checkout";
    handleSubmit = event => {
        event.preventDefault()
        Cart.updateCart();
        this.getTotal();
    };

    // SET CART PICKUP TIME TO NEW TIME
    handleTimeChange = event => {
        Cart.pickUpTime = event.target.value;
    };

    render(){
        return(
            <form className="app-cart" ref={this.state.formRef} onSubmit={this.handleSubmit}>
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
                            <select onChange={this.handleTimeChange}>
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
    
                        <div className="cart-selector" onClick={this.handlePriceClick} style={{float: `right`}}> 
                            <img src={iconCart} alt="Icon Cart" />
                            <span>${parseFloat(this.state.cartTotal).toFixed(2)}</span>
                        </div>
    
                    </div>     
                </div>
    
                {this.state.isOpened && (
                    <CartView handleClose={this.handlePriceClick} />
                )}
            </form>
        )
    }
}

CartSection.propTypes = {
    total: PropTypes.string,
};
  
CartSection.defaultProps = {
    total: parseFloat('0.00').toFixed(2),
};

export default CartSection;