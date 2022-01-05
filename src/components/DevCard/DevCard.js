import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Result from '../ResultArea/Result';
import './DevCard.css';

const DevCard = () => {
    let [developers, setDevelopers] = useState([]);
    let [countDev, setCountDev] = useState([]);

    useEffect(() => {
      fetch('./developers.json')
      .then(response => response.json())
      .then(data => setDevelopers(data));
    }, []);

    //Handle Function here
    let handleAppointEvent = developer => {
      let newCountDev = [...countDev, developer];
      setCountDev(newCountDev);
  }
    return (
        <div className="devInfoCardsHire">
          <div className="devInfoCards">        
         {
           developers.map(developer => <Card key={developer.id} developers={developer} handleEvent={handleAppointEvent} />) 
        
         }
         </div>

        <div className="devHire">
        <Result developer={countDev}/>
        </div>
        </div>
    );
};

export default DevCard;