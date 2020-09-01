import React, { useState, useEffect } from "react";
import API from "../routes/api";

import Layout from "../components/layout"
import ProductDetail from "../components/product-detail"

const Product = () => {

  const [productEntry, setProduct] = useState([]);
  const productUri = window.location.pathname;
  let productId = productUri.substring(productUri.lastIndexOf('/') + 1);

  useEffect(() => {
      loadProduct()
  }, [])

  function loadProduct(){
      API.productsById(productId)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  };


    return(
      <Layout>
          {productEntry.length ? (
            <ProductDetail entry={productEntry[0]} />        
            ) : (
              <h3></h3>
          )}
      </Layout>
    )


}

export default Product