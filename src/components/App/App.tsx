import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './App.scss';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Fruits from '../Fruits/Fruits';
import SearchBar from '../SearchBar/SearchBar';
import FruitDetail from '../FruitsDetail/FruitDetail';
import Legumes from '../Legumes/Legumes';
import LegumeDetail from '../LegumeDetail/LegumeDetail';
import Tutoriels from '../Tutoriels/Tutoriels';
import TutorielDetail from '../TutorielDetail/TutorielDetail';
import Inscription from '../Header/Inscription/Inscription';
import Connexion from '../Header/Connexion/Connexion';
import MonJardin from '../MonJardin/MonJardin';
import PotagerVirtuel from '../PotagerVirtuel/PotagerVirtuel';
import GestionProfil from '../GestionProfil/GestionProfil';
import GestionAlertes from '../GestionAlertes/GestionAlertes';
import MentionsLegales from '../MentionsLegales/MentionLegales';
import PolitiqueConfidentialite from '../PolitiqueConfidentialite/PolitiqueConfidentialite';
import Contact from '../Contact/Contact';

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
