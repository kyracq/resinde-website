import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute`}
  top: 130px;
  left: 100px;
`

const StyledP = styled.p`
  ${tw`mb-8 px-20 flex flex-col items-center`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow mr-8`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border-white rounded-full text-white py-2 px-8 uppercase border absolute`}
  top: 300px;
  right: 30px;
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
        <StyledP>
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
        </StyledP>
      </SectionText>
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <StyledH1>Current Projects</StyledH1>
        <StyledButton to="/work">learn more</StyledButton>
      </div>
    </StyledDiv>
  )
}

export default ProjectsSection
