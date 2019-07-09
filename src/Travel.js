import React from 'react';

const Travel = ({destination,country,photo,distance}) => (
<figure>
    <img alt={country} src ={photo}></img>
    <figcapation>
        <blocquote>{destination}</blocquote>
        <cite>{distance}</cite>
    </figcapation>
</figure>
);

export default Travel;