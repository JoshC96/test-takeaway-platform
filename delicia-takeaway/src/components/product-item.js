import { Link } from "gatsby"
import React from "react"

const ProductItem = (key) => {

  return(
    <div className="grid-item-wrap">
      <div className="product-item">
        <div className="grid-item-image">
          <Link to={key.props.uri} className="thumb-link" ></Link>
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
