import React from "react"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import justlogo from "../images/just-logo.svg"

const StyledHeaderDiv = styled.div`
  ${tw`mt-16`}
`

const PageContainer = tw.div`
  space-y-56 mobile:px-8 xl:px-14 px-20 
`

const Section = styled.div`
  ${tw`space-y-3`}
  height: ${props => props.height};
  text-align: ${props => props.align};
  color: white;
`
const FlexContainer = styled.div`
  ${tw`flex flex-row space-x-6 items-center`}
  ${props => {
      if (props.align === "right") return tw`justify-end`
      else return tw`justify-start`
    }}
`
const Card = styled.div`
  width: 100%;
  height: 300px;
  background-color: black;
  border-radius: 25px;
  text-align: center;
  padding-top: 130px;
`

const Service = (props) => (
  <Card>
    <h3>{props.name}</h3>
  </Card>
)

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pinkBlob: file(relativePath: { eq: "pink-blob-2.png" }) {
        childImageSharp {
          fixed(width: 542) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yellowBlob: file(relativePath: { eq: "yellow-blob-3.png" }) {
        childImageSharp {
          fixed(width: 548) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      usgLogo: file(relativePath: { eq: "usg-logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      justLogo: file(relativePath: { eq: "just-logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <div>
      <SEO title="About" />
      <Img fixed={data.pinkBlob.childImageSharp.fixed} style={{
        position: 'absolute',
        top: '330px',
        zIndex: -1
      }} />
      <Img fixed={data.yellowBlob.childImageSharp.fixed} style={{
        position: 'absolute',
        top: '1000px',
        right: 0,
        zIndex: -1
      }} />
      <PageContainer>
        <StyledHeaderDiv>
          <h1>About Us</h1>
          <p>
            A group at Princeton University focused on Research, Innovation, and
            Design. As a team of designers and developers, our mission is to drive
            impactful user experience solutions through user research and digital
            implementation.
          </p>
        </StyledHeaderDiv>
        <Section align="left" height="400px">
          <h1>Services</h1>
          <FlexContainer>
            <Service name="User Research"/>
            <Service name="Product Strategy"/>
            <Service name="UI/UX Design"/>
          </FlexContainer>
        </Section>
        <Section align="right" height="500px">
          <h1>Supporters</h1>
          <FlexContainer align="right">
            <a href="https://www.tigerapps.org/" target="_blank" rel="noreferrer">
              <Img fixed={data.usgLogo.childImageSharp.fixed} />
            </a>
            <a href="https://just.cs.princeton.edu/" target="_blank" rel="noreferrer">
              <img
                width="225px"
                src={justlogo}
                alt="Logo that says JUST in white letters, except the u is gold and has an underline."
              />
            </a>
          </FlexContainer>
        </Section>
      </PageContainer>
    </div>
  )
}

export default AboutPage