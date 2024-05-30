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
import {
  fetchAllProducts,
  fetchAllProductsbyCategory,
} from '../../store/thunks/productThunks';
import { Product } from '../../@types/types';

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
  }, []);

  const { tutorials } = useAppSelector((state) => state.tutoriels);
  const allProducts = useAppSelector((state) => state.products.allProducts);

  const sortedProducts = {
    fruits: [] as Product[],
    legumes: [] as Product[],
  };

  allProducts.forEach((product: Product) => {
    if (product.category_id === 1) {
      sortedProducts.fruits.push(product);
    } else {
      sortedProducts.legumes.push(product);
    }
    return sortedProducts;
  });

  console.log(allProducts);

  return (
    <div className="page">
      {location.pathname !== '/connexion' &&
        location.pathname !== '/inscription' && <SearchBar />}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              tutorials={tutorials}
              legumes={sortedProducts.legumes}
              fruits={sortedProducts.fruits}
            />
          }
        />
        <Route
          path="/fruits"
          element={<Fruits fruits={sortedProducts.fruits} logged={logged} />}
        />
        <Route path="/fruits/:name" element={<FruitDetail />} />
        <Route
          path="/legumes"
          element={<Legumes legumes={sortedProducts.legumes} logged={logged} />}
        />
        <Route path="/legumes/:name" element={<LegumeDetail />} />
        <Route path="/tutos" element={<Tutoriels tutorials={tutorials} />} />
        <Route
          path="/tutos/:title"
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
        <Route
          path="/mon_jardin"
          element={logged && <MonJardin logged={logged} />}
        />

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
