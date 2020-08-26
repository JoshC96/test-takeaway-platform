import { Link } from "gatsby"
import React from "react"


const Footer = () => (
  <footer className="footer">
    <div className="footer-image-wrap">
      <img src="/images/planet-over-profit.png" alt="Planet Over Profit - People over Numbers" className="main-footer-logo"/>
    </div>
    <div className="footer-text-wrap">
      <p>Copyright &copy; Delicia Acai &amp; Protein Bar ®</p>
      <p>
      <Link
          to="https://www.facebook.com/deliciahq/"
          target="_blank"
          style={{
            textDecoration: `none`,
          }}
        >
          <img src="/images/facebook-f.svg" alt="Facebook Icon" className="main-footer-icon"/>
        </Link>
      </p>
    </div>
  </footer>
)

export default Footer
