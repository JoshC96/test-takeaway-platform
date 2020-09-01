import React, { useState, useEffect } from "react";
import API from "../routes/api";
import CategoryItem from "./category-item"


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = () => {
    API.allCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="category-listing-wrap"> 
      {categories.map((entry, index) => {
        return (
          <CategoryItem
            key={index}
            props={entry}
          />
        )
      })}
    </div>
  )
}


export default Categories
