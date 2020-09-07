import React, { useState, useEffect } from "react";
import SEO from "../components/seo"
import cartFunc from "../functions/cart-functions"
import Cart from "./cart"

import ExtrasList from "./extras-list"

class ProductDetail extends React.Component{

    constructor(props){
        super(props)
        this.props = props;
    }

    state = {
        buttonText: 'Add to Cart'
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        let productToAdd = {
            quantity: 1,
            totalPrice: 0.0, //initialized as 0
            modifiers: [],
            data: this.props.entry
        }   

        // GET PRODUCT DATA FROM THE FORM AND CREATE A PRODUCT OBJECT
        Object.entries(event.target).map(element => {
            if(element[1].checked)
            {
                productToAdd.modifiers.push({
                    name: element[1].id,
                    price: element[1].dataset.price
                })
            }
            else if(element[1].nodeName === "SELECT")
            {
                let e = element[1]; // SET TEMP CURRENT SELECT ELEMENT
                productToAdd.modifiers.push({
                    name: e.value,
                    price: e.options[e.selectedIndex].dataset.price
                })
            } 
        });

        // ADD PRODUCT ITEM TO Cart.itemsInCart
        Cart.addToCart(productToAdd);
        cartFunc.addToCart(this.props.entry.id);
    }

    buttonClick = () => {
        this.setState({
            buttonText: 'Added!'
        });
    }

    // VARIATIONS ARRAY - THINGS LIKE SMALL/REGULAR/LARGE SIZES
    variationArray = typeof this.props.entry.addOns === "undefined" ? [] : this.props.entry.addOns;

    variationsList = this.variationArray.map((productVariationObj,index) => {
        return (
            <div className="product-addon" key={index}>
                <label htmlFor={"product-list-"+index}>{productVariationObj.addOnName}</label>
                <select id={"product-list-"+index} className="product-variation-select">
                    {Object.entries(productVariationObj.variations).map(([key,value],objIndex)=>{
                        return(
                            <option value={value.variationName} data-price={value.variationPrice} key={objIndex}>
                                {value.variationName} : ${value.variationPrice}
                            </option>
                        )
                    })}
                </select>
            </div>
        );
    })  

    
    render() {
        return (
            <>
                <SEO title={this.props.entry.title} />

                <h1>{this.props.entry.title}</h1>
                <h3>${this.props.entry.price}</h3>


                <img src={this.props.entry.imageUrl} alt={this.props.entry.title} />

                <p>{this.props.entry.description}</p>

                <form onSubmit={this.handleSubmit}>

                    {this.variationsList.length ? (
                        <>
                            <h3>Options</h3>
                            {this.variationsList}
                        </>
                        ) : (
                        <>
                            {/* ERROR LOG HERE */}
                        </>
                    )}

                
                    <ExtrasList />
                

                    <button type="submit" onClick={this.buttonClick}>{this.state.buttonText}</button>
                </form>
            </>
        )
    }
}
  
export default ProductDetail
