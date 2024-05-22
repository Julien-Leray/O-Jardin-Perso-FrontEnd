import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import actionCheckLogin from '../../store/thunks/checkLogin';

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

  return (
    <div className="page">
      {location.pathname !== '/connexion' &&
        location.pathname !== '/inscription' && <SearchBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/fruits/:nomFruit" element={<FruitDetail />} />
        <Route path="/legumes" element={<Legumes />} />
        <Route path="/legumes/:nomLegume" element={<LegumeDetail />} />
        <Route path="/tutos" element={<Tutoriels />} />
        <Route path="/tutos/:titre" element={<TutorielDetail />} />
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
                dispatch(actionCheckLogin());
              }}
            />
          }
        />
        <Route path="/inscription" element={<Inscription />} />
        {logged && <Route path="/mon_jardin" element={<MonJardin />} />}

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
