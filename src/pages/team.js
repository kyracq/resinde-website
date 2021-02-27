import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Item from "../components/item"
import StyledLink from "../components/styled-link"
import { Padding } from "../components/padding"

const StyledHeaderDiv = tw.div`
  mt-16 space-y-4
`

const Heading = tw.h1`
  leading-none
`

const PageContainer = styled(Padding)`
  ${tw`flex flex-col space-y-14 mt-36 mobile:mt-6`}
`

const People = styled.div`
  ${tw`grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-x-8 self-center`}
`

const NoPhotoMember = styled.div`
  ${tw`mb-8`}
`

const TeamPage = ({ data }) => {
  let noPhotoMembers = []
  return (
    <PageContainer>
      <SEO title="Our Team" />
      <StyledHeaderDiv>
        <Heading>Meet The Team</Heading>
      </StyledHeaderDiv>
      <People>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.featuredImage) {
            return (
              <Item
                key={node.id}
                title={node.frontmatter.name}
                subtitle={node.frontmatter.role}
                src={node.frontmatter.featuredImage?.childImageSharp.fixed}
                altText={node.frontmatter.photoAlt}
                blue="true"
                height="600px"
              />
            )
          } else {
            noPhotoMembers = [
              ...noPhotoMembers,
              { name: node.frontmatter.name, role: node.frontmatter.role },
            ]
            return null
          }
        })}
        <div>
          {noPhotoMembers.map(member => {
            return (
              <NoPhotoMember>
                <h3>
                  <StyledLink blue={true}>{member.name}</StyledLink>
                </h3>
                <p>{member.role}</p>
              </NoPhotoMember>
            )
          })}
        </div>
      </People>
    </PageContainer>
  )
}

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
            featuredImage {
              childImageSharp {
                fixed(height: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
