import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import NavLink from "./navlink"

const StyledNav = tw.nav`
  flex justify-between items-center text-lg
`
const ActionLink = styled(props => <Link {...props} />)`
  ${tw`bg-magenta text-white rounded-lg p-2 hover:bg-opacity-75 transition-colors font-bold`}
`
const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "resinde-logo-square.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 70, height: 70) {
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
            <NavLink to="/about" magenta>
              About
            </NavLink>
            <NavLink to="/work" purple>
              Work
            </NavLink>
            <NavLink to="/team" blue>
              Our Team
            </NavLink>
            <NavLink to="/for-students" yellow>
              For Students
            </NavLink>
            <ActionLink to="/contact">Contact Us</ActionLink>
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
