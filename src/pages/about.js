import React from "react"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import justLogo from "../images/just-logo.svg"
import Img from "gatsby-image"
import ReactTooltip from "react-tooltip"

const PageWrapper = tw.div`
  space-y-32 mt-48
`

const CircleLogo = styled(Img)`
  ${tw`rounded-full`}
`

const MagentaBlob = styled(Img)`
  left: -200px;
  z-index: -1;
  @media (max-width: 639px) {
    left: -60px;
  }
`

const YellowBlob = styled(Img)`
  z-index: -1;
  @media (max-width: 639px) {
    left: -60px;
  }
`

const StyledHeaderDiv = styled.div`
  ${tw`mobile:px-8 px-48 mt-16`}
`
const StyledDiv = styled.div`
  ${tw`flex`}
`

const Header1 = styled.h1`
  ${tw`text-white text-7xl absolute pl-48`}
  top: 300px;
`

const Header2 = styled.h1`
  ${tw`text-white text-7xl absolute right-48`}
  top: 300px;
`

const StyledLogosDiv = styled.div`
  ${tw`grid grid-cols-2 justify-items-center gap-y-16`}
  span {
    visibility: hidden;
    padding: 5px 0;
  }
`

const SectionText = styled.div`
  ${tw`self-center flex-grow`}
`

const StyledList = tw.ul`
  list-disc list-inside text-lg self-center mobile:static right-48 absolute
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pinkBlob: file(relativePath: { eq: "pink-blob-2.png" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yellowBlob: file(relativePath: { eq: "yellow-blob-2.png" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      usgLogo: file(relativePath: { eq: "usg-logo.png" }) {
        childImageSharp {
          fixed(width: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cosCouncilLogo: file(relativePath: { eq: "cos-council-logo.jpg" }) {
        childImageSharp {
          fixed(width: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tigerLaunchLogo: file(relativePath: { eq: "tiger-launch-logo.png" }) {
        childImageSharp {
          fixed(width: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="About" />
      <PageWrapper>
        <StyledHeaderDiv>
          <h1>About Us</h1>
          <p>
            ResInDe is Princeton University's premier student-run design consultancy. Short for
            Research, Innovation, and Design, ResInDe is founded on the core design principles
            of empathy and human-centered design. Our team understands the value of problem-solving
            and innovating with intention, and our mission is to provide impactful user experience
            solutions to the Princeton student and local community through user research and
            digital implementation. 
          </p>
        </StyledHeaderDiv>
        <StyledDiv>
          <div style={{ position: "relative", width: "800px" }}>
            <MagentaBlob fixed={data.pinkBlob.childImageSharp.fixed} />
            <Header1>Services</Header1>
          </div>
          <StyledList>
            <li>User Research</li>
            <li>Product Strategy</li>
            <li>UI/UX Design</li>
          </StyledList>
        </StyledDiv>
        <StyledDiv>
          <SectionText>
            <StyledLogosDiv>
              <a
                href="https://www.tigerapps.org/"
                target="_blank"
                rel="noreferrer"
                data-tip
                data-for="tiger-apps"
              >
                <Img fixed={data.usgLogo.childImageSharp.fixed} />
              </a>
              <ReactTooltip id="tiger-apps" place="top">
                ResInDe is working with USG Tiger Apps on a redesign of TigerBook
                and Princeton Courses.
              </ReactTooltip>

              <a
                href="https://just.cs.princeton.edu/"
                target="_blank"
                rel="noreferrer"
                data-tip
                data-for="just"
              >
                <img
                  width="225px"
                  src={justLogo}
                  alt="Logo that says JUST in white letters, except the u is gold and has an underline."
                />
              </a>
              <ReactTooltip id="just" place="top">
                Technology for a Just Society (JuST)
              </ReactTooltip>
              <a
                href="https://www.princetoncoscouncil.com/"
                target="_blank"
                rel="noreferrer"
                data-tip
                data-for="cos-council"
              >
                <CircleLogo fixed={data.cosCouncilLogo.childImageSharp.fixed} />
              </a>
              <ReactTooltip id="cos-council" place="top">
                ResInDe has partnered with Princeton COS Council on a workshop
                series.
              </ReactTooltip>
              <a
                href="https://www.tigerlaunch.com/"
                target="_blank"
                rel="noreferrer"
                data-tip
                data-for="tiger-launch"
              >
                <Img fixed={data.tigerLaunchLogo.childImageSharp.fixed} />
              </a>
              <ReactTooltip id="tiger-launch" place="top">
                Tiger Launch
              </ReactTooltip>
            </StyledLogosDiv>
          </SectionText>
          <div style={{ position: "relative", width: "800px" }}>
            <YellowBlob fixed={data.yellowBlob.childImageSharp.fixed} />
            <Header2>Partners</Header2>
          </div>
        </StyledDiv>
      </PageWrapper>
    </div>
  )
}

export default AboutPage
