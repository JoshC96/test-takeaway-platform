import React, {setState, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import API from "../routes/api";
import Cart from "./cart"

class StoreList extends React.Component{
    

    constructor(props){
        super(props)
        this.props = props;
    }

    state = {
        stores: []
    }

    componentWillMount(){
        API.storesByState(Cart.stateLocation)
            .then(res => {
                this.setState({
                    stores: res.data
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleLocationChange = (event) => {
        Cart.location = event.target.value.split(",")[0];
        Cart.locationId = event.target.value.split(",")[1];
        Cart.updateCart();
        window.location.reload(false);
    };
    
    
    render() {
        return (
            <>
            {this.state.stores.length ? (
                <select onChange={this.handleLocationChange}>
                    {this.state.stores.map((storeObj,index) => {

                        let defaultValue=storeObj.id === parseInt(Cart.locationId) ? true : false;

                        return (
                            <option selected={defaultValue} value={storeObj.name+","+storeObj.id} key={index}>{storeObj.name}</option>
                        );

                    })}
                </select>
            ) : (
                <>
                    
                </>
            )}
            </>
        )
    }
}
  
export default StoreList
