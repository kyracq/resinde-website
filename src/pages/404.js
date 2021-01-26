import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"

const HeroContainer = tw.div`
  flex flex-wrap justify-center items-center px-32 mt-32
`

const StyledA = tw.a`
  flex space-x-4 text-left
`

const HeroContent = styled.div`
  ${tw`text-left text-black space-y-4`}
  margin-left: 4rem;
  margin-right: 4rem;
`

const NotFoundPage = props => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <div>
            <h1>Site under construction.</h1>
            <p>Check back soon.</p>
          </div>
          <StyledA href="mailto:princetonresinde@gmail.com">
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
            <div>princetonresinde@gmail.com</div>
          </StyledA>
          <StyledA href="https://docs.google.com/forms/d/e/1FAIpQLSefvNUo-nYvVbaGatCi5z8URA9WmKqLhjfhBizIxmAj8YtAFQ/viewform">
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
              class="feather feather-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <div>Apply to join the ResInDe team</div>
          </StyledA>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default NotFoundPage
