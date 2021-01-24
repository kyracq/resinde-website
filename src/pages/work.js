import React from "react"
import tw, { styled } from "twin.macro"
import StyledLink from "../components/styled-link"

import SEO from "../components/seo"
import Item from "../components/item"

const StyledHeaderDiv = tw.div`
  mt-16
`

const PageContainer = styled.div`
  ${tw`flex flex-col space-y-10`}
  margin-left: 8.75%;
  margin-right: 8.75%;
`

const Filters = styled.div`
  ${tw`flex flex-row space-x-8 font-bold`}
`

const Projects = styled.div`
  ${tw`grid grid-cols-2 gap-x-6 gap-y-6`}
`

const fillerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis libero ac luctus accumsan."

const WorkPage = () => (
  <PageContainer>
    <SEO title="Work" />
    <StyledHeaderDiv>
      <h1>Our Work</h1>
    </StyledHeaderDiv>
    <Filters>
      <StyledLink to="/work" magenta="true">All</StyledLink>
      <StyledLink to="/work" purple="true">Projects</StyledLink>
      <StyledLink to="/work" blue="true">Case Studies</StyledLink>
    </Filters>
    <Projects>
      <Item title="Project 1" copy={fillerText} image=""></Item>
      <Item title="Project 2" copy={fillerText} image=""></Item>
      <Item title="Project 3" copy={fillerText} image=""></Item>
      <Item title="Case Study 1" copy={fillerText} image=""></Item>
      <Item title="Case Study 2" copy={fillerText} image=""></Item>
    </Projects>
  </PageContainer>
)

export default WorkPage
