import { Link } from "gatsby"
import React from "react"


const Category = (title) => (
  <div
    className="category-item"
    style={{ 
      'background-image': "url('/images/main-hero.jpg')"
    }}
  >
      <Link
        to=""
        className="thumb-link"
      >
      </Link>
      <h3>
        Category name
      </h3>
  </div>
)

export default Category
