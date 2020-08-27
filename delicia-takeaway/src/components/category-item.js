import { Link } from "gatsby"
import React from "react"

const CategoryItem = (key) => {

  return(
    <div className="grid-item-wrap">
      <div
        className="category-item"
        style={{ 
          'backgroundImage': "url('/images/main-hero.jpg')"
        }}
      >
        <Link
          to={key.props.uri}
          className="thumb-link"
        >
        </Link>
        <h3>
          {key.props.title}
        </h3>
    </div>
  </div>
  )
}


export default CategoryItem
