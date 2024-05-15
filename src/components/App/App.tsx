import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from '../Home/Home';
import Fruits from '../Fruits/Fruits';
import FruitDetail from '../FruitsDetail/FruitDetail';
import Legumes from '../Legumes/Legumes';
import LegumeDetail from '../LegumeDetail/LegumeDetail';
import Tutoriels from '../Tutoriels/Tutoriels';
import TutorielDetail from '../TutorielDetail/TutorielDetail';
import Connexion from '../Connexion/Connexion';
import Inscription from '../Inscription/Inscription';
import MonJardin from '../MonJardin/MonJardin';
import PotagerVirtuel from '../PotagerVirtuel/PotagerVirtuel';
import GestionProfil from '../GestionProfil/GestionProfil';
import GestionAlertes from '../GestionAlertes/GestionAlertes';
import MentionsLegales from '../MentionsLegales/MentionLegales';
import PolitiqueConfidentialite from '../PolitiqueConfidentialite/PolitiqueConfidentialite';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
