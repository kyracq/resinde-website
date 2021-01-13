import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute`}
  top: 40%;
  left: 100px;
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow ml-8`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border-blue rounded-full text-blue py-2 px-8 uppercase border`}
`

const AboutSection = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blue-blob.png" }) {
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
        <StyledH1>About Us</StyledH1>
      </div>
      <SectionText>
        <p>
          A group at Princeton University focused on Research, Innovation, and
          Design. As a team of designers and developers, our mission is to drive
          impactful user experience solutions through user research and digital
          implementation.
        </p>
        <br />
        <StyledButton to="/about">learn more</StyledButton>
      </SectionText>
    </StyledDiv>
  )
}

export default AboutSection
