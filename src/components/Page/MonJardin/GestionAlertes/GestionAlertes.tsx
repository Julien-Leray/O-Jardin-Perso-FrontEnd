import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { updateAlert } from '../../../../store/thunks/myGardenThunks';



function GestionAlertes() {
  const dispatch = useAppDispatch();
  const  {userData}  = useAppSelector((state) => state.myGarden);
  
  const changeForecastAlert = async () => {
    const newForecastAlert = !userData.forecastAlert;
    await dispatch(updateAlert({ ...userData, forecastAlert: newForecastAlert}));
  };

  const changeWateringAlert = async () => {
    const newWateringAlert = !userData.wateringAlert;
    await dispatch(updateAlert({ ...userData, wateringAlert: newWateringAlert }));
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
            checked={userData.forecastAlert}
            onChange={changeForecastAlert}
            id="forecast-alert-checkbox"
            type="checkbox"
            className="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded focus:ring-[#16A1AF] focus:ring-2"
          />
          <div>Alerte météo {userData.forecastAlert ? 'activée' : 'désactivée'}</div>
        </button>
      </div>

      <button
        type="button"
        onClick={() => changeWateringAlert()}
        className="flex flex-row items-center justify-center bg-white text-xs text-black py-2 px-4 rounded-full"
      >
        <input
          checked={userData.wateringAlert}
          onChange={changeWateringAlert}
          id="watering-alert-checkbox"
          type="checkbox"
          className="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded focus:ring-[#16A1AF] focus:ring-2"
        />
        <div>Alerte arrosage {userData.wateringAlert ? 'activée' : 'désactivée'}</div>
      </button>
    </div>
  );
}

export default GestionAlertes;
