import React from "react"
import tw, { styled } from "twin.macro"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Img from "gatsby-image/withIEPolyfill"

const StyledHeaderDiv = tw.div`
  mt-16 space-y-4
`

const Heading = tw.h1`
  leading-none mobile:text-5xl
`

const PageContainer = styled.div`
  ${tw`flex flex-col space-y-10 mobile:px-8 px-48 mt-36 mobile:mt-6`}
`

const Days = tw.div`
  flex flex-row leading-loose xl:flex-col xl:space-y-3
`

const Day = props => {
  return (
    <div style={{ width: "100%" }}>
      <h4 style={{ "text-transform": "uppercase", color: "#f02e65" }}>
        {props.date}
      </h4>
      {props.children}
    </div>
  )
}

const ScheduleSection = () => {
  return (
    <div>
      <h2>Schedule</h2>
      <Days>
        <Day date="Saturday, March 13 (ET)">
          <ul>
            <li>10:00 AM - Coming Soon</li>
            <li>11:30 AM - Coming Soon</li>
            <li>2:00 PM - Coming Soon</li>
            <li>3:30 PM - Coming Soon</li>
          </ul>
        </Day>
        <Day date="Sunday, March 14 (ET)">
          <ul>
            <li>10:00 AM - Coming Soon</li>
            <li>11:30 AM - Coming Soon</li>
            <li>2:00 PM - Coming Soon</li>
            <li>3:30 PM - Coming Soon</li>
          </ul>
        </Day>
      </Days>
    </div>
  )
}

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-magenta rounded-full text-magenta py-2 px-8 uppercase
  hover:bg-magenta hover:text-white transition text-left`}
  font-size: 18px;
`

const Speakers = styled.div`
  ${tw`grid grid-cols-3 sm:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-8 self-center`}
`

const ConferencePage = ({ data }) => (
  <PageContainer>
    <SEO title="IDEA Conference" />
    <img src={data.ideaBanner.publicURL} alt="Shapes spelling out idea." />
    <StyledHeaderDiv>
      <Heading>IDEA Conference</Heading>
      <p>
        A conference on inclusion, diversity, equity, and accessibility (or IDEA
        for short!) from March 13 – 14, 2021 including speakers from Google,
        IDEO, and more! Speakers will be talking about creating inclusive and
        accessible products and processes. Stay tuned as we add the full
        schedule here and introduce all the speakers on our Instagram!{" "}
        <b>
          Open to students everywhere (register with your .edu email) and
          Princteon affiliates (faculty, alumni, etc.).
        </b>
      </p>
      <br />
      <StyledButton to="https://www.eventbrite.com/e/2021-idea-conference-tickets-143488218123?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing">
        Register
      </StyledButton>
    </StyledHeaderDiv>
    <div>
      <h2>Schedule</h2>
      <p>Coming Soon!</p>
    </div>
    <div>
      <h2>Speakers</h2>
      <p>Stay tuned for more speakers!</p>
      <br />
      <Speakers>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Img
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              alt={node.frontmatter.featuredImageAlt}
              objectFit="contain"
              objectPosition="center"
            />
          )
        })}
      </Speakers>
    </div>
    <div>
      <h2>Partners</h2>
      <p>Coming Soon!</p>
    </div>
  </PageContainer>
)

export default ConferencePage

export const query = graphql`
  query {
    ideaBanner: file(relativePath: { eq: "idea-banner.svg" }) {
      publicURL
    }
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
