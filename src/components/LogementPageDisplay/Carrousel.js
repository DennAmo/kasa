import React, { useState } from "react";

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const next = () => {
    setCurrent(current + 1);
    if (current === slides.length - 1) {
      setCurrent(0);
    }
  };

  const previous = () => {
    setCurrent(current - 1);
    if (current === 0) {
      setCurrent(slides.length - 1);
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
        <img src={slides[current]} alt="appartement" className="carrousel__image" />
      </div>
      {length > 1 && (
        <p className="carrousel__indicator">
          {current + 1}/{length}
        </p>
      )}
    </div>

  );
}

export default Carrousel;
