import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous que Link est importé

function MonJardin() {
  return (
    <div>
      <h1>Mon Jardin</h1>
      <Link
        to="/mon_jardin/potager-virtuel"
        className="text-blue-500 hover:text-blue-700"
      >
        Gérez votre jardin virtuel ici.
      </Link>
    </div>
  );
}

export default MonJardin;
