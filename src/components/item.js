import React from "react"
import tw, { styled } from "twin.macro"
import StyledLink from "./styled-link"
import { Link } from "gatsby"

const ItemContainer = styled.div`
  ${tw`space-y-4`}
  width: 100%;
  height: 500px;
`

const ImageContainer = styled(props => <div {...props}></div>)`
  width: 100%;
  height: 70%;
  background-color: black;
  border-radius: 25px;
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  &:hover {
    ${props => {
      if (props.purple) return tw`bg-purple`
      else if (props.blue) return tw`bg-blue`
      else if (props.magenta) return tw`bg-magenta`
      else return tw`bg-yellow`
    }}
  }
`

const ItemDetails = styled.div`
  padding-left: 1%;
`

const Item = (props) => {
  return (
    <ItemContainer key={props.key}>
      <ImageContainer purple={props.purple} blue={props.blue} >
        <Link to={props.link}>
          <img src="" alt={props.altText} />
        </Link>
      </ImageContainer>
      <ItemDetails>
        <h3>
          <StyledLink
            to={props.link}
            purple={props.purple}
            blue={props.blue}
            magenta={props.magenta}
            yellow={props.yellow}
          >
            {props.title}
          </StyledLink>
        </h3>
        <p>{props.excerpt}</p>
      </ItemDetails>
    </ItemContainer>
  )
}

export default Item;