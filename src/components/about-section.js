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

const StyledP = styled.p`
  ${tw`mb-8 px-20`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow ml-8`}
`

const ButtonDiv = styled.div`
  ${tw`text-center`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-blue rounded-full text-blue py-2 px-8 uppercase`}
`

const StyledList = tw.ul`
  list-disc list-inside
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
        <StyledP>
          Princeton ResInDe (short for Research, Innovation, and Design) is
          founded on the core design principles of empathy and human-centered
          design. Our team understands the value of problem-solving and
          innovating with intention, and our mission is to provide impactful
          user experience solutions to the Princeton student and local community
          through user research and digital implementation. We specialize in
          these areas:
          <StyledList>
            <li>User Research</li>
            <li>Product Strategy</li>
            <li>UI/UX Design</li>
          </StyledList>
        </StyledP>
        <ButtonDiv>
          <StyledButton to="/about">learn more</StyledButton>
        </ButtonDiv>
      </SectionText>
    </StyledDiv>
  )
}

export default AboutSection
