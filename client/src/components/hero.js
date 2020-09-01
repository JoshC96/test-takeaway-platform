import React from "react"
import heroImage from '../images/main-hero.jpg'

const Hero = () => (
  <div
    className="hero-standard"
    style={{ 
      'backgroundImage': "url("+heroImage+")"
    }}
  >
      <h2 style={{ margin: 0 }}>
        <a
          href="/acai-bowls"
        >
          Delicia Acai Bowls
        </a>
      </h2>
  </div>
)

export default Hero
