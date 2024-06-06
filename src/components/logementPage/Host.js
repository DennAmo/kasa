import React from 'react';

function Host(item) {
    return (
      <>
        <span className="nom-proprietaire">{item.name}</span>
        <img
          className="photo-proprietaire"
          src={item.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;