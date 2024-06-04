import React, { useEffect, useState, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Settings, Tool } from 'react-feather';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import MaMeteo from './Meteo/Meteo';
import MesFavoris from './Favoris/MesFavoris';
import { Product } from '../../../@types/types';
import { fetchUserData } from '../../../store/thunks/myGardenThunks';
import { Tab, Tabs } from './Tabs';
import PotagerVirtuel from './PotagerVirtuel/PotagerVirtuel';
import Loader from '../../Loader/Loader';
import ErrorNotif from '../../ErrorNotif/ErrorNotif';
import GestionAlertes from './GestionAlertes/GestionAlertes';

interface MonJardinProps {
  logged: boolean;
  allFavProducts: Product[];
}

function MonJardin({ logged, allFavProducts }: MonJardinProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const { userData } = useAppSelector((state) => state.myGarden);
  const loading = useAppSelector((state) => state.myGarden.loading);
  const error = useAppSelector((state) => state.myGarden.error);

  if (loading) return <Loader />;
  if (error) return <ErrorNotif error={error} />;
  // if (!logged) {
  //   navigate('/');
  // }

  return (
    <>
      {!logged && navigate('/')}
      <div className={`${loading ? 'opacity-20' : ''}`}>
        <Tabs>
          <Tab label="Mon tableau de bord">
            <div className="w-full p-4">
              <h1>Bienvenue {userData.firstname} !</h1>

              <div className="flex flex-col md:flex-row md:justify-between rounded-lg  gap-6 -m-4 my-4 py-4 px-4">
                <div className="rounded-lg shadow-lg border border-gray-200 p-4 md:w-1/4 bg-[#16A1AF]">
                  <div className="flex flex-row justify-between">
                    <h2 className="font-bold text-white text-center	">
                      Mes alertes
                    </h2>
                    <button
                      className="rounded-full text-white "
                      type="button"
                      onClick={() => {
                        setIsSettingsOpen(!isSettingsOpen);
                      }}
                    >
                      <Tool />
                    </button>
                    {/* <p>{dateOfDay} </p> */}
                  </div>
                  {isSettingsOpen && <GestionAlertes />}
                </div>

                <MaMeteo userData={userData} />
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