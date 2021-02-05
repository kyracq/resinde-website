import React from "react"
import tw from "twin.macro"

const HeroContainer = tw.div`
  flex flex-col min-h-screen max-w-max justify-center mobile:px-8 px-48
`

const NotFoundPage = () => (
  <HeroContainer>
    <h1>Thank you!</h1>
    <p>We'll get back to you soon.</p>
  </HeroContainer>
)

export default NotFoundPage
