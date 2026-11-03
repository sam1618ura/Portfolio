import "./App.css";
import { Routes, Route } from "react-router-dom";
import SaVa from "../src/pages/SaVa.jsx";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "../src/components/Navbar";
import Contact from "../src/pages/Contact";
import Illustrations from "../src/pages/Illustrations.jsx";
import CharacterDesign from "../src/pages/CharacterDesign.jsx";
import SousPression from "../src/pages/SousPression.jsx";
import BathTrip from "../src/pages/BathTrip.jsx";
import Home from "../src/pages/Home.jsx";
import Fantasmatic from "../src/pages/Fantasmatic.jsx";
import CauchemarCuisine from "../src/pages/CauchemarCuisine.jsx";
import AboutMe from "../src/pages/AboutMe.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character-design" element={<CharacterDesign />} />
        <Route path="/sous-pression" element={<SousPression />} />
        <Route path="/bath-trip" element={<BathTrip />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/fantasmatic" element={<Fantasmatic />} />
        <Route path="/cauchemar-cuisine" element={<CauchemarCuisine />} />
        <Route path="/sa-va" element={<SaVa />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}
