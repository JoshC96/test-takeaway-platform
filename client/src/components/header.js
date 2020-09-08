import React from "react"
import headerImage from '../images/Delicia-Logo.png'
import StateList from "./state-list"

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
        <a href="/" style={{color: `white`, textDecoration: `none`,}}>
          <img src={headerImage} alt="Delicia Logo" className="main-header-logo"/>
        </a>
    </div>
    <StateList />
  </header>
)

export default Header
