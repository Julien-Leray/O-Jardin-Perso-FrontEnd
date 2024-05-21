import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { actionLogOut } from '../../../store/reducers/user';
import { removeTokenJwtFromAxiosInstance } from '../../../axios/axios';

function ConnexionBtn() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const dispatch = useAppDispatch();

  return (
    <div>
      {!isLogged && (
        <NavLink to="/connexion">
          <button
            className="px-6 py-3 rounded-full bg-[#F6D50E] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
            type="button"
          >
            Connexion / Inscription
          </button>
        </NavLink>
      )}
      {isLogged && (
        <button
          className="px-6 py-3 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
          type="button"
          onClick={() => {
            dispatch(actionLogOut());
            removeTokenJwtFromAxiosInstance();
          }}
        >
          Déconnexion
        </button>
      )}
    </div>
  );
}

export default ConnexionBtn;
