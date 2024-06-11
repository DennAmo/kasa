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
        <div className="logement__container__title">
          <h1 className="logement__container__title__h1">{title}</h1>
          <p className="logement__container__title__p">{location}</p>
          <div className="logement__container__tags">
          {tags.map((tagArray, index) => (
            <Tag key={index} content={tagArray} />
          ))}
        </div>
        </div>
        <div className="logement__container__rate">
        <div className="logement__container__rate__host">
          <Host name={host.name} picture={host.picture} />
        </div>
          <Rate content={rating} />
        </div>

      </div>
      <div className="logement__collapse">
      <div className="logement__collapse__container">
        <Collapse content= <p>{description}</p> 
        title="Description" />

     
        </div>
        <div className="logement__collapse__container">
        <Collapse content={
          <ul>{equipments.map((equipmentArray, index) => (
                <li key={index}>{equipmentArray}</li>
              ))}
            </ul>
          } 
          title="Équipements"/>
</div>
</div>


    </section>
  );
};

export default LogementPageDisplay;
