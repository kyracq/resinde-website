import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import React from "react"

const StyledLink = styled(props => <Link {...props} />)`
  ${tw`mr-8`}
  position: relative;
  transition: color 0.3s ease-in-out;
  &:before {
    ${props => {
      if (props.magenta) return tw`bg-magenta`
      else if (props.purple) return tw`bg-purple`
      else if (props.blue) return tw`bg-blue`
      else return tw`bg-yellow`
    }}
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    transition-duration: 0.5s;
  }
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  &:hover {
    ${props => {
      if (props.magenta) return tw`text-magenta`
      else if (props.purple) return tw`text-purple`
      else if (props.blue) return tw`text-blue`
      else return tw`text-yellow`
    }}
  }
`

const NavLink = props => {
  return <StyledLink {...props}>{props.children}</StyledLink>
}

export default NavLink
