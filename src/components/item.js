import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import tw from "twin.macro";

const Item = ({ title, copy, image }) => (
    <div>
        <img src={image} alt={title} width=/> 
        <h3>{title}</h3>
        <p>{copy}</p>
    </div>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;