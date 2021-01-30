import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const HeroContainer = tw.div`
  flex flex-col -mt-28 min-h-screen max-w-max justify-center items-center p-0 space-y-32 mobile:px-8 px-20
`

const HeroContent = styled.div`
  ${tw`text-left text-black`}
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
        Princeton ResInDe aims to offer a space for designers and design
        thinkers to convene and practice together, creating real impact on
        projects and businesses. We emphasize the importance and power of human
        centered design in creating impactful solutions by providing hands-on
        projects for students to practice this approach while creating real
        impact on users.
      </p>
    </HeroContent>
    <HeroArrow to={props.goTo} />
  </HeroContainer>
)

export default HeroSection
