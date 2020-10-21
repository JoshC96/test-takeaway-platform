import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"


const CategoryPage = ({ pageContext }) => {

    
  const { item } = pageContext;

  return(
    <Layout>
      <SEO title="Category" />
  
      <Products relatedTo={item} />
  
    </Layout>
  )

}

export default CategoryPage
