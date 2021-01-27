import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import NavLink from "./navlink"
import MobileNav from "./mobile-nav"

const StyledHeader = tw.header`
  px-20 pt-8
`

const StyledNav = tw.nav`
  flex justify-between items-center text-lg
`
const DesktopNav = tw.div`
  hidden sm:block
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
    <StyledHeader>
      <StyledNav>
        <div>
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="ResInDe logo" />
          </Link>
        </div>
        <MobileNav />
        <DesktopNav>
          <NavLink to="/about" magenta="true">
            About
          </NavLink>
          <NavLink to="/work" purple="true">
            Work
          </NavLink>
          <NavLink to="/team" blue="true">
            Team
          </NavLink>
          <NavLink to="/for-students" yellow="true">
            For Students
          </NavLink>
          <ActionLink to="/contact">Contact Us</ActionLink>
        </DesktopNav>
      </StyledNav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
