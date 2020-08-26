import { Link } from "gatsby"
import React from "react"

const Category = (key) => {

  console.log(key.props);

  return(
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
  )
}


export default Category
