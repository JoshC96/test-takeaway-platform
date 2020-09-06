import React, { useState, useEffect } from "react";
import SEO from "../components/seo"
import cartFunc from "../functions/cart-functions"
import Cart from "./cart"

import ExtrasList from "./extras-list"

const ProductDetail = (props) => {

    const handleSubmit = (event) =>{
        event.preventDefault();

        let productToAdd = {
            quantity: 1,
            totalPrice: 0.0, //initialized as 0
            modifiers: [],
            data: props.entry
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
        cartFunc.addToCart(props.entry.id);
    }

    // VARIATIONS ARRAY - THINGS LIKE SMALL/REGULAR/LARGE SIZES
    let variationArray = typeof props.entry.addOns === "undefined" ? [] : props.entry.addOns;

    const variationsList = variationArray.map((productVariationObj,index) => {
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

    

    return(
        <>
            <SEO title={props.entry.title} />

            <h1>{props.entry.title}</h1>
            <h3>${props.entry.price}</h3>


            <img src={props.entry.imageUrl} alt={props.entry.title} />

            <p>{props.entry.description}</p>

            <form onSubmit={handleSubmit}>

                {variationsList.length ? (
                    <>
                        <h3>Options</h3>
                        {variationsList}
                    </>
                    ) : (
                    <>
                        {/* ERROR LOG HERE */}
                    </>
                )}

            
                <ExtrasList />
            

                <button type="submit">Add to cart</button>
            </form>
        </>
    )
}
  
export default ProductDetail
