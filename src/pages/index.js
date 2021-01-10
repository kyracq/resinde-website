import React from "react"

import AboutSection from "../components/about-section"
import SEO from "../components/seo"
import HeroSection from "../components/hero"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HeroSection goTo="#about-us" />
    <AboutSection id="about-us" />
  </div>
)

export default IndexPage
