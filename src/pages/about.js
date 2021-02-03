import React from "react"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PageWrapper = tw.div`
  space-y-32
`

const MagentaBlob = styled(Img)`
  left: -200px;
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
  top: 400px;
`

const StyledTextDiv = styled.div`
  ${tw`mb-8 px-20`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow mr-8`}
  div {
    ${tw`px-20`}
  }
`

const StyledList = tw.ul`
  list-disc list-inside
`

const NumberedList = tw.ul`
  list-decimal list-inside
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
    }
  `)

  return (
    <div>
      <SEO title="About" />
      <PageWrapper>
        <StyledHeaderDiv>
          <h1>About Us</h1>
          <p>
            A group at Princeton University focused on Research, Innovation, and
            Design. As a team of designers and developers, our mission is to
            drive impactful user experience solutions through user research and
            digital implementation.
          </p>
        </StyledHeaderDiv>
        <StyledDiv>
          <div style={{ position: "relative", width: "800px" }}>
            <MagentaBlob fixed={data.pinkBlob.childImageSharp.fixed} />
            <Header1>Services</Header1>
          </div>
          <SectionText>
            <StyledTextDiv>
              <StyledList>
                <li>User Research</li>
                <li>Product Strategy</li>
                <li>UI/UX Design</li>
              </StyledList>
            </StyledTextDiv>
          </SectionText>
        </StyledDiv>
        <StyledDiv>
          <SectionText>
            <StyledTextDiv>
              Princeton ResInDe focuses on building projects with real impact on
              our community. As a team member, you’ll be working with a team to
              complete a project ranging from conducting user research, building
              prototypes, developing product strategies, and software
              development. In addition to projects, you’ll take part in teamwide
              events such as:
              <StyledList>
                <li>
                  Project syncs where each team shares their work with other
                  teams
                </li>
                <li>
                  Brainstorming events where the team brainstorms potential
                  problems on and off campus to address
                </li>
                <li>Fun, social events!</li>
              </StyledList>
              <br />
              Princeton ResInDe is founded to bring value to you in several
              ways:
              <NumberedList>
                <li>
                  To immerse yourself in the world of practical and design
                  thinking.
                </li>
                <li>
                  To work on meaningful projects that generate a lasting impact
                  on local communities.
                </li>
                <li>
                  To amp up your resume and portfolio. To join a community of
                  designers, entrepreneurs, and innovative thinkers.
                </li>
              </NumberedList>
            </StyledTextDiv>
          </SectionText>
          <div style={{ position: "relative" }}>
            <Img fixed={data.yellowBlob.childImageSharp.fixed} />
            <Header2>Supporters</Header2>
          </div>
        </StyledDiv>
      </PageWrapper>
    </div>
  )
}

export default AboutPage
