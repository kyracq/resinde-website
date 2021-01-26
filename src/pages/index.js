import React from "react"

import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import TeamSection from "../components/team-section"
import ContactSection from "../components/contact-section"
import SEO from "../components/seo"
import HeroSection from "../components/hero"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HeroSection />
  </div>
)

export default IndexPage
