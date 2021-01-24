import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Item from "../components/item"

const PageContainer = styled.div`
  ${tw`flex flex-col space-y-10`}
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 2rem;
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
    <h1>Our Work</h1>
    <Filters>
      <Link>All</Link>
      <Link>Projects</Link>
      <Link>Case Studies</Link>
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
