import React, { useEffect } from 'react';
import { CloudDrizzle, CloudLightning, Sun } from 'react-feather';

interface AlerteProps {
  rain: boolean;
  hot: boolean;
  thunderstorm: boolean;
}

function Alerte({ rain, hot, thunderstorm }: AlerteProps) {
  return (
    <div>
      {rain && (
        <div className="alert alert-warning text-center my-6">
          <CloudDrizzle className="m-auto" />
          Pluies attendue aujourd'hui
        </div>
      )}
      {hot && (
        <div className="alert alert-warning text-center my-6">
          <Sun className="m-auto" />
          Fortes chaleurs attendues aujourd'hui
        </div>
      )}
      {thunderstorm && (
        <div className="alert alert-warning text-center my-6">
          <CloudLightning className="m-auto" />
          Orages attendus aujourd'hui
        </div>
      )}
    </div>
  );
}

export default Alerte;