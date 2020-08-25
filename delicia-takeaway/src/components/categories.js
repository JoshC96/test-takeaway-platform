import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"


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
      <Link to="/">
        Select a Location
      </Link>
    </div>
  )
}

export default Categories
