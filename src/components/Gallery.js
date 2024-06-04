import React from "react";
import { Link } from "react-router-dom";
import logements from "../datas/logement.json"
import Card from "./Card";
import Home from "../pages/Home";

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="gallery__layout">
            {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={Home}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
            </div>
        </section>
    )
}

export default Gallery