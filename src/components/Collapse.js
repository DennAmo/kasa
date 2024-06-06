import React, { useState } from "react";

const Collapse = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false); // state du toggle 


  const display = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
      <div className="collapse__title" onClick={display}>
        <h2>{title}</h2>
        <span>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </div>

      <div className="collapse__content">
        {isOpen && <p>{content}</p>}
      </div>
      </>
  );
};

export default Collapse;