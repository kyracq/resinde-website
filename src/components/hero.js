import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"

const HeroContainer = tw.div`
  flex flex-wrap justify-center items-center px-32 mt-32
`

const StyledDiv = tw.div`
  flex space-x-4 text-left
`

const HeroContent = styled.div`
  ${tw`text-left text-black space-y-4`}
  margin-left: 4rem;
  margin-right: 4rem;
`

const HeroSection = props => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <h1>Site under construction.</h1>
          <p>Check back soon.</p>
          <StyledDiv>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:princetonresinde@gmail.com">
              princetonresinde@gmail.com
            </a>
          </StyledDiv>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
