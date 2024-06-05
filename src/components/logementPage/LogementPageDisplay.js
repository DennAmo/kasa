import React from "react";
import { useParams } from "react-router-dom";
import LogementData from "../../datas/logement.json"
import Carrousel from "./Carrousel";
import Tag from "./Tag";

const LogementPageDisplay = () => {
    const { id } = useParams()

    const pageLogement = LogementData.find((logement) => logement.id === id)

    const tagsLogement = pageLogement && pageLogement.tags ?
        pageLogement.tags.map((tag, i) => {
            return <Tag key={i} nom={tag} />;
        }) : null;


    if (!pageLogement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <section className="logement">
            <Carrousel slides={pageLogement?.pictures} />
            <div className="logement__container">
                <div className="logement__tag">
                    {tagsLogement}
                </div>
            </div>
        </section>
    )
}

export default LogementPageDisplay