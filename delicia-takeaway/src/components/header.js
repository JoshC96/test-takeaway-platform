import { Link } from "gatsby"
import React from "react"


const Header = () => (
  <header
    className="main-header"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src="/images/Delicia-Logo.png" alt="Delicia Logo" className="main-header-logo"/>

        </Link>
      </h1>
    </div>
  </header>
)

export default Header
