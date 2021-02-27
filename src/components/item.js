import React from "react"
import tw, { styled } from "twin.macro"
import StyledLink from "./styled-link"
import Img from "gatsby-image/withIEPolyfill"

const ItemContainer = styled(props => <div {...props}></div>)`
  width: 100%;
  height: ${props => props.height};
`

const ItemDetails = styled.div`
  padding-top: 10px;
  padding-left: 1%;
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

// Add back Link around Image with to prop when projects released
const Item = props => {
  return (
    <ItemContainer key={props.key} height={props.height}>
      <Image
        fixed={props.src}
        alt={props.altText}
        objectFit="cover"
        objectPosition="center"
        style={{
          width: "100%",
          height: "75%",
          borderRadius: "25px",
          backgroundColor: "black",
        }}
      />
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

export default Item
