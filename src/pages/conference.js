import React from "react"
import tw, { styled } from "twin.macro"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Item from "../components/item"

const StyledHeaderDiv = tw.div`
  mt-16 space-y-4
`

const Heading = tw.h1`
  leading-none
`

const PageContainer = styled.div`
  ${tw`flex flex-col space-y-10 mobile:px-8 px-48 mt-36 mobile:mt-6`}
`

const Days = tw.div`
  flex flex-row leading-loose xl:flex-col xl:space-y-3
`

const Day = (props) => {
  return (
    <div style = {{ 'width': '100%' }}>
      <h4 style = {{ 'text-transform': 'uppercase', 'color': '#f02e65'}}>{props.date}</h4>
      {props.children}
    </div>
  )
}

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-magenta rounded-full text-magenta py-2 px-8 uppercase
  hover:bg-magenta hover:text-white transition text-left`}
  font-size: 18px;
`

const Speakers = styled.div`
  ${tw`grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 self-center`}
`

const TeamPage = ({ data }) => (
  <PageContainer>
    <SEO title="IDEA Conference" />
    <StyledHeaderDiv>
      <Heading>IDEA Conference</Heading>
      <p>A conference on inclusion, diversity, equity, and accessibility (or IDEA for short!) from March 13 – 14, 2021 including speakers from Google, IDEO, and more! Speakers will be talking about about creating inclusive and accessible products and processes. Stay tuned as we add the full schedule here and introduce all the speakers on our Instagram!</p>
      <br />
      <StyledButton to="/contact">Register</StyledButton>
    </StyledHeaderDiv>
    <div>
      <h2>Schedule</h2>
      <Days>
        <Day date='Saturday, March 13 (ET)'>
          <ul>
            <li>10:00 AM - Coming Soon</li>
            <li>11:30 AM - Coming Soon</li>
            <li>2:00 PM - Coming Soon</li>
            <li>3:30 PM - Coming Soon</li>
          </ul>
        </Day>
        <Day date='Sunday, March 14 (ET)'>
          <ul>
            <li>10:00 AM - Coming Soon</li>
            <li>11:30 AM - Coming Soon</li>
            <li>2:00 PM - Coming Soon</li>
            <li>3:30 PM - Coming Soon</li>
          </ul>
        </Day>
      </Days>
    </div>
    <div>
      <h2>Speakers</h2>
      <br />
      <Speakers>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item
            key={node.id}
            title={node.frontmatter.name}
            subtitle={node.frontmatter.role}
            src={node.frontmatter.photo ? node.frontmatter.photo.childImageSharp.fixed : "na"}
            altText={node.frontmatter.photoAlt}
            magenta="true"
            height="475px"
          />
        ))}
      </Speakers>
    </div>
  </PageContainer>
)

export default TeamPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: fileAbsolutePath, order: ASC }
      filter: { fileAbsolutePath: { regex: "/(speakers)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            role
            photo {
              childImageSharp {
                fixed(height: 475) {
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
