import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { updateAlert } from '../../../../store/thunks/myGardenThunks';

interface UserAlerts {
  forecast_alert: boolean;
  watering_alert: boolean;
}

function GestionAlertes() {

  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.myGarden);

  const [UserData, setUserData] = useState<UserAlerts>({
    forecast_alert: userData.forecast_alert,
    watering_alert: userData.watering_alert,
  });

  let forecast_alert;
  let watering_alert;
  if(userData.forecast_alert === true){
    forecast_alert = "Alerte activée";
  } else {
    forecast_alert = "Alerte désactivée";
  }
  if(userData.watering_alert === true){
    watering_alert = "Alerte activée";
  } else {
    watering_alert = "Alerte désactivée";
  }

  const changeForecastAlert =  async() => {
    UserData.forecast_alert = !UserData.forecast_alert;
    await dispatch(updateAlert(UserData));
  }

  const changeWateringAlert =  async() => {
    UserData.watering_alert = !UserData.watering_alert;
    await dispatch(updateAlert(UserData));
  }


  return (
    <div>
      <h1>Gestion des Alertes</h1>
      <br />
                  <div className="flex justify-between text-white">
                    Météo :
                    <button onClick={() => changeForecastAlert()} className="bg-white text-black p-1 rounded-full">
                      {forecast_alert}</button>
                  </div>
                  <br/>
                  <div className='flex justify-between text-white'>
                    Arrosage : 
                    <button onClick={() => changeWateringAlert()} className="bg-white text-black p-1 rounded-full">
                      {watering_alert}</button>
                  </div>
      <p>Configurez et gérez vos alertes pour le jardinage ici.</p>
    </div>
  );
}

export default GestionAlertes;
