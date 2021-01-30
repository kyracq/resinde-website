import React from "react"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl absolute`}
  top: 30%;
  left: 70px;
`

const StyledH12 = styled.h1`
  ${tw`text-white text-7xl absolute`}
  top: 30%;
  left: 20px;
`

const StyledH1Workshops = styled.h1`
  ${tw`text-white text-7xl absolute`}
  top: 60%;
  left: 200px;
`

const StyledHeader = styled.h1`
  ${tw`mobile:pl-8 pl-20 mt-16`}
`

const StyledP = styled.p`
  ${tw`mb-8 px-20`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
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

const ButtonDiv = styled.div`
  ${tw`text-center`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-blue rounded-full text-blue py-2 px-8 uppercase hover:bg-blue hover:text-white transition`}
`

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`mr-8`}
  position: relative;
  transition: color 0.3s ease-in-out;
  &:before {
    ${tw`bg-blue`}
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    transition-duration: 0.5s;
  }
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  ${tw`text-blue`}
`

const ForStudentsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "yellow-blob-2.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      blueBlob: file(relativePath: { eq: "blue-blob-2.png" }) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      purpleBlob: file(relativePath: { eq: "purple-blob-2.png" }) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <div>
      <SEO title="For Students" />
      <StyledHeader>For Students</StyledHeader>
      <StyledDiv>
        <SectionText>
          <StyledP>
            What is HCD? Human Centered Design (HCD) is an emerging practice and
            is becoming an increasingly valued and sought-after skill in all
            industries. It is a framework for problem solving with the user at
            the core of each step. While Princeton doesn’t offer a clear
            academic path for design, it houses designers from far and wide who
            practice their craft independently and we’re excited to provide a
            hub for designers of all backgrounds to work together.
          </StyledP>
        </SectionText>
        <div style={{ position: "relative" }}>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
          <StyledH1>Human Centered Design</StyledH1>
        </div>
      </StyledDiv>
      <StyledDiv>
        <div style={{ position: "relative" }}>
          <Img fixed={data.blueBlob.childImageSharp.fixed} />
          <StyledH12>What it's like being on the ResInDe team</StyledH12>
        </div>
        <SectionText>
          <StyledP>
            Princeton ResInDe focuses on building projects with real impact on
            our community. As a team member, you’ll be working with a team to
            complete a project ranging from conducting user research, building
            prototypes, developing product strategies, and software development.
            In addition to projects, you’ll take part in teamwide events such
            as:
            <StyledList>
              <li>
                Project syncs where each team shares their work with other teams
              </li>
              <li>
                Brainstorming events where the team brainstorms potential
                problems on and off campus to address
              </li>
              <li>Fun, social events!</li>
            </StyledList>
            <br />
            Princeton ResInDe is founded to bring value to you in several ways:
            <NumberedList>
              <li>
                To immerse yourself in the world of practical and design
                thinking.
              </li>
              <li>
                To work on meaningful projects that generate a lasting impact on
                local communities.
              </li>
              <li>
                To amp up your resume and portfolio. To join a community of
                designers, entrepreneurs, and innovative thinkers.
              </li>
            </NumberedList>
          </StyledP>
          <ButtonDiv>
            <StyledButton to="https://forms.gle/6YrcssGhsisKTE9m7">
              apply today
            </StyledButton>
          </ButtonDiv>
        </SectionText>
      </StyledDiv>
      <StyledDiv>
        <SectionText>
          <div>
            <h2>Past Workshops</h2>
            <StyledList>
              <li>
                <StyledLink to="https://drive.google.com/drive/u/2/folders/1eDNLrpn7Jz1cWsiQolwJ0Yk22FM-jTey">
                  Visual Design
                </StyledLink>
              </li>
              <li>
                <StyledLink to="https://drive.google.com/drive/u/2/folders/19h6dT3UTpupxzF5vaFHIO5VjZvpPHqSL">
                  Design Thinking
                </StyledLink>
              </li>
              <li>
                <StyledLink to="https://drive.google.com/drive/u/2/folders/1iA-D3wU1KtkYDbZOXE2BjctJFlPUH3u8">
                  Figma
                </StyledLink>
              </li>
              <li>
                <StyledLink to="https://drive.google.com/drive/u/2/folders/10dBm7SI-da4mufos9JzC8FmbxNOToLUl">
                  React + Backend
                </StyledLink>
              </li>
            </StyledList>
            <h2>Upcoming Events</h2>
          </div>
        </SectionText>
        <div style={{ position: "relative" }}>
          <Img fixed={data.purpleBlob.childImageSharp.fixed} />
          <StyledH1Workshops>ResInDe Events</StyledH1Workshops>
        </div>
      </StyledDiv>
    </div>
  )
}

export default ForStudentsPage
