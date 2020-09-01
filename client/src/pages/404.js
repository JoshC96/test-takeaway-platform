// MODULES
import React from 'react';

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFound() {
    return (
        <Layout>
            <SEO title="Not found" />
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h1>Page not found</h1>
            </div>
        </Layout>
    )
}

export default NotFound;