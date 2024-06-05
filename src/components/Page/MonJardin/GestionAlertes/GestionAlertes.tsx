import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { updateAlert } from '../../../../store/thunks/myGardenThunks';

interface UserAlerts {
  forecastAlert: boolean;
  wateringAlert: boolean;
}

function GestionAlertes() {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.myGarden);

  const [UserData, setUserData] = useState<UserAlerts>({
    forecastAlert: userData.forecastAlert,
    wateringAlert: userData.wateringAlert,
  });

  let forecast_alert;
  let watering_alert;
  if (userData.forecastAlert === true) {
    forecast_alert = 'Alerte activée';
  } else {
    forecast_alert = 'Alerte désactivée';
  }
  if (userData.wateringAlert === true) {
    watering_alert = 'Alerte activée';
  } else {
    watering_alert = 'Alerte désactivée';
  }

  const changeForecastAlert = async () => {
    UserData.forecastAlert = !UserData.forecastAlert;
    await dispatch(updateAlert(UserData ));
  };

  const changeWateringAlert = async () => {
    UserData.wateringAlert = !UserData.wateringAlert;
    await dispatch(updateAlert(UserData));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between text-white">
        Météo :
        <button
          type="button"
          onClick={() => changeForecastAlert()}
          className="bg-white text-xs text-black p-1 rounded-full"
        >
          {forecast_alert}
        </button>
      </div>
      <br />
      <div className="flex justify-between text-white ">
        Arrosage :
        <button
          type="button"
          onClick={() => changeWateringAlert()}
          className="bg-white text-xs  text-black p-1 rounded-full"
        >
          {watering_alert}
        </button>
      </div>
    </div>
  );
}

export default GestionAlertes;
