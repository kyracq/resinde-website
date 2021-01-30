import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute text-right px-20`}
  top: 130px;
`

const StyledTextDiv = styled.p`
  ${tw`mb-8 px-20 flex flex-col items-center space-y-4`}
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
      placeholderImage: file(relativePath: { eq: "yellow-blob.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      projectsImage: file(relativePath: { eq: "princeton-courses.png" }) {
        childImageSharp {
          fixed(width: 500) {
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
    <StyledDiv>
      <SectionText>
        <StyledTextDiv>
          <Img fixed={data.projectsImage.childImageSharp.fixed} />
          <br />
          <div>
            ResInDe is currently working with{" "}
            <StyledA target="_blank" href="https://www.tigerapps.org/">
              TigerApps
            </StyledA>{" "}
            on revamping the course selection workflow for Princeton students.
            We're doing a redesign and combining three widely used tools,
            Princeton Courses, Recal, and TigerPath into one concise and
            convenient app. We are also doing a redesign of{" "}
            <StyledA target="_blank" href="https://tigerbook.herokuapp.com/">
              Tigerbook
            </StyledA>
            .
          </div>
          <StyledButton to="/work">learn more</StyledButton>
        </StyledTextDiv>
      </SectionText>
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <StyledH1>Current Projects</StyledH1>
      </div>
    </StyledDiv>
  )
}

export default ProjectsSection
