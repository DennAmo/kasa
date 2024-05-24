import React from "react";
import bannerhome from "../assets/bannerhome.jpg"

function Banner() {

return (
    <div className="banner">
    <img className="banner__image" src={bannerhome} alt="Banniere"></img>
   <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </div>
)
}

export default Banner