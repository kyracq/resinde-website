import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute`}
  top: 30%;
  left: 100px;
`

const StyledP = styled.p`
  ${tw`mb-8`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow mr-8`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border-white rounded-full text-white py-2 px-8 uppercase border absolute`}
  top: 70%;
  right: 80px;
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
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <StyledDiv>
      <SectionText>
        <StyledP>
          A group at Princeton University focused on Research, Innovation, and
          Design. As a team of designers and developers, our mission is to drive
          impactful user experience solutions through user research and digital
          implementation.
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
