import React from "react"

const CartItem = (details) => {

  return(
    <div className="cart-item">
      <div className="cart-item-details">
        <h5>
          {details.props.title}
        </h5>

        <div className="cart-item-price">
          <span>
            x {details.props.quantity}
          </span>
          <span>
            ${details.props.price}
          </span>
          {/* <button className="cart-remove">
            <img src="/images/icon-plus.svg" alt="Remove from cart" />
          </button> */}

        </div>

      </div>

    </div>
  )
}


export default CartItem
