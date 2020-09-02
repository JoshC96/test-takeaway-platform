import React from "react"

const CategoryItem = (key) => {

  return(
    <div className="grid-item-wrap">
      <div
        className="category-item"
        style={{ 
          'backgroundImage': "url('"+key.props.imageUrl+"')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
