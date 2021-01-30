import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Item from "../components/item"

const StyledHeaderDiv = tw.div`
  mt-16
`

const PageContainer = tw.div`
  space-y-14 mobile:px-8 xl:px-14 px-20 
`

const People = tw.div`
  grid grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-x-6
`

const TeamPage = ({data}) => (
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
    {data.allMarkdownRemark.edges.map(({node}) => (
      <Item
        key={node.id}
        title={node.frontmatter.name}
        subtitle={node.frontmatter.role}
        src={node.frontmatter.photo ? node.frontmatter.photo.publicURL : ""}
        altText={node.frontmatter.photoAlt}
        blue="true"
      />
    ))}
    </People>
  </PageContainer>
)

export default TeamPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: fileAbsolutePath, order: ASC},
      filter: {fileAbsolutePath: {regex: "/(members)/"  }}) {
      edges {
        node {
          id
          frontmatter {
            name
            role
            photo {
              publicURL
            }
            photoAlt
          }
        }
      }
    }
  }
`