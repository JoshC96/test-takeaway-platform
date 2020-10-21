import { Link } from "gatsby"
import React from "react"


const Hero = () => (
  <div
    className="hero-standard"
    style={{ 
      'backgroundImage': "url('/images/main-hero.jpg')"
    }}
  >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          Delicia Acai Bowls
        </Link>
      </h2>
  </div>
)

export default Hero
