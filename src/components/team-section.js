import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { SectionTextRight } from "../components/padding"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute pl-48`}
  top: 300px;
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-magenta rounded-full text-magenta py-2 px-8 uppercase hover:bg-magenta hover:text-white transition`}
`
const CenteredP = styled.p`
  ${tw`text-center`}
`

const TeamSection = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pink-blob.png" }) {
        childImageSharp {
          fixed(width: 800) {
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
      <div style={{ position: "relative" }}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <StyledH1>Our Team</StyledH1>
      </div>
      <SectionTextRight>
        <CenteredP>
          Our team is composed of designers and developers of all class years,
          backgrounds, and interests. After all, diversity encourages
          creativity!
        </CenteredP>
        <StyledButton to="/team">meet the team</StyledButton>
      </SectionTextRight>
    </StyledDiv>
  )
}

export default TeamSection
