import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductPage = ({ pageContext }) => {

  const { item } = pageContext;

  console.log(item.image[0].url);

  if(typeof item !== "undefined"){
    return(
      <Layout>
        <SEO title={item.title} />
      
        <h1>{item.title}</h1>
        <h3>${item.price}</h3>

        <img src={item.image[0].url} alt={item.title}></img>

        <p>{item.description}</p>

        <button> Add to cart </button>
        
    
      </Layout>
    )
  }
  return null

}

export default ProductPage
