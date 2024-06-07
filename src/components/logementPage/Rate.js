import React from 'react';
import emptyStar from "../../assets/rating/emptystar.png";
import fullStar from "../../assets/rating/fullstar.png";

const Rate = ({ score }) => {
  const notes = [1, 2, 3, 4, 5];
  
  return (
    <div className="rate">
      {notes.map(note => (
        <img
          key={note}
          className="rate__star"
          src={score >= note ? fullStar : emptyStar}
          alt={score >= note ? "full star" : "empty star"}
        />
      ))}
    </div>
  );
}

export default Rate;
