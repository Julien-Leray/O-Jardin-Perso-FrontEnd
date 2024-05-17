import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './App.scss';

import Home from '../Page/Home/Home';
import Header from '../Header/Header';
import Fruits from '../Page/Products/Fruits/Fruits';
import SearchBar from '../SearchBar/SearchBar';
import FruitDetail from '../Page/Products/Fruits/FruitDetail';
import Legumes from '../Page/Products/Legumes/Legumes';
import LegumeDetail from '../Page/Products/Legumes/LegumeDetail';
import Tutoriels from '../Page/Tutoriels/Tutoriels';
import TutorielDetail from '../Page/Tutoriels/TutorielDetail';
import Inscription from '../Header/Inscription/Inscription';
import Connexion from '../Header/ConnexionBtn/ConnexionBtn';
import MonJardin from '../Page/MonJardin/MonJardin';
import PotagerVirtuel from '../Page/MonJardin/PotagerVirtuel/PotagerVirtuel';
import GestionProfil from '../Page/MonJardin/GestionProfil/GestionProfil';
import GestionAlertes from '../Page/MonJardin/GestionAlertes/GestionAlertes';
import MentionsLegales from '../Page/MentionsLegales/MentionLegales';
import PolitiqueConfidentialite from '../Page/PolitiqueConfidentialite/PolitiqueConfidentialite';
import Contact from '../Page/Contact/Contact';

function App() {
  return (
    <div className="App w-full md:w-3/4 md:mx-auto">
      <Header />
      <SearchBar />
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/fruits/:nom_fruit" element={<FruitDetail />} />
          <Route path="/legumes" element={<Legumes />} />
          <Route path="/legumes/:nom_legume" element={<LegumeDetail />} />
          <Route path="/tutos" element={<Tutoriels />} />
          <Route path="/tutos/:titre" element={<TutorielDetail />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/mon_jardin" element={<MonJardin />} />
          <Route
            path="/mon_jardin/potager-virtuel"
            element={<PotagerVirtuel />}
          />
          <Route path="/gestion_profil" element={<GestionProfil />} />
          <Route path="/gestion_profil/alertes" element={<GestionAlertes />} />
          <Route path="/mentions_legales" element={<MentionsLegales />} />
          <Route
            path="/confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <h1 className="text-3xl font-bold underline text-green-500">
          Hello world!
        </h1>

        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
