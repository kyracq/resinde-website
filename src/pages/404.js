import React from "react"
import tw, { styled } from "twin.macro"
import SEO from "../components/seo"
import { Link } from "gatsby"

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`text-blue`}
`

const HeroContainer = tw.div`
  flex flex-col min-h-screen max-w-max justify-center mobile:px-8 px-48
`

const NotFoundPage = () => (
  <HeroContainer>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <StyledLink to="/">Back to the homepage.</StyledLink>
  </HeroContainer>
)

export default NotFoundPage
