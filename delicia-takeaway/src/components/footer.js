import React from "react"


const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-text-wrap">
        <p>Copyright &copy; Delicia Acai &amp; Protein Bar ®</p>
        <p>
        <a
            href="https://www.facebook.com/deliciahq/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: `none`,
            }}
          >
            <img src="/images/facebook-f.svg" alt="Facebook Icon" className="main-footer-icon"/>
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
