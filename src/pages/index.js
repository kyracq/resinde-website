import React from "react"

import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import TeamSection from "../components/team-section"
import ContactSection from "../components/contact-section"
import SEO from "../components/seo"
import HeroSection from "../components/hero"
import tw from "twin.macro"

const StyledDiv = tw.div`
  flex flex-col space-y-32 mobile:hidden
`

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HeroSection goTo="#about-us" />
    <StyledDiv>
      <div style={{ height: "48px" }} id="about-us"></div>
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
    </StyledDiv>
  </div>
)

export default IndexPage
