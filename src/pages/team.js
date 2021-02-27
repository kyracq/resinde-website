import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Item from "../components/item"

const StyledHeaderDiv = tw.div`
  mt-16 space-y-4
`

const Heading = tw.h1`
  leading-none
`

const PageContainer = styled.div`
  ${tw`flex flex-col space-y-14 mobile:px-8 px-48 mt-36 mobile:mt-6`}
`

const People = styled.div`
  ${tw`grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-x-8 self-center`}
`

const TeamPage = ({ data }) => (
  <PageContainer>
    <SEO title="Our Team" />
    <StyledHeaderDiv>
      <Heading>Meet The Team</Heading>
    </StyledHeaderDiv>
    <People>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Item
          key={node.id}
          title={node.frontmatter.name}
          subtitle={node.frontmatter.role}
          src={node.frontmatter.photo ? node.frontmatter.photo.childImageSharp.fixed : "na"}
          altText={node.frontmatter.photoAlt}
          blue="true"
          height="600px"
        />
      ))}
    </People>
  </PageContainer>
)

export default TeamPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: fileAbsolutePath, order: ASC }
      filter: { fileAbsolutePath: { regex: "/(members)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            role
            photo {
              childImageSharp {
                fixed(height: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            photoAlt
          }
        }
      }
    }
  }
`
