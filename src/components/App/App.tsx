import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './App.scss';

import Home from '../Home';
import Fruits from '../Fruits';
import Legumes from '../Legumes';
import FruitDetail from '../FruitDetail';
import LegumeDetail from '../LegumeDetail';
import Tutoriels from '../Tutoriels';
import TutorielDetail from '../TutorielDetail';
import Connexion from '../Connexion';
import Inscription from '../Inscription';
import MonJardin from '../MonJardin';
import PotagerVirtuel from '../PotagerVirtuel';
import GestionProfil from '../GestionProfil';
import GestionAlertes from '../GestionAlertes';
import MentionsLegales from '../MentionsLegales';
import PolitiqueConfidentialite from '../PolitiqueConfidentialite';
import Contact from '../Contact';

function App() {
  return (
    <div className="App w-full md:w-3/4 md:mx-auto">
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
        <h1 className="text-3xl font-bold underline text-pink-500">
          Hello world!
        </h1>
        <img src={logo} className="" alt="logo" />

        <p>
          Edit <code>src/components/App/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
