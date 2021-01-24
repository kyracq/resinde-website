import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Image = styled.div`
  ${tw`w-96 h-48 bg-black`}
  borderRadius: 100;
`

const Item = (props) => (
  <div>
      <Image />
      <h3>{props.title}</h3>
      <p>{props.copy}</p>
  </div>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;