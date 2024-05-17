import React, { useState } from 'react';

// Component SquareMaker qui génère une grille de carrés
function SquareMaker({ horizontal, vertical }) {
  // Création d'un tableau de divs pour les carrés en utilisant map sur un tableau de taille horizontal * vertical
  const squares = Array.from({ length: horizontal * vertical }).map(
    (_, index) => (
      // Chaque carré est un div avec une bordure noire et une taille définie de 10x10 pixels
      <div key={index} className="border border-black w-10 h-10" />
    )
  );

  // Le retour de ce composant inclut un div configuré comme une grille CSS
  return (
    <div
      className="grid"
      style={{
        // La propriété gridTemplateColumns crée un nombre de colonnes égal à 'horizontal', chaque colonne de 40px de large
        gridTemplateColumns: `repeat(${horizontal}, 40px)`,
        // Centre horizontalement les carrés dans le conteneur si le nombre total ne remplit pas l'espace disponible
        justifyContent: 'center',
      }}
    >
      {squares}
    </div>
  );
}

// Composant principal PotagerVirtuel
function PotagerVirtuel() {
  // Utilisation du hook useState pour gérer les états de dimensions horizontales et verticales
  const [horizontal, setHorizontal] = useState(5); // Initialisation à 5 colonnes
  const [vertical, setVertical] = useState(5); // Initialisation à 5 rangées

  // Rendu du composant avec une disposition centrée et du style
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-xl rounded-lg text-center">
        <h1 className="text-xl font-bold mb-2">Potager Virtuel</h1>
        <p>Planifiez et visualisez votre potager virtuel.</p>
        <div className="flex justify-center my-4">
          <label className="mr-4">
            Horizontal:
            <input
              type="number"
              value={horizontal}
              onChange={(e) => setHorizontal(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1 w-16 text-center"
            />
          </label>
          <label>
            Vertical:
            <input
              type="number"
              value={vertical}
              onChange={(e) => setVertical(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1 w-16 text-center"
            />
          </label>
        </div>

        <SquareMaker horizontal={horizontal} vertical={vertical} />
      </div>
    </div>
  );
}

export default PotagerVirtuel;
