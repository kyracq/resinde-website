// Please cascade any changes to this file to projects.js and case-studies.js

import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"

import StyledLink from "../components/styled-link"
import SEO from "../components/seo"
import Item from "../components/item"

const PageContainer = tw.div`
  space-y-10 mobile:px-8 px-48 pt-16 mt-32
`

const Filters = tw.div`
  flex flex-row space-x-8 font-bold hidden
`

const Projects = tw.div`
  grid grid-cols-2 mobile:grid-cols-1 gap-x-8 gap-y-6
`

const isPurple = type => {
  if (type === "Project") return "true"
}

const isBlue = type => {
  if (type === "Case Study") return "true"
}

const WorkPage = ({ data }) => (
  <PageContainer>
    <SEO title="Work" />
    <h1>Our Work</h1>
    <Filters>
      <StyledLink to="/work" magenta="true">
        All
      </StyledLink>
      <StyledLink to="/work/projects" purple="true">
        Projects
      </StyledLink>
      <StyledLink to="/work/case-studies" blue="true">
        Case Studies
      </StyledLink>
    </Filters>
    <Projects>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.featureImage) {
          return (
            <Item
              key={node.id}
              link={node.fields.slug}
              title={node.frontmatter.title}
              subtitle={node.excerpt}
              src={node.frontmatter.featureImage.childImageSharp.fixed}
              altText={node.frontmatter.featureImageAlt}
              purple={isPurple(node.frontmatter.type)}
              blue={isBlue(node.frontmatter.type)}
              height="500px"
            />
          )
        }
        return null
      })}
    </Projects>
  </PageContainer>
)

export default WorkPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
            featureImage {
              childImageSharp {
                fixed(height: 500) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            featureImageAlt
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
