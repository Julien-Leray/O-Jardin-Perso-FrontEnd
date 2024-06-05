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
    forecast_alert = 'activée';
  } else {
    forecast_alert = 'désactivée';
  }
  if (userData.wateringAlert === true) {
    watering_alert = 'activée';
  } else {
    watering_alert = 'désactivée';
  }

  const changeForecastAlert = async () => {
    UserData.forecastAlert = !UserData.forecastAlert;
    await dispatch(updateAlert(UserData));
  };

  const changeWateringAlert = async () => {
    UserData.wateringAlert = !UserData.wateringAlert;
    await dispatch(updateAlert(UserData));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-white mb-4">
        <button
          type="button"
          onClick={() => changeForecastAlert()}
          className="flex flex-row items-center justify-center bg-white text-xs text-black py-2 px-4 rounded-full"
        >
          <input
            defaultChecked={forecast_alert === 'activée' && true}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 mr-2  bg-gray-100 border-gray-300 rounded focus:ring-[#16A1AF] focus:ring-2"
          />
          <div className=" ">Alerte météo {forecast_alert}</div>
        </button>
      </div>

      <button
        type="button"
        onClick={() => changeWateringAlert()}
        className="flex flex-row items-center justify-center bg-white text-xs text-black py-2 px-4 rounded-full"
      >
        <input
          checked={watering_alert === 'activée' && true}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 mr-2  bg-gray-100 border-gray-300 rounded focus:ring-[#16A1AF] focus:ring-2"
        />
        <div className=" ">Alerte arrosage {watering_alert}</div>
      </button>
    </div>
  );
}

export default GestionAlertes;
