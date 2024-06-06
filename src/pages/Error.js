import React from "react";

import { NavLink } from "react-router-dom";


const Home = () => {
    return (

        <div className="error">
            <main>
                <section className="error__container">
                    <p className="error__container__number">404
                    </p>
                    <p className="error__container__text">
                        Oups! La page que vous demandez n'existe pas.
                    </p>

                    <NavLink to="/" className="error__container__link">
                        Retourner sur la page d'accueil
                    </NavLink>

                </section>
            </main>
        </div>


    )
}

export default Home