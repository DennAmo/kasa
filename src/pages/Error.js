import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";


const Home = () => {
    return (

        <div className="error">
            <Header />
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
            <Footer />
        </div>


    )
}

export default Home