import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Page from '../Page/Page';

import { getTokenAndPseudoFromLocalStorage } from '../../localStorage/localstorage';
import { actionLogIn } from '../../store/reducers/user';
import { addTokenJwtToAxiosInstance } from '../../axios/axios';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { jwt, firstname } = getTokenAndPseudoFromLocalStorage();

    if (jwt) {
      dispatch(actionLogIn({ jwt, firstname }));
      addTokenJwtToAxiosInstance(jwt);
    } else {
      console.log('rien dans le localstorage');
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
