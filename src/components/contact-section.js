import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { Link } from "gatsby"

const StyledH1 = styled.h1`
  ${tw`text-white text-7xl items-center absolute text-center`}
  top: 30%;
  left: 100px;
`

const StyledP = styled.p`
  ${tw`mb-8 px-20 text-center`}
`

const StyledDiv = styled.div`
  ${tw`flex`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow mr-8`}
`

const StyledButton = styled(props => <Link {...props} />)`
  ${tw`border border-purple rounded-full text-purple py-2 px-8 uppercase hover:bg-purple hover:text-white transition`}
  top: 70%;
  right: 80px;
`

const ButtonDiv = styled.div`
  ${tw`text-center`}
`

const ContactSection = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "purple-blob.png" }) {
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
          Want to partner together? Curious to join? Contact us!
        </StyledP>
        <ButtonDiv>
          <StyledButton to="/contact">Contact Us</StyledButton>
        </ButtonDiv>
      </SectionText>
      <div id={props.id} style={{ position: "relative" }}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <StyledH1>Contact Us</StyledH1>
      </div>
    </StyledDiv>
  )
}

export default ContactSection
