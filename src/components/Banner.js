import React from "react";

function Banner ({image, texte}) {

return (
    <div className="banner">
    <img className="banner__image" src={image} alt="Banniere"></img>
   <h1 className="banner__title">{texte}</h1>
    </div>
)
}

export default Banner