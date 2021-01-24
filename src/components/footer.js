import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { Icon } from './icons';

const StyledNav = tw.nav`
  flex justify-between
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "resinde-splash-transparent.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 250, height: 110) {
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
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook!" />
          </a>
          <a
            href="https://www.linkedin.com/company/princetonresinde/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin!" />
          </a>
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
