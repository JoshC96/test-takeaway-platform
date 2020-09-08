import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "../index.css";
import '../App.css';
import CartSection from "./cart-section";
import Cart from "./cart"


const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          position: `relative`
        }}
      >
        <main>{children}</main>
      </div>
      <CartSection />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
