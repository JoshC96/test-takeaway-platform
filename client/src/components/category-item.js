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
        <a
          href={key.props.uri}
          className="thumb-link"
        >
        </a>
        <h3>
          {key.props.title}
        </h3>
    </div>
  </div>
  )
}


export default CategoryItem
