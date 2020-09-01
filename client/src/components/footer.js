import React from "react"
import facebookIcon from '../images/facebook-f.svg'

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-text-wrap">
        <p>Copyright &copy; Delicia Acai &amp; Protein Bar ®</p>
        <p>
        <a
            href="https://www.facebook.com/deliciahq/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: `none`,
            }}
          >
            <img src={facebookIcon} alt="Facebook Icon" className="main-footer-icon"/>
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
