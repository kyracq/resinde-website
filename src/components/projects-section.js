import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute text-right px-48`}
  top: 260px;
`

const StyledTextDiv = styled.p`
  ${tw`mb-8 pl-48 flex flex-col items-center space-y-4 text-center`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow mr-8`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-yellow rounded-full text-yellow py-2 px-8 uppercase hover:bg-yellow hover:text-white transition`}
`

const StyledA = styled.a`
  ${tw`text-blue`}
`

const ProjectsSection = props => {
  const data = useStaticQuery(graphql`
    query {
      blob: file(relativePath: { eq: "yellow-blob.png" }) {
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.blob?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <StyledDiv>
      <SectionText>
        <StyledTextDiv>
          <div>
            ResInDe is currently partnering with{" "}
            <StyledA target="_blank" href="https://www.tigerapps.org/">
              TigerApps
            </StyledA>{" "}
            to redesign the course selection experience for Princeton students—
            through streamlining the integration of three widely used tools,{" "}
            <StyledA target="_blank" href="https://www.princetoncourses.com">
              Princeton Courses
            </StyledA>
            {", "}
            <StyledA target="_blank" href="https://recal.io/">
              ReCal
            </StyledA>
            {", "}and{" "}
            <StyledA target="_blank" href="https://www.tigerpath.io/">
              TigerPath
            </StyledA>{" "}
            into one clean and concise app. We are also working on a redesign of{" "}
            <StyledA target="_blank" href="https://tigerbook.herokuapp.com/">
              Tigerbook
            </StyledA>
            .
          </div>
          <StyledButton to="/work">learn more</StyledButton>
        </StyledTextDiv>
      </SectionText>
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.blob.childImageSharp.fixed} />
        <StyledH1>Current Projects</StyledH1>
      </div>
    </StyledDiv>
  )
}

export default ProjectsSection
