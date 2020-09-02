import React from "react"

import ProductItem from "./product-item"


const Products = (data) => {

  const entries = data.products;

  return (
    <div className="product-listing-wrap"> 

      {entries.length ? (
        <>
          {entries.map((entry, index) => {
            return (
                <ProductItem
                    key={index}
                    props={entry}
                />
            )
          })}
        </>
      ) : (
          <>
            {/* ERROR LOG HERE */}
          </>
      )}
      
    </div>
  )
}


export default Products