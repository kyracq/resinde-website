// Only difference between this file and work.js is
// filter: { frontmatter: { type: { eq: "Project"} } }

import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"

import StyledLink from "../../components/styled-link"
import SEO from "../../components/seo"
import Item from "../../components/item"

const PageContainer = tw.div`
  space-y-10 mobile:px-8 xl:px-14 px-20 pt-16
`

const Filters = tw.div`
  flex flex-row space-x-8 font-bold
`

const Projects = tw.div`
  grid grid-cols-2 mobile:grid-cols-1 gap-x-6 gap-y-6
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
    <h1>Our Work</h1>
    <Filters>
    <StyledLink to="/work" magenta="true">All</StyledLink>
      <StyledLink to="/work/projects" purple="true">Projects</StyledLink>
      <StyledLink to="/work/case-studies" blue="true">Case Studies</StyledLink>
    </Filters>
    <Projects>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <Item
          key={node.id}
          link={node.fields.slug}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          src={node.frontmatter.featureImage.publicURL}
          altText={node.frontmatter.featureImageAlt}
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
            featureImage {
              publicURL
            }
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