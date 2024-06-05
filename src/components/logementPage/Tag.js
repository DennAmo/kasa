import React from "react";

function Tag({ nom }) {
  return (
    <div className="logement__tag">
      <span className="logement__tag__button">{nom}</span>
    </div>
  );
}

export default Tag;
