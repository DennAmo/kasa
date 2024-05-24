import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from './pages/Home.js';
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import "./styles/app.scss"

const App = () => {
  return (
    <HashRouter>
      <Routes> 
        <Route path="/" element={<Navigate replace to="/accueil" />} /> 
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
