import { Link } from "gatsby"
import React from "react"


const Category = (props) => (
  <div
    className="category"
    style={{ 
      'background-image': "url('/images/main-hero.jpg')"
    }}
  >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {props}
        </Link>
      </h2>
  </div>
)

export default Category
