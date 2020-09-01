// MODULES
import React from 'react';

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Categories from "../components/categories"

// IMAGE
import planetImage from '../images/planet-over-profit.png';

function HomePage() {
    return (
        <Layout>
            <SEO title="Home" />
            <Hero />

            <Categories />

            <div className="footer-image-wrap">
                <img src={planetImage} alt="Planet Over Profit - People over Numbers" className="main-footer-logo"/>
            </div>

        </Layout>
    )
}

export default HomePage;