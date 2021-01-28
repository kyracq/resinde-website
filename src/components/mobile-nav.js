import tw, { styled } from "twin.macro"
import React, { useState } from "react"
import { Link } from "gatsby"

const MenuDiv = styled.div`
  padding-top: 3rem;
`
const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => (props.open ? `100%` : `0`)};
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: black;
  opacity: 1;
  color: #fafafa;
  transition: height 0.3s ease;
  z-index: 2;
`

const StyledDiv = styled.div`
  ${tw`hidden mobile:flex`}
  height: 32px;
  width: 32px;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TopLine = styled.div`
  height: 2px;
  width: 20px;
  background-color: ${props => props.color};
  transition: all 0.2s ease;
  transform: ${props => (props.open ? `rotate(45deg)` : `none`)};
  transform-origin: top left;
  margin-bottom: 5px;
  z-index: 9;
`
const MiddleLine = styled.div`
  height: 2px;
  width: 20px;
  background-color: ${props => props.color};
  transition: all 0.2s ease;
  opacity: ${props => (props.open ? `0` : `1`)};
  transform: ${props => (props.open ? `translateX(-16px)` : `none`)};
  z-index: 9;
`

const BottomLine = styled.div`
  height: 2px;
  width: 20px;
  background-color: ${props => props.color};
  transition: all 0.2s ease;
  transform: ${props =>
    props.open ? `translateX(-1px) rotate(-45deg)` : `none`};
  transform-origin: top left;
  margin-top: 5px;
  z-index: 9;
`

const MenuItemDiv = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0;
  margin: 0 5%;
  animation-delay: ${props => props.delay};
`

const LineDiv = styled.div`
  width: 90%;
  height: 1px;
  background-color: gray;
  margin: 0 auto;
  animation-delay: ${props => props.delay};
`

const MobileNav = props => {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState("black")
  const toggle = () => {
    setOpen(open => !open)
    setColor(color => {
      if (color === "black") return "white"
      return "black"
    })
  }

  const navLinks = [
    { pageName: "About", pageUrl: "/about" },
    { pageName: "Work", pageUrl: "/work" },
    { pageName: "Team", pageUrl: "/team" },
    { pageName: "For Students", pageUrl: "/for-students" },
    { pageName: "Contact Us", pageUrl: "/contact" },
  ]

  const menuItems = navLinks.map((value, index) => {
    return (
      <MenuItem key={index} delay={`${index * 0.1}s`}>
        <Link onClick={toggle} to={value.pageUrl}>
          {value.pageName}
        </Link>
      </MenuItem>
    )
  })

  return (
    <div>
      <MenuButton open={open} toggle={toggle} color={color} />
      <Menu open={open}>{menuItems}</Menu>
    </div>
  )
}

const MenuItem = props => {
  return (
    <div>
      <MenuItemDiv delay={props.delay}>{props.children}</MenuItemDiv>
      <LineDiv delay={props.delay} />
    </div>
  )
}

const Menu = props => {
  if (props.open) {
    return (
      <ContainerDiv open={props.open}>
        <MenuDiv>{props.children}</MenuDiv>
      </ContainerDiv>
    )
  } else {
    return <ContainerDiv open={props.open} />
  }
}

const MenuButton = props => (
  <StyledDiv onClick={props.toggle}>
    <TopLine color={props.color} open={props.open} />
    <MiddleLine color={props.color} open={props.open} />
    <BottomLine color={props.color} open={props.open} />
  </StyledDiv>
)

MobileNav.propTypes = {}

MobileNav.defaultProps = {}

export default MobileNav
