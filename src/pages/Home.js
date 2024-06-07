import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/index/Gallery";
import BannerHome from "../assets/bannerhome.jpg"

const Home = () => {
    return (
            <main>
                 <Banner texte="Chez vous, partout et ailleurs" image={BannerHome} />
                <Gallery />
            </main>
    )
}

export default Home