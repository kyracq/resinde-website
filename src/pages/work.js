import React from "react"
import tw, { styled } from "twin.macro"
import StyledLink from "../components/styled-link"
import { graphql } from "gatsby"

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

const isPurple = (type) => {
  if (type === "Project") return "true";
}

const isBlue = (type) => {
  if (type === 'Case Study') return "true";
}

const WorkPage = ({data}) => (
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
      {data.allMarkdownRemark.edges.map(({node}) => (
        <Item
          key={node.id}
          link={node.fields.slug}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          image=""
          purple={isPurple(node.frontmatter.type)}
          blue={isBlue(node.frontmatter.type)}
          />
      ))}
    </Projects>
  </PageContainer>
)

export default WorkPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "Project"} } }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`