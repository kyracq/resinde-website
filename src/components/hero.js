import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const HeroContainer = tw.div`
  flex flex-col min-h-screen max-w-max justify-center items-center p-0 space-y-32 mobile:px-8 px-48
`

const HeroContent = styled.div`
  ${tw`text-left text-black`}
`

const HeroArrow = styled(props => <Link {...props} />)`
  ${tw`hover:text-purple transition mobile:hidden animate-bounce`}
`
const StyledDiv = styled.div`
  &.fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: ${props => props.delay};
  }
  &.fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: ${props => props.delay};
  }
`

const HeroSection = props => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  const one = <h1>We are ResInDe.</h1>
  const two = (
    <p>
      Princeton ResInDe aims to offer a space for designers and design thinkers
      to convene and practice together, creating real impact on projects and
      businesses. We emphasize the importance and power of human centered design
      in creating impactful solutions by providing hands-on projects for
      students to practice this approach while creating real impact on users.
    </p>
  )

  const items = [one, two]

  return (
    <HeroContainer>
      <HeroContent>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={1000}>
                <StyledDiv delay={`${i + 1}00ms`}>{item}</StyledDiv>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HeroContent>
      <HeroArrow>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fadeup" timeout={500}>
              <StyledDiv delay={`${3}00ms`}>
                <Link to={props.goTo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </Link>
              </StyledDiv>
            </CSSTransition>
          )}
        </TransitionGroup>
      </HeroArrow>
    </HeroContainer>
  )
}

export default HeroSection
