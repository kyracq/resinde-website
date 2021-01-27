import React from "react"
import tw, { styled } from "twin.macro"

import SEO from "../components/seo"
import Item from "../components/item"

const StyledHeaderDiv = tw.div`
  mt-16
`

const PageContainer = styled.div`
  ${tw`flex flex-col space-y-14`}
  margin-left: 8.75%;
  margin-right: 8.75%;
`

const People = styled.div`
  ${tw`grid grid-cols-3 gap-x-6`}
`

const fillerTitle = "Team member"
const fillerName = "First Last '00"


const TeamPage = () => (
  <PageContainer>
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
    <People>
      <Item title={fillerName} excerpt={fillerTitle}></Item>
      <Item title={fillerName} excerpt={fillerTitle}></Item>
      <Item title={fillerName} excerpt={fillerTitle}></Item>
      <Item title={fillerName} excerpt={fillerTitle}></Item>
      <Item title={fillerName} excerpt={fillerTitle}></Item>
      <Item title={fillerName} excerpt={fillerTitle}></Item>
    </People>
  </PageContainer>
)

export default TeamPage