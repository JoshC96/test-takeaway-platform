import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import ProductItem from "./product-item"


const Products = (data) => {

  const productsQuery = graphql`
    {
      craftAPI  {
        entries {
          ... on CraftAPI_products_products_Entry {
            id
            title
            uri
            description
            price
            image {
              ... on CraftAPI_assets_Asset {
                id
                url
              }
            }
            menuCategory {
              id
              title
            }
          }
        }
      }
    }
    `

  const {craftAPI: {entries}} = useStaticQuery(productsQuery);

  return (
    <div className="product-listing-wrap"> 
      {entries
        .filter(entry => (typeof entry.menuCategory !== "undefined"))
        .filter(entry => (typeof entry.menuCategory[0] !== "undefined"))
        .map(entry => {
          if(typeof data.relatedTo !== "undefined"){
            if(entry.menuCategory[0].id === data.relatedTo.id){
              return (
                <ProductItem
                  props={entry}
                />
              )
            }
            return null;
          }
          return null;
      })}


    </div>
  )
}


export default Products
