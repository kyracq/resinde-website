import React from "react"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import justlogo from "../images/just-logo.svg"

const MagentaBlob = styled(Img)`
  top: 460px;
  left: -200px;
  z-index: -1;
  @media (max-width: 639px) {
    left: -60px;
  }
`

const YellowBlob = styled(Img)`
  ${tw`right-0`}
  top: 1000px;
  z-index: -1;
  @media (max-width: 1023px) {
    top: 1450px;
  }
  @media (max-width: 639px) {
    top: 1500px;
  }
`

const StyledHeaderDiv = tw.div`
  mt-16 mobile:px-8 px-32
`

const PageContainer = tw.div`
  space-y-48 px-20 
  xl:px-14
  lg:space-y-36
  mobile:space-y-32 mobile:px-8 
`

const Section = styled.div`
  ${tw`space-y-3 text-white mobile:px-8 px-32`}
  min-height: ${props => props.height};
  text-align: ${props => props.align};
`
const FlexContainer = styled.div`
  ${tw`flex flex-row space-x-6 items-center`}
  ${props => {
    if (props.align === "right") return tw`justify-end lg:items-end`
    else return tw`justify-start lg:flex-col lg:space-x-0 lg:space-y-6`
  }}
`
const Card = styled.div`
  ${tw`w-full text-center border-yellow border-4 bg-white text-magenta`}
  height: 300px;
  border-radius: 25px;
  padding-top: 130px;
  p {
    ${tw`text-2xl`}
  }
`

const Service = props => (
  <Card>
    <p>{props.name}</p>
  </Card>
)

const StyledH1 = tw.h1`
  uppercase
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      magentaBlob: file(relativePath: { eq: "pink-blob-2.png" }) {
        childImageSharp {
          fixed(width: 1000) {
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
      <MagentaBlob
        fixed={data.magentaBlob.childImageSharp.fixed}
        style={{
          position: "absolute",
        }}
      />
      <YellowBlob
        fixed={data.yellowBlob.childImageSharp.fixed}
        style={{
          position: "absolute",
        }}
      />
      <PageContainer>
        <StyledHeaderDiv>
          <h1>About Us</h1>
          <p>
            A group at Princeton University focused on Research, Innovation, and
            Design. As a team of designers and developers, our mission is to
            drive impactful user experience solutions through user research and
            digital implementation.
          </p>
        </StyledHeaderDiv>
        <Section align="left" height="500px">
          <StyledH1>Services</StyledH1>
          <FlexContainer>
            <Service name="User Research" />
            <Service name="Product Strategy" />
            <Service name="UI/UX Design" />
          </FlexContainer>
        </Section>
        <Section align="right" height="500px">
          <h1>Supporters</h1>
          <FlexContainer align="right">
            <a
              href="https://www.tigerapps.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Img fixed={data.usgLogo.childImageSharp.fixed} />
            </a>
            <a
              href="https://just.cs.princeton.edu/"
              target="_blank"
              rel="noreferrer"
            >
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
