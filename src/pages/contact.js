import React from "react"
import tw, { styled } from "twin.macro"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const StyledInput = styled.input`
  ${tw`rounded-xl my-7 px-6 py-2 block w-full outline-none border-purple border-2`}
`
const StyledTextarea = styled.textarea`
  ${tw`rounded-xl my-5 px-6 py-6 block w-full outline-none border-purple border-2`}
`
const StyledButton = styled.button`
  ${tw`border border-white rounded-full text-white py-2 px-8
  uppercase hover:bg-white hover:text-purple transition focus:outline-none`}
  cursor: none;
`
const Wrapper = styled.div`
  ${tw`mobile:px-8 px-48 mt-48`}
  height: 1300px;
`
const StyledForm = styled.form`
  ${tw`text-right`}
`
const WhiteText = styled.div`
  ${tw`text-white text-2xl font-bold mb-4 py-5 max-w-lg`}
`

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bgBlob: file(relativePath: { eq: "purple-blob-3.png" }) {
          childImageSharp {
            fluid(quality: 100) {
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
          <StyledForm name="contact" method="POST" netlify>
            <div>
              <StyledInput
                placeholder="Name"
                type="text"
                name="name"
                required
              ></StyledInput>
            </div>
            <div>
              <StyledInput
                placeholder="Email Address"
                required
                type="email"
                name="email"
              ></StyledInput>
            </div>
            <div>
              <StyledTextarea
                rows="5"
                placeholder="Message"
                required
                name="message"
              ></StyledTextarea>
            </div>
            <div>
              <StyledButton type="submit">submit</StyledButton>
            </div>
          </StyledForm>
          <WhiteText>
            Join our mailing list for monthly updates about opportunities and
            what's going on in ResInDe!
          </WhiteText>
          <a
            href="https://google.us2.list-manage.com/subscribe?u=f742a956f5b0d1eca7c1703e3&id=59b6bf43e4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>subscribe</StyledButton>
          </a>
        </Wrapper>
      </BackgroundImage>
    </div>
  )
}
export default ContactPage
