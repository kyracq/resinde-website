import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute pl-48`}
  top: 300px;
`

const TextDiv = styled.p`
  ${tw`pr-48 pl-8`}
`

const ButtonDiv = styled.div`
  ${tw`text-center mt-8`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-magenta rounded-full text-magenta py-2 px-8 uppercase hover:bg-magenta hover:text-white transition`}
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
      <SectionText>
        <TextDiv>
          <p>
            A group at Princeton University focused on Research, Innovation, and
            Design. As a team of designers and developers, our mission is to
            drive impactful user experience solutions through user research and
            digital implementation.
          </p>
          <ButtonDiv>
            <StyledButton to="/team">learn more</StyledButton>
          </ButtonDiv>
        </TextDiv>
      </SectionText>
    </StyledDiv>
  )
}

export default TeamSection
