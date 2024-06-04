import React, { useEffect } from 'react';

interface AlerteProps{

    rain: boolean;
    hot:boolean;

}
function Alerte ({rain,hot}:AlerteProps){

        return(

            <div>

                {rain && <div className="alert alert-warning">Attention, il va pleuvoir!</div>}
                {hot && <div className="alert alert-danger">Attention, il va faire très chaud</div>}

            </div>

        );


}

export default Alerte;