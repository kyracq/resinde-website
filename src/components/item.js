import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const ItemContainer = styled.div`
  ${tw`space-y-4`}
  width: 100%;
  height: 500px;
`

const Image = styled.div`
  width: 100%;
  height: 70%;
  background-color: black;
  border-radius: 25px;
`

const ItemDetails = styled.div`
  padding-left: 1%;
`

const Item = (props) => (
  <ItemContainer>
      <Image />
      <ItemDetails>
        <Link to=""><h3>{props.title}</h3></Link>
        <p>{props.copy}</p>
      </ItemDetails>
  </ItemContainer>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;