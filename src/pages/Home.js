import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery"

const Home = () => {
    return (
        <div className="home">
            <main>
                <Banner />
                <Gallery />
            </main>
        </div>
    )
}

export default Home