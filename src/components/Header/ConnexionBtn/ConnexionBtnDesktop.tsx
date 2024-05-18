import React from 'react';
import ConnexionBtn from './ConnexionBtn';

function ConnexionDesktop() {
  return (
    <div className="hidden md:block absolute pt-6 top-2 right-2 py-2 px-4 top-4 right-4">
      <ConnexionBtn />
    </div>
  );
}

export default ConnexionDesktop;
