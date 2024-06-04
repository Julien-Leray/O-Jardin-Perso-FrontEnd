import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Page from '../Page/Page';

import { getTokenFromLocalStorage } from '../../localStorage/localstorage';
import { actionLogIn } from '../../store/reducers/user';
import { addTokenToAxiosInstance } from '../../axios/axios';
import fetchAllProducts from '../../store/thunks/productThunks';
import fetchAllTutorials from '../../store/thunks/tutorielsThunk';
import actionGetDataUser from '../../store/thunks/myGardenThunks';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const loadingProducts = useAppSelector((state) => state.products.loading);
  const loadingTutos = useAppSelector((state) => state.tutoriels.loading);
  const errorProducts = useAppSelector((state) => state.products.error);
  const errorTutos = useAppSelector((state) => state.tutoriels.error);

  useEffect(() => {
    const { token } = getTokenFromLocalStorage();

    if (token) {
      dispatch(actionLogIn({ token }));
      addTokenToAxiosInstance(token);
      dispatch(actionGetDataUser());
    } else {
      // console.log('empty localstorage');
    }
  }, []);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllTutorials());
  }, []);

  return (
    <>
      {loadingTutos && loadingProducts && <Loader />}

      <div
        className={`flex flex-col justify-between min-h-screen bg-[#f9f9f9] ${
          loadingTutos && loadingProducts ? 'opacity-20' : ''
        }`}
      >
        <Header />
        <div className="w-full md:w-5/6 md:mx-auto flex-1">
          {location.pathname !== '/*' &&
            location.pathname !== '/gestion_profil' &&
            location.pathname !== '/contact' &&
            location.pathname !== '/gestion_profil' &&
            location.pathname !== '/inscription' && <SearchBar />}
          <Page />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
