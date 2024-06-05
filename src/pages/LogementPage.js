import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementPageDisplay from "../components/logementPage/LogementPageDisplay";

const LogementPage = () => {
    return (
        <div className="aboutLogement">
            <Header />
            <main>
                <LogementPageDisplay />
            </main>
            <Footer />
        </div>
    )
}

export default LogementPage;