import React from "react";

function Tag({ content }) {
  return (
    <div className="logement__container__tags__layout">
      <span className="logement__container__tags__layout__button">{content}</span>
    </div>
  );
}

export default Tag;
