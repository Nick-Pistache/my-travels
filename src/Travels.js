import React from "react";
import Travel from './Travel';
// src/Quotes.js
const travels = [
  {
    destination:
      "Paris",
      country: "France",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Eiffel_trocadero_i.jpg/250px-Eiffel_trocadero_i.jpg",
      distance   : "1000Km" 
  },
  {
    destination: "Berlin.",
    country: "Germany",
    photo:
      "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F10.2F18.2Fa8d03c5a-4b7f-42f8-ab2c-61404c570acd.2Ejpeg/750x375/background-color/ffffff/quality/70/coup-darret-pour-la-croissance-allemande-freinee-par-lautomobile-1315714.jpg",
    distance   : "2000Km"    
  },
  {
    destination: "Mercazo",
    country: "Spain",
    photo:
      "https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fle-pont-romain-et-la-mosquee-de-cordoue.2F2048048-1-fre-FR.2Fle-pont-romain-et-la-mosquee-de-cordoue.2Ejpg/1150x660/background-color/ffffff/quality/70/espagne-la-mezquita-de-cordoue-monument-majeur-de-l-architecture-islamique.jpg",
    distance   : "1000Km" 
  },
  {
    destination:
      "London",
      country: "England",
    photo:
      "https://cdn.coxandkings.com/cnkus/resources/images/countries/england.jpg",
    distance   : "1000Km" 
  },
  {
    destination:
      "Ankara",
      country: "Turquey",
    photo:
      "https://www.mba-multimedia.com/wp-content/uploads/2019/01/turquie.jpg",
    distance   : "3000Km" 
  }
];

const Travels =() => (
  <div>
    {travels.map(travel => (
      <Travel key={travel.toString()}{...travel}/>
    ))}
  </div>
);

export default Travels;