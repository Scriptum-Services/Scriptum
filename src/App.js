import React from "react";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Serviceproject from "./pages/Serviceproject";
import Servicedissertation from "./pages/Servicedissertation";
import Serviceparaphasing from "./pages/Serviceparaphasing";
import Servicecitation from "./pages/Servicecitation";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Contactpop from "./Components/Contactpop";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Serviceproject />} />
            <Route path="/dissertation" element={<Servicedissertation />} />
            <Route path="/paraphasing" element={<Serviceparaphasing />} />
            <Route path="/citation" element={<Servicecitation />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Contactpop />
    </>
  );
}

export default App;
