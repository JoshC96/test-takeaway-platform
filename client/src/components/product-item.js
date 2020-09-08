import React from "react"

import iconPlus from '../images/icon-plus.svg';
import hero from '../images/main-hero.jpg';
import cartFunc from "../functions/cart-functions"
import Cart from "./cart"

class ProductItem extends React.Component{

    constructor(props){
        super(props)
        this.productLink = "/" + props.item.uri // PREPEND SLASH TO AVOID RELATIVE LINKS AND URI 
        this.imageUrl = props.item.imageUrl !== "" ? props.item.imageUrl : hero;
        this.title = props.item.title;
        this.description = props.item.description;
        this.price = props.item.price;
        this.item = props.item;

        this.state = {
            buttonText: 'Add to Cart'
        }
    }

    addToCart = (event) =>{
      event.preventDefault();

      this.setState({
          buttonText: 'Added!'
      });
      
      // ARGS ARE QUANTITY - ENTRY DATA - MODIFIERS
      Cart.addToCart(1, this.item, []);
    }

    render(){
      return(
        <div className="grid-item-wrap">
          <div className="product-item">
            <div className="grid-item-image">
              <a href={this.productLink} className="thumb-link" aria-label={this.title}></a>
              <img src={this.imageUrl} alt={this.title} />
            </div>
            <div className="product-details">
              <h3>
                {this.title}
              </h3>
              <p>
                {this.description}
              </p>
    
              <div className="product-price">
                <span>
                  ${this.price}
                </span>
                <button className="cart-add" onClick={this.addToCart}>
                  {this.state.buttonText}
                  {/* <img src={iconPlus} alt="Add to cart" /> */}
                </button>
    
              </div>
            </div>
    
          </div>
        </div>
      )
    }
  
}


export default ProductItem