import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure> 
    <img src={photo} alt={destination} />   
    <blockquote>{country}</blockquote>
    <blockquote>{distance}</blockquote>
  </figure>
);

export default Travel;