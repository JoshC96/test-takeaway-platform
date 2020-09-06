import React from "react";
import SEO from "../components/seo"
import cartFunc from "../functions/cart-functions"
import Cart from "./cart"

const ProductDetail = (props) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        cartFunc.addToCart(props.entry.id);
    }

    let addonsArray = typeof props.entry.addOns === "undefined" ? [] : props.entry.addOns;

    const addonList = addonsArray.map((productAddOnsObj) => {
        return (
            <div className="product-addon">
                <p>{productAddOnsObj.addOnName}</p>
                {Object.entries(productAddOnsObj.variations).map(([key,value])=>{
                    return(
                        <>
                            <label htmlFor={key}>
                                {value.variationName} : ${value.variationPrice}
                                <input type="checkbox" id={key} />
                            </label>
                        </>
                    )
                })}
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

                <h4>Add ons</h4>
                {addonList}


                <input type="submit" value="Add to cart" />
            </form>
        </>
    )
}
  
export default ProductDetail
