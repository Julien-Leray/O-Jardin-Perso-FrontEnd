import React from 'react';
import { User, Lock, XCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';

function Inscription() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navigue à l'emplacement précédent
  };

  return (
    <div className="flex flex-col justify-center rounded-lg items-center ">
      <button type="button" className="self-end pr-10" onClick={goBack}>
        <XCircle size="40" />
      </button>
      <div className="w-5/6 md:w-3/5 shadow-3xl ">
        <div className="text-center font-bold text-3xl mb-2">
          Créer un compte
        </div>

        <form
          className="p-8 md:p-8"
          autoComplete="off"
          // onSubmit={ }
        >
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre prénom et nom :
          </label>
          <div className="flex items-center mb-2 md:mb-4">
            <input
              required
              placeholder="Prénom"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-6 p-4 border border-black "
            />

            <input
              required
              placeholder="Nom"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-6 p-4 border border-black ml-4"
            />
          </div>

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre email :
          </label>
          <div className="flex items-center mb-4 md:mb-8">
            <User className="absolute ml-3 " />
            <input
              required
              placeholder="Email"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-12 p-4 border border-black "
            />
          </div>

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre mot de passe :
          </label>
          <div className="flex items-center mb-2 md:mb-4">
            <Lock className="absolute ml-3" />

            <input
              required
              placeholder="Mot de passe"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-12 p-4 border border-black"
            />
          </div>

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirmer votre mot de passe :
          </label>
          <div className="flex items-center mb-4 md:mb-8">
            <Lock className="absolute ml-3" />

            <input
              required
              placeholder="Confirmer le mot de passe"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-12 p-4 border border-black"
            />
          </div>
          <div className="items-center text-center md:rounded-full  font-bold text-lg mb-2">
            <span className="mr-2 self-center">Adresse postale</span>
            <span className="rounded-full bg-[#16A1AF] uppercase px-4 py-1 text-xs mr-3 text-white">
              Facultatif
            </span>
          </div>

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre adresse :
          </label>
          <div className="flex items-center mb-2 md:mb-4">
            <input
              placeholder="Adresse - Champ 1"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-6 p-4 border border-black "
            />
          </div>
          <div className="flex items-center mb-2 md:mb-4">
            <input
              placeholder="Adresse - Champ 2"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-6 p-4 border border-black "
            />
          </div>
          <div className="flex items-center mb-4 md:mb-8">
            <input
              placeholder="Code postal"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-6 p-4 border border-black "
            />
            <input
              placeholder="Ville"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-6 p-4 border border-black ml-4"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full text-white bg-[#16A1AF] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2 mb-2 md:mb-4"
          >
            Continuer
          </button>
          <button
            type="button"
            onClick={goBack}
            className="w-full px-6 py-3 rounded-full bg-[#F6D50E] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
          >
            Annuler
          </button>
        </form>
        {/* <div className="text-red-600 text-center mb-4">
          Votre compte a bien été créé
        </div> */}
      </div>
    </div>
  );
}

export default Inscription;
