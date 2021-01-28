import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute`}
  top: 40%;
  left: 80px;
`

const StyledP = styled.p`
  ${tw`mb-8 px-20`}
`

const ButtonDiv = styled.div`
  ${tw`text-center`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow ml-8`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-magenta rounded-full text-magenta py-2 px-8 uppercase hover:bg-magenta hover:text-white transition`}
`

const TeamSection = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pink-blob.png" }) {
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
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <StyledH1>Our Team</StyledH1>
      </div>
      <SectionText>
        <StyledP>
          A group at Princeton University focused on Research, Innovation, and
          Design. As a team of designers and developers, our mission is to drive
          impactful user experience solutions through user research and digital
          implementation.
        </StyledP>
        <ButtonDiv>
          <StyledButton to="/team">learn more</StyledButton>
        </ButtonDiv>
      </SectionText>
    </StyledDiv>
  )
}

export default TeamSection
