import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import CategoryItem from "./category-item"


const Categories = () => {

  const categoriesQuery = graphql`
    {
      craftAPI  {
        entries {
          ... on CraftAPI_categories_categories_Entry {
            id
            title
            uri
            description
            image {
              ... on CraftAPI_assets_Asset {
                id
                url
              }
            }
          }
        }
      }
    }
    `

  const {craftAPI: {entries}} = useStaticQuery(categoriesQuery);

  return (
    <div className="category-listing-wrap"> 
      {entries.map((entry, index) => {
        if(entry.id !== "" && typeof entry.id !== "undefined"){
          return (
            <CategoryItem
              key={index}
              props={entry}
            />
         )}
        return null
      })}


    </div>
  )
}


export default Categories
