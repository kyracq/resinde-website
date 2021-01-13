import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

const HeroContainer = tw.div`
  flex flex-col -mt-28 min-h-screen max-w-max justify-center items-center p-0 space-y-32
`

const HeroContent = tw.div`
  text-left text-black
`

const HeroArrow = styled(props => <Link {...props} />)`
${tw`inline w-12 h-12 border-r-6 border-b-6 border-solid border-black transform rotate-45`}

  &:hover {
    ${tw`border-r-6 border-b-6 border-solid border-purple`}
  }
`

const HeroSection = props => (
  <HeroContainer>
    <HeroContent>
      <h1>We are ResInDe.</h1>
      <p>
        A group at Princeton University focused on Research, Innovation, and
        Design. As a team of designers and developers, our mission is to drive
        impactful user experience solutions through user research and digital
        implementation.
      </p>
    </HeroContent>
    <HeroArrow to={props.goTo} />
  </HeroContainer>
)

export default HeroSection
