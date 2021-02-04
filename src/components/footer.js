import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const StyledFooter = tw.footer`
  flex justify-between mobile:items-center mobile:space-y-8 items-end p-2 mobile:flex-col
`

const SocialContainer = tw.div`
  flex space-x-4 mobile:justify-center justify-end mr-4
`

const StyledDiv = styled.div`
  ${tw`flex space-x-2 items-center`}
  p {
    ${tw`text-xl`}
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`-mb-6`}
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "resinde-splash-transparent.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 250, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <StyledLink to="/">
        <Img fixed={data.file.childImageSharp.fixed} alt="ResInDe" />
      </StyledLink>
      <StyledDiv>
        <p>Made with </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <p>by ResInDe</p>
      </StyledDiv>
      <div>
        <SocialContainer>
          <a
            href="https://www.facebook.com/princetonresinde/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              class="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/princetonresinde/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              class="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/princetonresinde/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              class="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </SocialContainer>
        <p>© {new Date().getFullYear()} ResInDe. All rights reserved.</p>
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
