import React, { useState, useEffect } from "react";
import API from "../routes/api";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"


const CategoryPage = () => {

    const [categoryProducts, setProducts] = useState([]);
    const categoryUri = window.location.pathname;
    let categoryId = categoryUri.substring(categoryUri.lastIndexOf('/') + 1);

    useEffect(() => {
        loadCategory()
    }, [])

    function loadCategory(){
        API.productsByCategory(categoryId)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    };

    return(
        <Layout>
            <SEO title="Category" />
            <Products products={categoryProducts} />
        </Layout>
    )

}

export default CategoryPage
