import React from "react";

function Host(item) {
  return (
    <>
      <span className="host">{item.name}</span>
      <img className="host__img" src={item.picture} alt="Propriétaire" />
    </>
  );
}

export default Host;
