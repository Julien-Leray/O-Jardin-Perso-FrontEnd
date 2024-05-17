import React from 'react';
import { useState } from 'react';


function Home() {

  const [tuto, setTuto] = useState([]);
  return (
    <div>
      <h1>Page d'Accueil</h1>
      <p>Bienvenue sur notre site web dédié au jardinage!</p>
    </div>
  );
}

export default Home;
