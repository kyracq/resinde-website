import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
<<<<<<< HEAD

const StyledNav = tw.nav`
  flex justify-between
`

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`mr-8 hover:text-purple hover:border-b-2 border-purple`}
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file:file(relativePath: { eq: "resinde-splash-transparent.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 250, height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook:file(relativePath: { eq: "facebook.png" }) {
        publicURL
      }
      linkedin:file(relativePath: { eq: "linkedin.png" }) {
        publicURL
      }
      favorite:file(relativePath: { eq: "favorite.png" }) {
        publicURL
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
              <Img fixed={data.file.childImageSharp.fixed} alt="ResInDe" />
            </Link>
          </div>
          <div>
            <p> Made with </p> <a href="https://resinde.com" target="_blank" rel="noopener noreferrer">
              <img src={data.favorite.publicURL} alt="love!" />
            </a> <p> by ResInDe </p>
          </div>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={data.facebook.publicURL} alt="facebook!" />
            </a>
            <a href="https://www.linkedin.com/company/princetonresinde/about/" target="_blank" rel="noopener noreferrer">
              <img src={data.linkedin.publicURL} alt="linkedin!" />
            </a>
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

=======

const StyledNav = tw.nav`
  flex justify-between
`
const StyledLink = styled(props => <Link {...props} />)`
  ${tw`mr-8 hover:text-purple-900 hover:border-b-2`}
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
            <p> Made with </p> <img src="favorite.png" alt="love"></img>{" "}
            <p> by ResInDe </p>
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
>>>>>>> 69d0e6da58070c61b3d943c89155290beee43d2e

export default Footer
