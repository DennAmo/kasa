import React from "react";
import bannerhome from "../assets/bannerhome.jpg"

function Banner() {

return (
    <div className="banner">
    <img className="banner__image" src={bannerhome} alt="Banniere"></img>
   <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
    </div>
)
}

export default Banner