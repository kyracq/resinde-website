import React, { useState, useEffect } from "react"
import tw, { styled } from "twin.macro"
import SEO from "../components/seo"
 
const StyledInput = styled.input`
  ${tw`rounded-xl my-7 px-6 py-2 block w-full`}
`
const StyledTextarea = styled.textarea`
  ${tw`rounded-xl my-5 px-6 py-6 block w-full`}
`
const StyledButton = styled.button`
  ${tw`rounded-xl p-2 bg-blue text-white hover:bg-magenta`}
`
const ContactPage = () => (
  <div>
    <SEO title="Contact Us" />
    <h1>Contact Us</h1>
    <form action="/contact-form" method="post">
      <div>
        <StyledInput style={{ border: `3px solid #7d71f2`}} placeholder="Name" required></StyledInput>
      </div>
      <div>
        <StyledInput style={{ border: `3px solid #f02e65`}} placeholder="Email Address" required></StyledInput>
      </div>
      <div>
        <StyledTextarea style={{ border: `3px solid #ffcf2e`}} rows="5" placeholder="Message" required></StyledTextarea>
      </div>
      <div>
        <StyledButton>SUBMIT</StyledButton>
      </div>
    </form>
    <div style={{marginTop: `3rem`, marginBottom: `1.45rem`}}>Join out mailing list for monthly updates about opportunities and what's going on in ResInDe!</div>
    <div>
      <StyledButton>Join the Newsletter!</StyledButton>
    </div>
  </div>
)
export default ContactPage
