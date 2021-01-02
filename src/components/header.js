import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const StyledNav = tw.nav`
  flex justify-between
`
const StyledLink = styled(props => <Link {...props} />)`
  ${tw`mr-8 hover:text-purple hover:border-b-2 border-purple`}
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "resinde-logo-square.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
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
              <Img fixed={data.file.childImageSharp.fixed} alt="ResInDe logo" />
            </Link>
          </div>
          <div>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/work">Work</StyledLink>
            <StyledLink to="/team">Our Team</StyledLink>
            <StyledLink to="/for-students">For Students</StyledLink>
            <StyledLink to="/contact">Contact Us</StyledLink>
          </div>
        </StyledNav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
