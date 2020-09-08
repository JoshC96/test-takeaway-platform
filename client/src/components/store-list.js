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
        Cart.location = event.target.value;
    };
    
    
    render() {
        return (
            <>
            {this.state.stores.length ? (
                <select onChange={this.handleLocationChange}>
                    {this.state.stores.map((storeObj,index) => {
                        return (
                            <option value={storeObj.name} key={index}>{storeObj.name}</option>
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
