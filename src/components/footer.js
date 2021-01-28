import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const StyledNav = tw.nav`
  flex justify-between items-end
`
const SocialContainer = tw.nav`
  flex space-x-4 
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
      facebook: file(relativePath: { eq: "facebook.png" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        publicURL
      }
      favorite: file(relativePath: { eq: "favorite.png" }) {
        publicURL
      }
    }
  `)

  return (
    <footer>
      <StyledNav>
        <div>
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="ResInDe" />
          </Link>
        </div>
        <div>
          <p> Made with ❤ by ResInDe </p>
        </div>
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
      </StyledNav>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
