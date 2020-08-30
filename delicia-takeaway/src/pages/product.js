import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const ProductPage = ({ pageContext }) => {

  const { item } = pageContext;

  if(typeof item !== "undefined"){
    return(
      <Layout>
        <SEO title={item.title} />
      
        <h1>{item.title}</h1>
        <h3>${item.price}</h3>


        <Image src={item} alt={item.title} />

        <p>{item.description}</p>

        <button> Add to cart </button>
        
    
      </Layout>
    )
  }
  return null

}

export default ProductPage
