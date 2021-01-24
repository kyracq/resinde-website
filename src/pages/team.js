import React from "react"

import SEO from "../components/seo"
import tw, { styled } from "twin.macro"

const StyledHeaderDiv = tw.div`
  sm:px-32 mt-16 px-8
`

const TeamPage = () => (
  <div>
    <SEO title="Our Team" />
    <StyledHeaderDiv>
      <h1>Our Team</h1>
      <p>
        A group at Princeton University focused on Research, Innovation, and
        Design. As a team of designers and developers, our mission is to drive
        impactful user experience solutions through user research and digital
        implementation.
      </p>
    </StyledHeaderDiv>
  </div>
)

export default TeamPage
