// MODULES
import React from 'react';

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"

function OrderConfirmed() {
    return (
        <Layout>
            <SEO title="Thank you" />
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h1>Order Confirmed - Thank you! </h1>
                Thank you for your purchase, your receipt is below:
                {/* <Receipt /> */}
            </div>
        </Layout>
    )
}

export default OrderConfirmed;