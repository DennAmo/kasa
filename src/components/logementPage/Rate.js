import React from 'react';
import emptyStar from "../../assets/rating/emptystar.png";
import fullStar from "../../assets/rating/fullstar.png";


function Rate(item) {
      const score = item.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate">
        {notes.map((note) =>
          score >= note ? (
            <img
              key={note.toString()}
              className="rate__etoile"
              src={fullStar}
              alt="star"
            />
          ) : (
            <img
              key={note.toString()}
              className="rate__etoile"
              src={emptyStar}
              alt="star"
            />
          )
        )}
      </div>
    );
}

export default Rate;
