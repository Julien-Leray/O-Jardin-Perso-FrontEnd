import React, { FormEvent } from 'react';
import { User, Lock, XCircle } from 'react-feather';
import { NavLink, useNavigate } from 'react-router-dom';
import Input from './ConnexionInput';
import { useAppSelector } from '../../../hooks/redux';

interface LoginFormProps {
  email: string;
  password: string;
  changeField: (value: string, name: 'email' | 'password') => void;
  handleLogin: () => void;
}

function Connexion({
  email,
  password,
  changeField,
  handleLogin,
}: LoginFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
  };

  const handleChangeField = (name: 'email' | 'password') => (value: string) => {
    changeField(value, name);
  };

  const loginError = useAppSelector((state) => state.user.error);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navigue à l'emplacement précédent
  };

  return (
    <div className="flex flex-col justify-center rounded-lg items-center">
      <button type="button" className="self-end" onClick={goBack}>
        <XCircle size="40" />
      </button>
      <div className="w-5/6 md:w-3/5 shadow-3xl ">
        <form className="p-8 md:p-8" autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex items-center mb-6 md:mb-8 b">
            <User className="absolute ml-3 " />
            <Input
              type="text"
              placeholder="Email"
              onChange={handleChangeField('email')}
              value={email}
            />
          </div>
          <div className="flex items-center mb-4 md:mb-8">
            <Lock className="absolute ml-3" />
            <Input
              placeholder="Mot de passe"
              value={password}
              type="password"
              onChange={handleChangeField('password')}
            />
          </div>
          <div className="text-red-600 text-center mb-4"> {loginError}</div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full text-white bg-[#16A1AF] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2 mb-6 md:mb-8 b"
          >
            Continuer
          </button>
          <NavLink to="/inscription">
            <button
              type="button"
              className="w-full px-6 py-3 rounded-full bg-[#F6D50E] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
            >
              S&apos;inscrire
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
