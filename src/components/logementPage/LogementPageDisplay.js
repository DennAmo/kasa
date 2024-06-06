import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import LogementData from "../../datas/logement.json"
import Carrousel from "./Carrousel";
import Tag from "./Tag";
import Collapse from "../Collapse"

const LogementPageDisplay = () => {
    const { id } = useParams();
    const [PageLogement, setPageLogement] = useState(null);

    useEffect(() => {
        const foundLogement = LogementData.find((logement) => logement.id === id);
        setPageLogement(foundLogement);
      }, [id]);

      const renderTags = PageLogement && PageLogement.tags ?
      PageLogement.tags.map((tag, i) => {
          return <Tag key={i} nom={tag} />;
      }) : null;


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
            <Carrousel slides={PageLogement?.pictures} />
            <div className="logement__container">
                <div className="collapse__layout">
                <Collapse content={PageLogement.description} title="Description" />
                </div>
                <div className="collapse__layout">
                <Collapse content={renderEquipements()} title="Équipements" />
</div>
                    {renderTags}
            </div>
        </section>
    )
}

export default LogementPageDisplay