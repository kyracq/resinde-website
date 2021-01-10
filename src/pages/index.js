import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/hero"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HeroSection goTo="#about-us" />
    <section id="about-us">
      <h1>About Us!</h1>
    </section>
  </div>
)

export default IndexPage
