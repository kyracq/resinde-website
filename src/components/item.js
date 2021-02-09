import React from "react"
import tw, { styled } from "twin.macro"
import StyledLink from "./styled-link"
import { Link } from "gatsby"

const ItemContainer = styled(props => <div {...props}></div>)`
  ${tw`space-y-4`}
  width: 100%;
  height: ${props => props.height};
`

const ImageContainer = styled(props => <div {...props}></div>)`
  width: 100%;
  height: 75%;
  background-color: black;
  border-radius: 25px;
  overflow: hidden;
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`
// Add back to prop to Links when projects released
const Item = (props) => {
  return (
    <ItemContainer key={props.key} height={props.height}>
      <ImageContainer purple={props.purple} blue={props.blue} >
        <Link> 
          <Image src={props.src} alt={props.altText} />
        </Link>
      </ImageContainer>
      <ItemDetails>
        <h3>
          <StyledLink
            purple={props.purple}
            blue={props.blue}
            magenta={props.magenta}
            yellow={props.yellow}
          >
            {props.title}
          </StyledLink>
        </h3>
        <p>{props.subtitle}</p>
      </ItemDetails>
    </ItemContainer>
  )
}

export default Item;