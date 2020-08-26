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

  </Layout>
)

export default IndexPage
