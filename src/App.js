import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import LogementPage from "./pages/LogementPage.js";
import "./styles/app.scss";
import Header from "./components/header-footer/Header.js";
import Footer from "./components/header-footer/Footer.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<LogementPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
