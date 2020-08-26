import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Category from "./category"


const Categories = () => {

  const categoriesQuery = graphql`
    {
      craftAPI {
        category(group: "menu", limit: 10) {
          ... on CraftAPI_menu_Category {
            title
            slug
            description
            image {
              ... on CraftAPI_assets_Asset {
                url
              }
            }
          }
        }
      }
    }
    `

    const {craftAPI: {entries}} = useStaticQuery(categoriesQuery);

    console.table(entries);

    

  return (
    <div className="category-listing-wrap"> 
      
      <Category />
      <Category />
      <Category />
      <Category />

    </div>
  )
}


export default Categories
