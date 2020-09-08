import React from "react"

import iconPlus from '../images/icon-plus.svg';
import hero from '../images/main-hero.jpg';
import cartFunc from "../functions/cart-functions"
import Cart from "./cart"

const ProductItem = (key) => {

  // PREPEND SLASH TO AVOID RELATIVE LINKS AND URI 
  // THAT LOOKS LIKE '/categories/acai-bowls/products/summer-dreaming/'
  const productLink = "/" + key.props.uri;

  let imageUrl = key.props.imageUrl !== "" ? key.props.imageUrl : hero;

  const addToCart = () =>{
    Cart.addToCart({
      quantity: 1,
      totalPrice: key.props.price,
      modifiers: [],
      data: key.props
    })
  }

  return(
    <div className="grid-item-wrap">
      <div className="product-item">
        <div className="grid-item-image">
          <a href={productLink} className="thumb-link" aria-label={key.props.title}></a>
          <img src={imageUrl} alt={key.props.title} />
        </div>
        <div className="product-details">
          <h3>
            {key.props.title}
          </h3>
          <p>
            {key.props.description}
          </p>

          <div className="product-price">
            <span>
              ${key.props.price}
            </span>
            <button className="cart-add" onClick={addToCart}>
              <img src={iconPlus} alt="Add to cart" />
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}


export default ProductItem