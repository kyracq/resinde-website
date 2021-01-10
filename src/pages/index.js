import React from "react"

import AboutSection from "../components/about-section"
import SEO from "../components/seo"
import HeroSection from "../components/hero"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HeroSection goTo="#about-us" />
    <section id="about-us">
      <h1>About Us!</h1>
    </section>
    <AboutSection />
  </div>
)

export default IndexPage
