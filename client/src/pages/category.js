import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"


const CategoryPage = () => {

    // GET CATEGORY ENTRY FROM CRAFT API
    // SEND AS relatedTo TO PRODUCTS
    const item = {id: 1, title: 'coffee'}

    return(
        <Layout>
            <SEO title="Category" />
            <Products relatedTo={item} />
        </Layout>
    )

}

export default CategoryPage
