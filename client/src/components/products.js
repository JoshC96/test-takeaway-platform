import React from "react"

import ProductItem from "./product-item"


const Products = (data) => {

    // GET ALL PRODUCT ENTRIES RELATED TO CATEGORY FROM CRAFT API

    const entries = {
        title: "Tropic Thunder",
        price: 15.5,
        description: "Lovely tropical drink with pineapple",
        menuCategory: [{id:1, title:"coffee"}]
    }

  return (
    <div className="product-listing-wrap"> 
      {entries.map((entry, index) => {
        return (
            <ProductItem
                key={index}
                props={entry}
            />
        )
      })}
    </div>
  )
}


export default Products