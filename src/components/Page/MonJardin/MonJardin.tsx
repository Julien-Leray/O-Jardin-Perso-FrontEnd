import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import MaMeteo from './Meteo/Meteo';
import MesFavoris from './Favoris/MesFavoris';
import { Product } from '../../../@types/types';
import fetchUserData from '../../../store/thunks/myGardenThunks';
import { Tab, Tabs } from './Tabs';
import PotagerVirtuel from './PotagerVirtuel/PotagerVirtuel';
import Loader from '../../Loader/Loader';

interface MonJardinProps {
  logged: boolean;
  allFavProducts: Product[];
}

function MonJardin({ logged, allFavProducts }: MonJardinProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const { userData } = useAppSelector((state) => state.myGarden);
  const loading = useAppSelector((state) => state.myGarden.loading);
  const error = useAppSelector((state) => state.myGarden.error);

  if (error) {
    return <div>{error}</div>;
  }
  if (!logged) {
    navigate('/');
  }

  return (
    <>
      {loading && <Loader />}
      <div className={`${loading ? 'opacity-20' : ''}`}>
        <Tabs>
          <Tab label="Mon tableau de bord">
            <div className="w-full p-4">
              <h1>Bienvenue {userData.firstname} !</h1>

              <div className="flex flex-col md:flex-row md:justify-between rounded-lg  gap-6 -m-4 my-4 py-4 px-4">
                <div className="rounded-lg shadow-lg border border-gray-200 p-4 md:w-1/4 bg-[#16A1AF]">
                  <h2 className="font-bold text-white text-center	">
                    Mes alertes
                  </h2>
                  {/* <p>{dateOfDay} </p> */}
                </div>

                <MaMeteo userData={userData} logged={logged} />
              </div>
              <MesFavoris allFavProducts={allFavProducts} />
            </div>
          </Tab>
          <Tab label="Mon jardin virtuel">
            <PotagerVirtuel />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default MonJardin;
