import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { actionLogOut } from '../../../store/reducers/user';
import { removeTokenJwtFromAxiosInstance } from '../../../axios/axios';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConnexionBtn({ isOpen, setIsOpen }: MenuProps) {
  const isLogged = useAppSelector((state) => state.user.logged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {!isLogged && (
        <NavLink
          to="/connexion"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
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
            setIsOpen(!isOpen);
            dispatch(actionLogOut());
            removeTokenJwtFromAxiosInstance();
            navigate('/');
          }}
        >
          Déconnexion
        </button>
      )}
    </div>
  );
}

export default ConnexionBtn;
