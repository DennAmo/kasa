import React from "react";
import { useState } from "react";


//state
function Banner() {
    const texts = ['test', 'switch test', 'another text', 'yet another text'];
    const [index, setIndex] = useState(0);

    //handling
    const handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    //render
return (
    <div className="banner">
    <h1>{texts[index]}</h1>
    <button onClick={handleClick}>switch</button>
    </div>
)
}

export default Banner