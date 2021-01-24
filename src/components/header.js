import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import NavLink from "./navlink"

const StyledHeader = tw.header`
  px-20 pt-8
`

const StyledNav = tw.nav`
  flex justify-between items-center text-lg
`
const MobileNav = tw.div`
  sm:hidden
`
const DesktopNav = tw.div`
  hidden sm:block
`
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
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
        <MobileNav>
          <Hamburger />
        </MobileNav>
        <DesktopNav>
          <NavLink to="/about" magenta="true">
            About
          </NavLink>
          <NavLink to="/work" purple="true">
            Work
          </NavLink>
          <NavLink to="/team" blue="true">
            Our Team
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
