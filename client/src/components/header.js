import React from "react"
import headerImage from '../images/Delicia-Logo.png'

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
        <a
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={headerImage} alt="Delicia Logo" className="main-header-logo"/>

        </a>
      </h1>
    </div>
  </header>
)

export default Header
