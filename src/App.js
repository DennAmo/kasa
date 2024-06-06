import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from './pages/Home.js';
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import LogementPage from "./pages/LogementPage.js";
import "./styles/app.scss"
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <HashRouter>
    <Header />
      <Routes> 
        <Route path="/" element={<Navigate replace to="/accueil" />} /> 
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<LogementPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
