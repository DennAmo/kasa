import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import LogementData from "../../datas/logement.json"
import Carrousel from "./Carrousel";
import Tag from "./Tag"
import Collapse from "../Collapse"
import Rate from "./Rate";
import Host from "./Host";


const LogementPageDisplay = () => {
  const { id } = useParams();
  const [PageLogement, setPageLogement] = useState(null);

  useEffect(() => {
    const foundLogement = LogementData.find((logement) => logement.id === id);
    setPageLogement(foundLogement);
  }, [id]);

  const renderEquipements = () => {
    return PageLogement.equipments.map((equipment, index) => (
      <ul key={index}>
        <li>{equipment}</li>
      </ul>
    ));
  };

  if (PageLogement === null) {
    return <div>Loading...</div>;
  }

  if (!PageLogement) {
    return <Navigate replace to="/404" />;
  }

  return (
    <section className="logement">
      <Carrousel slides={PageLogement.pictures} />
      <div className="logement__container">
        <div className="logement__description">
          <span className="logement__description__title">{PageLogement.title}</span>
          <span className="logement__description__location">{PageLogement.location}</span>
        </div>
        <div className="logement__tag">
        {PageLogement.tags.map((tag, i) => (
            <Tag key={i} nom={tag} />
          ))}
        </div>
        <div className="logement__host">
          <Host name={PageLogement.host.name} picture={PageLogement.host.picture} />
        </div>
        <div className="logement__rate">
          <Rate score={PageLogement.rating} />
        </div>
      </div>
      <div className="collapse__layout">
        <Collapse content={PageLogement.description} title="Description" />
      </div>
      <div className="collapse__layout">
      <Collapse content={renderEquipements()} title="Équipements" />
      </div>
    </section>
  )
}

export default LogementPageDisplay
