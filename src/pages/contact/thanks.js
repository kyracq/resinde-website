import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`text-blue`}
`

const HeroContainer = tw.div`
  flex flex-col min-h-screen max-w-max justify-center mobile:px-8 px-48
`

const NotFoundPage = () => (
  <HeroContainer>
    <h1>Thank you!</h1>
    <p>We'll get back to you soon.</p>
    <StyledLink to="/">Back to the homepage.</StyledLink>
  </HeroContainer>
)

export default NotFoundPage
