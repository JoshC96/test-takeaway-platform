import React, { useRef } from "react";
import { useCartContext } from "../../server/cart-state";

  const CartItem = (details) => {

  const inputRef = useRef();
  const [_, dispatch] = useCartContext();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

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
          
          <div className="cart-remove">
            <input type="text" ref={inputRef} defaultValue={details.props.id} onClick={handleClick} />
            <img src="/images/icon-plus.svg" alt="Remove from cart" />
          </div>

        </div>

      </div>

    </div>
  )
}


export default CartItem
