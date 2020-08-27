import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Categories from "../components/categories"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <Categories />

    <div className="footer-image-wrap">
      <img src="/images/planet-over-profit.png" alt="Planet Over Profit - People over Numbers" className="main-footer-logo"/>
    </div>

  </Layout>
)

export default IndexPage
