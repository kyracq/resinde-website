import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const StyledNav = tw.nav`
  flex justify-between
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "resinde-splash-transparent.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 256, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)  

  return (
    <footer>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <StyledNav>
          <div>
            <Link to="/">
              <Img fixed={data.file.childImageSharp.fixed} alt=" " />
            </Link>
          </div>
          <div>
            <p> Made with </p> <img src="favorite.png" alt="love"></img> <p> by ResInDe </p>
          </div>
          <div>
            <img src="facebook.png" alt="facebook"></img>
            <img src="linkedin.png" alt="linkedin"></img>
            <p>© {new Date().getFullYear()} ResInDe. All rights reserved.</p>
          </div>
        </StyledNav>
      </div>
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
