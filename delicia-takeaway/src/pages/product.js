import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductPage = ({ pageContext }) => {

  const { item } = pageContext;
  return(
    <Layout>
      <SEO title="Product" />
    
      <h1>{item.title}</h1>
  
    </Layout>
  )

}

export default ProductPage
