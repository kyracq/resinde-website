import React from "react"
import tw, { styled } from "twin.macro"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const StyledInput = styled.input`
  ${tw`rounded-xl my-7 px-6 py-2 block w-full outline-none`}
`
const StyledTextarea = styled.textarea`
  ${tw`rounded-xl my-5 px-6 py-6 block w-full outline-none`}
`
const StyledButton = styled.button`
  ${tw`rounded-xl p-2 bg-blue text-white hover:bg-magenta transition-colors`}
`
const Wrapper = styled.div`
  ${tw`md:px-32 mt-16 px-8`}
  height: 1300px;
`

const StyledForm = styled.form`
  ${tw`text-right`}
`
const WhiteText = styled.div`
  ${tw`text-white mb-4`}
`

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bgBlob: file(relativePath: { eq: "purple-blob-3.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <SEO title="Contact Us" />
      <BackgroundImage Tag="section" fluid={data.bgBlob.childImageSharp.fluid}>
        <Wrapper>
          <h1>Contact Us</h1>
          <StyledForm action="/contact-form" method="post">
            <div>
              <StyledInput
                style={{ border: `3px solid #7d71f2` }}
                placeholder="Name"
                required
              ></StyledInput>
            </div>
            <div>
              <StyledInput
                style={{ border: `3px solid #f02e65` }}
                placeholder="Email Address"
                required
              ></StyledInput>
            </div>
            <div>
              <StyledTextarea
                style={{ border: `3px solid #ffcf2e` }}
                rows="5"
                placeholder="Message"
                required
              ></StyledTextarea>
            </div>
            <div>
              <StyledButton>SUBMIT</StyledButton>
            </div>
          </StyledForm>
          <WhiteText>
            Join out mailing list for monthly updates about opportunities and
            what's going on in ResInDe!
          </WhiteText>
          <div>
            <StyledButton>Join the Newsletter!</StyledButton>
          </div>
        </Wrapper>
      </BackgroundImage>
    </div>
  )
}
export default ContactPage
