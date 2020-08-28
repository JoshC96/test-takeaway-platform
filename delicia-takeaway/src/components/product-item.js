import React from "react"
const path = require('path')

const ProductItem = (key) => {

  console.log(path.resolve(key.props.uri));

  // PREPEND SLASH TO AVOID RELATIVE LINKS AND URI THAT LOOKS LIKE '/categories/acai-bowls/products/summer-dreaming/'
  const productLink = "/" + key.props.uri;

  return(
    <div className="grid-item-wrap">
      <div className="product-item">
        <div className="grid-item-image">
          <a href={productLink} className="thumb-link"></a>
          <img src="/images/main-hero.jpg" alt={key.props.title} />
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
            <button className="cart-add">
              <img src="/images/icon-plus.svg" alt="Add to cart" />
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}


export default ProductItem
