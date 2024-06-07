import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import LogementData from "../../datas/logement.json";
import Carrousel from "./Carrousel";
import Tag from "./Tag";
import Collapse from "../Collapse";
import Rate from "./Rate";
import Host from "./Host";
import Loading from "./Loading";

const LogementPageDisplay = () => {
  const { id } = useParams();
  const [pageLogement, setPageLogement] = useState(null);

  useEffect(() => {
    const foundLogement = LogementData.find((logement) => logement.id === id);
    setPageLogement(foundLogement || false);
  }, [id]);

  if (pageLogement === null) {
    return <Loading />;
  }

  if (!pageLogement) {
    return <Navigate replace to="/404" />;
  }

  const { pictures, title, location, tags, host, rating, description, equipments } = pageLogement;

  return (
    <section className="logement">
      <Carrousel slides={pictures} />
      <div className="logement__container">
        <div className="logement__description">
          <h1 className="logement__description__title">{title}</h1>
          <p className="logement__description__location">{location}</p>
        </div>
        <div className="logement__tag">
          {tags.map((tag, index) => (
            <Tag key={index} nom={tag} />
          ))}
        </div>
        <div className="logement__host">
          <Host name={host.name} picture={host.picture} />
        </div>
        <div className="logement__rate">
          <Rate score={rating} />
        </div>
      </div>
      <div className="collapse__layout">
        <Collapse content=
        {description} title="Description" />
      </div>
      <div className="collapse__layout">
        <Collapse content={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
          title="Équipements"
        />
      </div>
    </section>
  );
};

export default LogementPageDisplay;
