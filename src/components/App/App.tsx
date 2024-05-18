import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Page from '../Page/Page';

import { getTokenAndPseudoFromLocalStorage } from '../../localStorage/localstorage';
import { actionLogIn } from '../../store/reducers/user';
import { addTokenJwtToAxiosInstance } from '../../axios/axios';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { jwt, firstname } = getTokenAndPseudoFromLocalStorage();

    if (jwt) {
      dispatch(actionLogIn({ jwt, firstname }));
      addTokenJwtToAxiosInstance(jwt);
    } else {
      console.log('rien dans le localstorage');
    }
  }, []);

  return (
<<<<<<< HEAD
    <>
      <div className="w-full md:w-5/6 md:mx-auto">
        <Header />
        <Page />
      </div>
      <Footer />
    </>
=======
    <div className="flex flex-col justify-between min-h-screen	">
      <div>
        <Header />
      </div>

      <div className="w-full md:w-3/4 md:mx-auto flex-1">
        {location.pathname !== '/connexion' &&
          location.pathname !== '/inscription' && <SearchBar />}

        <div className="route">
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
            <Route
              path="/gestion_profil/alertes"
              element={<GestionAlertes />}
            />
            <Route path="/mentions_legales" element={<MentionsLegales />} />
            <Route
              path="/confidentialite"
              element={<PolitiqueConfidentialite />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
>>>>>>> dev
  );
}

export default App;
