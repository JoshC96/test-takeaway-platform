import React from "react"
import CategoryItem from "./category-item"


const Categories = () => {

  // const {craftAPI: {entries}} = useStaticQuery(categoriesQuery);
  const entries = [
    {
      id: 1,
      title: "coffee",
      uri: "category/coffee"
    },
  ]

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
