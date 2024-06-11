import React, { useState } from "react";

function Carrousel({ slides }) {
  const [index, setIndex] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const next = () => {
    setIndex(index + 1);
    if (index === slides.length - 1) {
      setIndex(0);
    }
  };

  const previous = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(slides.length - 1);
    }
  };

  return (
    <div className="carrousel">
      {length > 1 && (
        <p className="carrousel__leftarrow carrousel__arrow" onClick={previous}>
          <i className="fa-solid fa-4x fa-chevron-left"></i>
        </p>
      )}
      {length > 1 && (
        <p className="carrousel__rightarrow carrousel__arrow" onClick={next}>
          <i className="fa-solid fa-4x fa-chevron-right"></i>
        </p>
      )}
      
      <div className="carrousel__slider">
        <img src={slides[index]} alt="appartement" className="carrousel__image" />
      </div>
      {length > 1 && (
        <p className="carrousel__indicator">
          {index + 1}/{length}
        </p>
      )}
    </div>

  );
}

export default Carrousel;
