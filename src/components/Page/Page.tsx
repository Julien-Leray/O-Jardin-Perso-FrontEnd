import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { boolean } from 'joi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import userAction from '../../store/thunks/userThunk';

import Home from './Home/Home';
import Fruits from './Products/Fruits/Fruits';
import Connexion from './Connexion/Connexion';

import SearchBar from '../SearchBar/SearchBar';
import FruitDetail from './Products/Fruits/FruitDetail';
import Legumes from './Products/Legumes/Legumes';
import LegumeDetail from './Products/Legumes/LegumeDetail';
import Tutoriels from './Tutoriels/Tutoriels';
import TutorielDetail from './Tutoriels/TutorielDetail';
import Inscription from './Inscription/Inscription';
import MonJardin from './MonJardin/MonJardin';
import PotagerVirtuel from './MonJardin/PotagerVirtuel/PotagerVirtuel';
import GestionProfil from './MonJardin/GestionProfil/GestionProfil';
import GestionAlertes from './MonJardin/GestionAlertes/GestionAlertes';
import MentionsLegales from './MentionsLegales/MentionLegales';
import PolitiqueConfidentialite from './PolitiqueConfidentialite/PolitiqueConfidentialite';
import Contact from './Contact/Contact';

import { actionChangeCredential } from '../../store/reducers/user';
import fetchAllTutorials from '../../store/thunks/tutorielsThunk';
import { fetchAllProductsbyCategory } from '../../store/thunks/productThunks';

function Page() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const logged = useAppSelector((state) => state.user.logged);

  const emailFormState = useAppSelector(
    (state) => state.user.credentials.email
  );
  const passFromState = useAppSelector(
    (state) => state.user.credentials.password
  );

  useEffect(() => {
    dispatch(fetchAllTutorials());
    dispatch(fetchAllProductsbyCategory());
  }, []);

  const { tutorials } = useAppSelector((state) => state.tutoriels);
  const { fruits, legumes } = useAppSelector(
    (state) => state.products.productsByCat
  );

  return (
    <div className="page">
      {location.pathname !== '/connexion' &&
        location.pathname !== '/inscription' && <SearchBar />}

      <Routes>
        <Route
          path="/"
          element={
            <Home tutorials={tutorials} legumes={legumes} fruits={fruits} />
          }
        />
        <Route
          path="/fruits"
          element={<Fruits fruits={fruits} logged={logged} />}
        />
        <Route path="/fruits/:nomFruit" element={<FruitDetail />} />
        <Route
          path="/legumes"
          element={<Legumes legumes={legumes} logged={logged} />}
        />
        <Route path="/legumes/:nomLegume" element={<LegumeDetail />} />
        <Route path="/tutos" element={<Tutoriels tutorials={tutorials} />} />
        <Route
          path="/tutos/:id"
          element={<TutorielDetail tutorials={tutorials} />}
        />
        <Route
          path="/connexion"
          element={
            <Connexion
              logged={logged}
              email={emailFormState}
              password={passFromState}
              changeField={(value, name) => {
                dispatch(
                  actionChangeCredential({
                    name,
                    value,
                  })
                );
              }}
              handleLogin={() => {
                dispatch(userAction.actionCheckLogin());
              }}
            />
          }
        />
        <Route
          path="/inscription"
          element={
            <Inscription
              handleVerifyEmail={(email) =>
                dispatch(userAction.actionVerifyEmailExist(email))
              }
              handleSignup={(newUser) =>
                dispatch(userAction.actionNewUser(newUser))
              }
            />
          }
        />
        <Route path="/mon_jardin" element={logged && <MonJardin />} />

        <Route
          path="/mon_jardin/potager-virtuel"
          element={<PotagerVirtuel />}
        />
        <Route path="/gestion_profil" element={<GestionProfil />} />
        <Route path="/gestion_profil/alertes" element={<GestionAlertes />} />
        <Route path="/mentions_legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default Page;
