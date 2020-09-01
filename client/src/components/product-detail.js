import React from "react";
import SEO from "../components/seo"


const ProductDetail = (props) => {

    console.log(props.entry);

    return(
        <>
            <SEO title={props.entry.title} />

            <h1>{props.entry.title}</h1>
            <h3>${props.entry.price}</h3>


            <img src={props.entry.imageUrl} alt={props.entry.title} />

            <p>{props.entry.description}</p>

            <button> Add to cart </button>
        </>
    )
}
  
export default ProductDetail
