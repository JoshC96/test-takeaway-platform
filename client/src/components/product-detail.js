import React from "react";
import SEO from "../components/seo"
import cartFunc from "../functions/cart-functions"

const ProductDetail = (props) => {

    const addToCart = () =>{
        cartFunc.addToCart(props.entry.id);
    }

    return(
        <>
            <SEO title={props.entry.title} />

            <h1>{props.entry.title}</h1>
            <h3>${props.entry.price}</h3>


            <img src={props.entry.imageUrl} alt={props.entry.title} />

            <p>{props.entry.description}</p>

            <button onClick={addToCart}> Add to cart </button>
        </>
    )
}
  
export default ProductDetail
