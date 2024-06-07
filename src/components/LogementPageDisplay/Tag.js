import React from "react";

function Tag({ nom }) {
  return (
    <div className="logement__container__tags__layout">
      <span className="logement__container__tags__layout__button">{nom}</span>
    </div>
  );
}

export default Tag;
