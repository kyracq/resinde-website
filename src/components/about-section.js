import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`mobile:text-black text-white text-7xl items-center absolute mobile:pl-8 pl-48`}
  top: 40%;
`

const StyledP = styled.p`
  ${tw`pr-48 pl-8`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow`}
`

const ButtonDiv = styled.div`
  ${tw`text-center mt-8`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-blue rounded-full text-blue py-2 px-8 uppercase hover:text-white
  hover:bg-blue transition`}
`

const StyledList = tw.ul`
  list-disc list-inside
`

const AboutSection = props => {
  const data = useStaticQuery(graphql`
    query {
      blob: file(relativePath: { eq: "blue-blob.png" }) {
        childImageSharp {
          fixed(width: 700) {
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
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.blob.childImageSharp.fixed} />
        <StyledH1>About Us</StyledH1>
      </div>
      <SectionText>
        <StyledP>
          ResInDe is Princeton University's premier student-run design consultancy. Short for
          Research, Innovation, and Design, ResInDe is founded on the core design principles
          of empathy and human-centered design. Our team understands the value of problem-solving
          and innovating with intention, and our mission is to provide impactful user experience
          solutions to the Princeton student and local community through user research and
          digital implementation. We currently specialize in the following areas:
          <StyledList>
            <li>User Research</li>
            <li>Product Strategy</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
          </StyledList>
          <ButtonDiv>
            <StyledButton to="/about">learn more</StyledButton>
          </ButtonDiv>
        </StyledP>
      </SectionText>
    </StyledDiv>
  )
}

export default AboutSection
