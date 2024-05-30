import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Page from '../Page/Page';

import { getTokenFromLocalStorage } from '../../localStorage/localstorage';
import { actionLogIn } from '../../store/reducers/user';
import { addTokenToAxiosInstance } from '../../axios/axios';
import { fetchAllProducts } from '../../store/thunks/productThunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { token } = getTokenFromLocalStorage();
    dispatch(fetchAllProducts());

    if (token) {
      dispatch(actionLogIn({ token }));
      addTokenToAxiosInstance(token);
    } else {
      console.log('empty localstorage');
    }
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <div className="w-full md:w-5/6 md:mx-auto flex-1">
        <Page />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
