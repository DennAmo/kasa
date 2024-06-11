import React from "react";

function Host({ name, picture }) {
  return (
    <>
      <span className="host">{name}</span>
      <img className="host__img" src={picture} alt="Propriétaire" />
    </>
  );
}

export default Host;
